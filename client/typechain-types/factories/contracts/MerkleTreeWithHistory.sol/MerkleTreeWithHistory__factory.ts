/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MerkleTreeWithHistory,
  MerkleTreeWithHistoryInterface,
} from "../../../contracts/MerkleTreeWithHistory.sol/MerkleTreeWithHistory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_levels",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IHasher",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
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

const _bytecode =
  "0x60a0604052600380546001600160401b03191690553480156200002157600080fd5b5060405162000fc138038062000fc1833981016040819052620000449162000162565b60008363ffffffff1611620000765760405162461bcd60e51b81526004016200006d90620001b3565b60405180910390fd5b60208363ffffffff16106200009f5760405162461bcd60e51b81526004016200006d90620001fb565b63ffffffff909216608052600080546001600160a01b039092166001600160a01b0319909216919091178155805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b5562000237565b63ffffffff81165b81146200010e57600080fd5b50565b80516200011e81620000fa565b92915050565b60006001600160a01b0382166200011e565b620001028162000124565b80516200011e8162000136565b8062000102565b80516200011e816200014e565b6000806000606084860312156200017c576200017c600080fd5b62000188858562000111565b925062000199856020860162000141565b9150620001aa856040860162000155565b90509250925092565b602080825281016200011e81602381527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60208201526265726f60e81b604082015260600190565b602080825281016200011e81601e81527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000602082015260400190565b608051610d6e6200025360003960006101390152610d6e6000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063c2b40ae41161008c578063ec73295911610066578063ec732959146101f0578063ed33639f14610217578063f178e47c14610244578063fc7e9c6f1461026457600080fd5b8063c2b40ae4146101b5578063cd87a3b4146101d5578063e8295588146101dd57600080fd5b80636d9833e3116100bd5780636d9833e31461016857806390eeb02b14610188578063ba70f7571461019857600080fd5b806338bf282e146100e4578063414a37ba1461010d5780634ecf518b14610134575b600080fd5b6100f76100f2366004610a83565b61027c565b6040516101049190610ac3565b60405180910390f35b6100f77f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181565b61015b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516101049190610add565b61017b610176366004610aeb565b6103b8565b6040516101049190610b19565b60035461015b9063ffffffff1681565b60035463ffffffff166000908152600260205260409020546100f7565b6100f76101c3366004610aeb565b60026020526000908152604090205481565b61015b606481565b6100f76101eb366004610aeb565b610436565b6100f77f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b6000546102379073ffffffffffffffffffffffffffffffffffffffff1681565b6040516101049190610b64565b6100f7610252366004610aeb565b60016020526000908152604090205481565b60035461015b90640100000000900463ffffffff1681565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183106102c65760405162461bcd60e51b81526004016102bd90610ba4565b60405180910390fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182106103055760405162461bcd60e51b81526004016102bd90610bb4565b61030d610a5e565b838152602081018390526000546040517f299e566000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063299e56609061036d908490600401610c58565b602060405180830381865afa15801561038a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ae9190610c6d565b9150505b92915050565b60008181036103c957506000919050565b60035463ffffffff16805b63ffffffff811660009081526002602052604090205484036103fa575060019392505050565b8063ffffffff1660000361040c575060645b8061041681610cbb565b9150508163ffffffff168163ffffffff16036103d4575060009392505050565b60008160000361046757507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c919050565b8160010361049657507f13e37f2d6cb86c78ccc1788607c2b199788c6bb0a615a21f2e7a8e88384222f8919050565b816002036104c557507f217126fa352c326896e8c2803eec8fd63ad50cf65edfef27a41a9e32dc622765919050565b816003036104f457507f0e28a61a9b3e91007d5a9e3ada18e1b24d6d230c618388ee5df34cacd7397eee919050565b8160040361052357507f27953447a6979839536badc5425ed15fadb0e292e9bc36f92f0aa5cfa5013587919050565b8160050361055257507f194191edbfb91d10f6a7afd315f33095410c7801c47175c2df6dc2cce0e3affc919050565b8160060361058157507f1733dece17d71190516dbaf1927936fa643dc7079fc0cc731de9d6845a47741f919050565b816007036105b057507f267855a7dc75db39d81d17f95d0a7aa572bf5ae19f4db0e84221d2b2ef999219919050565b816008036105df57507f1184e11836b4c36ad8238a340ecc0985eeba665327e33e9b0e3641027c27620d919050565b8160090361060e57507f0702ab83a135d7f55350ab1bfaa90babd8fc1d2b3e6a7215381a7b2213d6c5ce919050565b81600a0361063d57507f2eecc0de814cfd8c57ce882babb2e30d1da56621aef7a47f3291cffeaec26ad7919050565b81600b0361066c57507f280bc02145c155d5833585b6c7b08501055157dd30ce005319621dc462d33b47919050565b81600c0361069b57507f045132221d1fa0a7f4aed8acd2cbec1e2189b7732ccb2ec272b9c60f0d5afc5b919050565b81600d036106ca57507f27f427ccbf58a44b1270abbe4eda6ba53bd6ac4d88cf1e00a13c4371ce71d366919050565b81600e036106f957507f1617eaae5064f26e8f8a6493ae92bfded7fde71b65df1ca6d5dcec0df70b2cef919050565b81600f0361072857507f20c6b400d0ea1b15435703c31c31ee63ad7ba5c8da66cec2796feacea575abca919050565b8160100361075757507f09589ddb438723f53a8e57bdada7c5f8ed67e8fece3889a73618732965645eec919050565b8160110361078557507e64b6a738a5ff537db7b220f3394f0ecbd35bfd355c5425dc1166bf3236079b919050565b816012036107b457507f095de56281b1d5055e897c3574ff790d5ee81dbc5df784ad2d67795e557c9e9f919050565b816013036107e357507f11cf2e2887aa21963a6ec14289183efe4d4c60f14ecd3d6fe0beebdf855a9b63919050565b8160140361081257507f2b0f6fc0179fa65b6f73627c0e1e84c7374d2eaec44c9a48f2571393ea77bcbb919050565b8160150361084157507f16fdb637c2abf9c0f988dbf2fd64258c46fb6a273d537b2cf1603ea460b13279919050565b8160160361087057507f21bbd7e944f6124dad4c376df9cc12e7ca66e47dff703ff7cedb1a454edcf0ff919050565b8160170361089f57507f2784f8220b1c963e468f590f137baaa1625b3b92a27ad9b6e84eb0d3454d9962919050565b816018036108ce57507f16ace1a65b7534142f8cc1aad810b3d6a7a74ca905d9c275cb98ba57e509fc10919050565b816019036108fd57507f2328068c6a8c24265124debd8fe10d3f29f0665ea725a65e3638f6192a96a013919050565b81601a0361092c57507f2ddb991be1f028022411b4c4d2c22043e5e751c120736f00adf54acab1c9ac14919050565b81601b0361095b57507f0113798410eaeb95056a464f70521eb58377c0155f2fe518a5594d38cc209cc0919050565b81601c0361098a57507f202d1ae61526f0d0d01ef80fb5d4055a7af45721024c2c24cffd6a3798f54d50919050565b81601d036109b957507f23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f187919050565b81601e036109e857507f1f15585f8947e378bcf8bd918716799da909acdb944c57150b1eb4565fda8aa0919050565b81601f03610a1757507f1eb064b21055ac6a350cf41eb30e4ce2cb19680217df3a243617c2838185ad06919050565b81602003610a4657507f25a90efc49af54a5b7154a6eaba978dcf04796b4984fe54be8d4ea8579e1f1e6919050565b60405162461bcd60e51b81526004016102bd90610d28565b60405180604001604052806002906020820280368337509192915050565b80356103b2565b60008060408385031215610a9957610a99600080fd5b610aa38484610a7c565b9150610ab28460208501610a7c565b90509250929050565b805b82525050565b602081016103b28284610abb565b63ffffffff8116610abd565b602081016103b28284610ad1565b600060208284031215610b0057610b00600080fd5b610b0a8383610a7c565b9392505050565b801515610abd565b602081016103b28284610b11565b600073ffffffffffffffffffffffffffffffffffffffff82166103b2565b60006103b282610b27565b60006103b282610b45565b610abd81610b50565b602081016103b28284610b5b565b60208082527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6491019081525b60200190565b602080825281016103b281610b72565b602080825281016103b281602181527f5f72696768742073686f756c6420626520696e7369646520746865206669656c60208201527f6400000000000000000000000000000000000000000000000000000000000000604082015260600190565b610c1f8282610abb565b5060200190565b60028160005b82811015610c51578151610c408682610c15565b955050602082019150600101610c2c565b5050505050565b604081016103b28284610c26565b80516103b2565b600060208284031215610c8257610c82600080fd5b610b0a8383610c66565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b63ffffffff16600081610cd057610cd0610c8c565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60138152602081017f496e646578206f7574206f6620626f756e64730000000000000000000000000081529050610b9e565b602080825281016103b281610cf656fea264697066735822122010a0df012b4b1dec322a01fe3635940b47c9769ed2fa4b24729c438a1146d50e64736f6c63430008180033";

type MerkleTreeWithHistoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleTreeWithHistoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleTreeWithHistory__factory extends ContractFactory {
  constructor(...args: MerkleTreeWithHistoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _levels: BigNumberish,
    _hasher: AddressLike,
    _root: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_levels, _hasher, _root, overrides || {});
  }
  override deploy(
    _levels: BigNumberish,
    _hasher: AddressLike,
    _root: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_levels, _hasher, _root, overrides || {}) as Promise<
      MerkleTreeWithHistory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MerkleTreeWithHistory__factory {
    return super.connect(runner) as MerkleTreeWithHistory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeWithHistoryInterface {
    return new Interface(_abi) as MerkleTreeWithHistoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MerkleTreeWithHistory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MerkleTreeWithHistory;
  }
}
