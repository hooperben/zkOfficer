import { compile, createFileManager } from "@noir-lang/noir_wasm";
import { CompiledCircuit } from "@noir-lang/types";
import { ensurePoseidon, poseidonHash, poseidonHash2 } from "../utils/poseidon";
import { MerkleTree } from "fixed-merkle-tree";
import { Noir } from "@noir-lang/noir_js";
import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";
import { AbiCoder } from "ethers";
import NonSybilERC20 from "../deployments/sepolia/NonSybilERC20.json";

export async function getCircuit() {
  const fm = createFileManager("/");

  const main = (await fetch(`/merkle/src/main.nr`))
    .body as ReadableStream<Uint8Array>;

  const nargoToml = (await fetch(`/merkle/Nargo.toml`))
    .body as ReadableStream<Uint8Array>;

  fm.writeFile("./src/main.nr", main);
  fm.writeFile("./Nargo.toml", nargoToml);

  const result = await compile(fm);

  if (!("program" in result)) {
    throw new Error("Compilation failed");
  }

  return result.program as CompiledCircuit;
}

export const idNullifier = () =>
  poseidonHash(["0x38d932809A3642050ef2A83E96F59042BfCAB777"]);

export const verifyIdProof = async (proof: Uint8Array, root: string) => {
  console.log(proof);
  await ensurePoseidon();

  const circuit = await getCircuit();
  const backend = new BarretenbergBackend(circuit, {
    threads: navigator.hardwareConcurrency,
  });
  const noir = new Noir(circuit, backend);

  return await noir.verifyProof({
    proof: proof,
    publicInputs: [root, idNullifier()],
  });
};

export const generateProof = async (
  logs: any[],
  userLeafIndex: number,
  isIdProof?: boolean
) => {
  await ensurePoseidon();

  const decoder = new AbiCoder();

  const formatted = logs.map((log) => {
    const decodedBytes32 = decoder.decode(["bytes32"], log.topics[0]);
    const decodedUint256 = decoder.decode(["uint256"], log.topics[1]);

    return {
      leaf: decodedBytes32.toString(),
      leafIndex: decodedUint256.toString(),
    };
  });

  const circuit = await getCircuit();

  const leaves = formatted
    .sort((a, b) => {
      return Number(a.leafIndex) - Number(b.leafIndex);
    })
    .map((e) => {
      return e.leafIndex.toString();
    });

  const backend = new BarretenbergBackend(circuit, {
    threads: navigator.hardwareConcurrency,
  });

  const noir = new Noir(circuit, backend);

  const tree = new MerkleTree(8, leaves, {
    hashFunction: poseidonHash2,
    zeroElement:
      "21663839004416932945382355908790599225266501822907911457504978515578255421292",
  });

  const addressAsPoseidon = isIdProof
    ? idNullifier()
    : poseidonHash([NonSybilERC20.address]);
  const hashAddressAndRoot = poseidonHash([
    BigInt(tree.root),
    BigInt(addressAsPoseidon),
  ]);

  const merkleProof = tree.proof(leaves[userLeafIndex]);
  const input = {
    root: tree.root,
    leaf: leaves[userLeafIndex],
    path_indices: merkleProof.pathIndices,
    siblings: merkleProof.pathElements,
    nullifier: hashAddressAndRoot,
    using_address: addressAsPoseidon,
  };

  const correctProof = await noir.generateProof(input);

  return correctProof;
};
