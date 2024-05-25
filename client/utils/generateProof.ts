import { compile, createFileManager } from "@noir-lang/noir_wasm";
import { CompiledCircuit } from "@noir-lang/types";
import { ensurePoseidon, poseidonHash, poseidonHash2 } from "../utils/poseidon";
import { MerkleTree } from "fixed-merkle-tree";

import { Noir } from "@noir-lang/noir_js";
import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";

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

export const generateProof = async () => {
  await ensurePoseidon();

  const circuit = await getCircuit();

  // @ts-ignore
  const backend = new BarretenbergBackend(circuit, {
    threads: navigator.hardwareConcurrency,
  });

  // @ts-ignore
  const noir = new Noir(circuit, backend);

  const leaves: string[] = [
    poseidonHash([
      13780856135824609486835123660791248959181113742546918549559321242116770234576,
    ]),
  ];

  const tree = new MerkleTree(8, leaves, {
    hashFunction: poseidonHash2,
    zeroElement:
      "21663839004416932945382355908790599225266501822907911457504978515578255421292",
  });

  const merkleProof = tree.proof(leaves[0]);
  const input = {
    root: tree.root,
    leaf: leaves[0],
    path_indices: merkleProof.pathIndices,
    siblings: merkleProof.pathElements,
  };

  const correctProof = await noir.generateProof(input);
};
