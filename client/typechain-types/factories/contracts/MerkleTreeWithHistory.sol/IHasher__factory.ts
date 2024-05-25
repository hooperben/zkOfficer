/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IHasher,
  IHasherInterface,
} from "../../../contracts/MerkleTreeWithHistory.sol/IHasher";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[2]",
        name: "inputs",
        type: "bytes32[2]",
      },
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class IHasher__factory {
  static readonly abi = _abi;
  static createInterface(): IHasherInterface {
    return new Interface(_abi) as IHasherInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IHasher {
    return new Contract(address, _abi, runner) as unknown as IHasher;
  }
}
