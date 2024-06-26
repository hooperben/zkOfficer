import hre, { deployments, ethers } from "hardhat";
import { NonSybilERC20, Registry } from "../typechain-types";
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
import { expect } from "chai";

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
  let nonSybilERC20: NonSybilERC20;

  let Deployer: SignerWithAddress;
  let Authority: SignerWithAddress;
  let SybilTokenReceiver: SignerWithAddress;

  let circuit: CompiledCircuit;
  let noir: Noir;

  before("set up", async () => {
    await deployments.fixture("testbed");

    [Authority, Deployer, SybilTokenReceiver] = await ethers.getSigners();

    await ensurePoseidon();

    circuit = await getCircuit();

    const backend = new BarretenbergBackend(circuit);
    noir = new Noir(circuit, backend);

    const registryDeployment = await hre.deployments.get("Registry");
    registry = new Contract(
      registryDeployment.address,
      registryDeployment.abi,
      Deployer
    ) as unknown as Registry;

    const NonSybilERC20Deployment = await hre.deployments.get("NonSybilERC20");
    nonSybilERC20 = new Contract(
      NonSybilERC20Deployment.address,
      NonSybilERC20Deployment.abi,
      Deployer
    ) as unknown as NonSybilERC20;
  });

  it("should let a user with an encrypted record within the tree use it", async () => {
    // first we create our users message hash
    const message = {
      firstname: "John",
      lastname: "Doe",
    };
    const encodedMessage = AbiCoder.defaultAbiCoder().encode(
      ["string", "string"],
      [message.firstname, message.lastname]
    );

    // we wrap our message hash in the bounds of the merkle limits
    const messageHash = (
      BigInt(keccak256(encodedMessage)) %
      BigInt(
        "21888242871839275222246405745257275088548364400416034343698204186575808495617"
      )
    ).toString();

    // next the user generates their secret
    const secret =
      21088105314810073508975613344133470274112327938226801880624427918733235725102n; // getRandomBigInt(256);

    // and hashes it
    const hashedUserSecret = poseidonHash([secret]);

    // an admin inserts the hash + hash(hashedUserSecret)
    const newLeaf = poseidonHash([messageHash, hashedUserSecret]);

    // add the leaf to the tree
    const abi = new AbiCoder();

    await registry
      .connect(Authority)
      .addLeaf(abi.encode(["uint256"], [newLeaf]));

    // get the leaves from the event
    const filter = registry.filters.NewLeaf();
    const events = await registry.queryFilter(filter);

    // sort the leaves in the tree
    const leaves = events
      .sort((a, b) => {
        return Number(a.args?.leafIndex) - Number(b.args?.leafIndex);
      })
      .map((e) => {
        return BigInt(e.args?.indexedleaf).toString();
      });

    // construct the tree (the zero element is the root set in the MerkleTreeWithHistory constructor)
    const tree = new MerkleTree(8, leaves, {
      hashFunction: poseidonHash2,
      zeroElement:
        "21663839004416932945382355908790599225266501822907911457504978515578255421292",
    });

    // next we constructor our nullifier
    const verifyingParty = "0x405338F496D665C821518107895F0b9639Fde789";
    const hashedLeaf = poseidonHash([newLeaf]);
    const nullifier = poseidonHash([hashedLeaf, verifyingParty]);

    // get our merkle proof
    const merkleProof = tree.proof(leaves[0]);

    const input = {
      root: tree.root,
      verifying_party: verifyingParty,
      nullifier,
      user_secret: secret.toString(),
      user_hash: messageHash,
      path_indices: merkleProof.pathIndices,
      siblings: merkleProof.pathElements,
    };

    // Generate proof
    const correctProof = await noir.generateProof(input);

    expect(
      await registry.verifyProof(correctProof.proof, correctProof.publicInputs)
    ).to.equal(true);

    // NOW LETS MINT A TOKEN WITH OUR PROOF

    const erc20UsingAddress = await nonSybilERC20.getAddress();
    const mintNullifier = poseidonHash([hashedLeaf, erc20UsingAddress]);

    const mintInput = {
      root: tree.root,
      verifying_party: erc20UsingAddress,
      nullifier: mintNullifier,
      user_secret: secret.toString(),
      user_hash: messageHash,
      path_indices: merkleProof.pathIndices,
      siblings: merkleProof.pathElements,
    };

    const mintProof = await noir.generateProof(mintInput);

    const balanceBefore = await nonSybilERC20.balanceOf(
      SybilTokenReceiver.address
    );
    await nonSybilERC20.mint(
      SybilTokenReceiver.address,
      mintProof.proof,
      mintProof.publicInputs
    );
    const balanceAfter = await nonSybilERC20.balanceOf(
      SybilTokenReceiver.address
    );

    expect(balanceAfter).to.greaterThan(balanceBefore);

    // if we resubmit - we should not be able to claim more than once

    await expect(
      nonSybilERC20.mint(
        SybilTokenReceiver.address,
        mintProof.proof,
        mintProof.publicInputs
      )
    ).to.be.rejected;
  });
});
