import hre, { deployments, ethers } from "hardhat";
import { Registry } from "../typechain-types";
import { MerkleTree } from "fixed-merkle-tree";
import {
  ensurePoseidon,
  poseidonHash,
  poseidonHash2,
} from "../helpers/poseidon";

import { Noir } from "@noir-lang/noir_js";
import { BarretenbergBackend } from "@noir-lang/backend_barretenberg";

import { compile, createFileManager } from "@noir-lang/noir_wasm";
import { CompiledCircuit } from "@noir-lang/types";
import { resolve } from "path";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

const getCircuit = async () => {
  const basePath = resolve("./merkle/");
  const fm = createFileManager(basePath);
  const result = await compile(fm);
  if (!("program" in result)) {
    throw new Error("Compilation failed");
  }
  return result.program as CompiledCircuit;
};

describe("Merkle Tree Testing", function () {
  let registry: Registry;

  let Deployer: SignerWithAddress;

  let circuit: CompiledCircuit;
  let noir: Noir;

  before("hello", async () => {
    await deployments.fixture("testbed");

    [Deployer] = await ethers.getSigners();

    await ensurePoseidon();

    circuit = await getCircuit();

    // @ts-ignore
    const backend = new BarretenbergBackend(circuit);
    // @ts-ignore
    noir = new Noir(circuit, backend);

    const registryDeployment = await hre.deployments.get("Registry");
    registry = new Contract(
      registryDeployment.address,
      registryDeployment.abi,
      Deployer
    ) as unknown as Registry;
  });

  it.only("should run", async () => {
    const leaves: string[] = [
      poseidonHash([
        13780856135824609486835123660791248959181113742546918549559321242116770234576n,
      ]),
    ];

    const tree = new MerkleTree(8, leaves, {
      hashFunction: poseidonHash2,
      zeroElement:
        "21663839004416932945382355908790599225266501822907911457504978515578255421292",
    });

    const test = tree.proof(leaves[0]);
    const input = {
      root: tree.root,
      leaf: leaves[0],
      path_indices: test.pathIndices,
      siblings: test.pathElements,
    };
    // Generate proof
    const correctProof = await noir.generateProof(input);

    // @ts-ignore
    await registry.verifyProof(correctProof.proof, correctProof.publicInputs);
  });
});
