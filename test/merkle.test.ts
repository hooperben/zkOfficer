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
import { AbiCoder, Contract, keccak256 } from "ethers";
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

const getRandomBigInt = (bits: number) => {
  const bytes = Math.ceil(bits / 8);
  const extraBits = bytes * 8 - bits; // Extra bits we get due to byte alignment
  const arraySize = Math.ceil(bits / 32);
  const randomValues = new Uint32Array(arraySize);
  crypto.getRandomValues(randomValues);

  let randomBigInt = BigInt(0);
  for (let i = 0; i < arraySize - 1; i++) {
    randomBigInt = (randomBigInt << BigInt(32)) | BigInt(randomValues[i]);
  }

  // For the last element, only shift the necessary bits
  randomBigInt =
    (randomBigInt << BigInt(32 - extraBits)) |
    (BigInt(randomValues[arraySize - 1]) >> BigInt(extraBits));

  return randomBigInt;
};

describe("Merkle Tree Testing", function () {
  let registry: Registry;

  let Deployer: SignerWithAddress;
  let Authority: SignerWithAddress;

  let circuit: CompiledCircuit;
  let noir: Noir;

  before("hello", async () => {
    await deployments.fixture("testbed");

    [Authority, Deployer] = await ethers.getSigners();

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

  it("should run", async () => {
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

  it.only("NFC Chip Flow", async () => {
    const message = {
      firstname: "John",
      lastname: "Doe",
    };

    // sign that
    const encodedMessage = AbiCoder.defaultAbiCoder().encode(
      ["string", "string"],
      [message.firstname, message.lastname]
    );

    const messageHash = keccak256(encodedMessage);
    const signedMessage = await Authority.signMessage(messageHash);

    // this signed message is what lives on the NFC chip

    // a user would submit the message + that signed message + some hash of some randomness
    const random = getRandomBigInt(256);
    const hashedRandom = poseidonHash([random]);

    const authorityMessage = {
      message,
      signedMessage,
      hashedRandom,
    };
    console.log(authorityMessage);

    const newLeaf = poseidonHash([signedMessage, hashedRandom]);

    console.log("newLeaf", newLeaf);
  });
});
