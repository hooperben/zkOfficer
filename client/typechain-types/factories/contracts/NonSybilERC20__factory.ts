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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  NonSybilERC20,
  NonSybilERC20Interface,
} from "../../contracts/NonSybilERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_publicInputs",
        type: "bytes32[]",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifiers",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract UltraVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162001db838038062001db8833981016040819052620000359162000266565b6040518060400160405280600781526020016626bcaa37b5b2b760c91b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b8152508160039081620000bd91906200039b565b506004620000cc82826200039b565b50620000de9150839050600562000149565b61012052620000ef81600662000149565b61014052815160208084019190912060e052815190820120610100524660a0526200011962000182565b60805250503060c05250600880546001600160a01b0319166001600160a01b039290921691909117905562000583565b600060208351101562000169576200016183620001de565b90506200017c565b816200017684826200039b565b5060ff90505b92915050565b60e05161010051604051600092620001c3927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f92469030906020016200047a565b60405160208183030381529060405280519060200120905090565b600080829050601f8151111562000215578260405163305a27a960e01b81526004016200020c91906200052b565b60405180910390fd5b8051620002228262000549565b179392505050565b90565b60006001600160a01b0382166200017c565b6200024a816200022d565b81146200025657600080fd5b50565b80516200017c816200023f565b6000602082840312156200027d576200027d600080fd5b62000289838362000259565b9392505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052602260045260246000fd5b600281046001821680620002d157607f821691505b602082108103620002e657620002e6620002a6565b50919050565b60006200017c6200022a8381565b6200030583620002ec565b815460001960089490940293841b1916921b91909117905550565b60006200032f818484620002fa565b505050565b8181101562000353576200034a60008262000320565b60010162000334565b5050565b601f8211156200032f576000818152602090206020601f85010481016020851015620003805750805b620003946020601f86010483018262000334565b5050505050565b81516001600160401b03811115620003b757620003b762000290565b620003c38254620002bc565b620003d082828562000357565b506020601f821160018114620004085760008315620003ef5750848201515b600019600885021c198116600285021785555062000394565b600084815260208120601f198516915b828110156200043a578785015182556020948501946001909201910162000418565b5084821015620004585783870151600019601f87166008021c191681555b50505050600202600101905550565b805b82525050565b62000469816200022d565b60a081016200048a828862000467565b62000499602083018762000467565b620004a8604083018662000467565b620004b7606083018562000467565b620004c660808301846200046f565b9695505050505050565b60005b83811015620004ed578181015183820152602001620004d3565b50506000910152565b600062000501825190565b8084526020840193506200051a818560208601620004d0565b601f01601f19169290920192915050565b60208082528101620002898184620004f6565b60006200017c825190565b600062000554825190565b6020830162000563816200053e565b9250506020811015620002e6576000196020919091036008021b16919050565b60805160a05160c05160e0516101005161012051610140516117da620005de60003960006108e9015260006108bc01526000610c5301526000610c3201526000610837015260006108610152600061088b01526117da6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb14610220578063c1d7799c14610233578063d505accf14610248578063dd62ed3e1461025b57600080fd5b806370a08231146101c15780637ecebe00146101ea57806384b0196e146101fd57806395d89b411461021857600080fd5b80632997e86b116100d35780632997e86b146101675780632b7ac3f31461018a578063313ce567146101aa5780633644e515146101b957600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014357806323b872dd14610154575b600080fd5b61010d610294565b60405161011a9190610fe8565b60405180910390f35b61013661013136600461103d565b610326565b60405161011a919061107f565b6002545b60405161011a9190611093565b6101366101623660046110a1565b610340565b6101366101753660046110ea565b60096020526000908152604090205460ff1681565b60085461019d906001600160a01b031681565b60405161011a9190611128565b601260405161011a919061113f565b610147610366565b6101476101cf36600461114d565b6001600160a01b031660009081526020819052604090205490565b6101476101f836600461114d565b610375565b610205610393565b60405161011a97969594939291906111fb565b61010d6103f5565b61013661022e36600461103d565b610404565b610246610241366004611314565b610412565b005b6102466102563660046113b5565b6105ab565b610147610269366004611445565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102a39061148a565b80601f01602080910402602001604051908101604052809291908181526020018280546102cf9061148a565b801561031c5780601f106102f15761010080835404028352916020019161031c565b820191906000526020600020905b8154815290600101906020018083116102ff57829003601f168201915b5050505050905090565b6000336103348185856106e5565b60019150505b92915050565b60003361034e8582856106f7565b610359858585610799565b60019150505b9392505050565b600061037061082a565b905090565b6001600160a01b03811660009081526007602052604081205461033a565b6000606080600080600060606103a76108b5565b6103af6108e2565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b6060600480546102a39061148a565b600033610334818585610799565b6009600083836001818110610429576104296114b6565b602090810292909201358352508101919091526040016000205460ff1615610486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d906114fe565b60405180910390fd5b6008546040517fea50d0e40000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063ea50d0e4906104d5908790879087908790600401611595565b602060405180830381865afa1580156104f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051691906115d9565b61054c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d9061162a565b60016009600084846001818110610565576105656114b6565b90506020020135815260200190815260200160002060006101000a81548160ff0219169083151502179055506105a48568056bc75e2d6310000061090f565b5050505050565b834211156105e757836040517f6279130200000000000000000000000000000000000000000000000000000000815260040161047d9190611093565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886106348c6001600160a01b0316600090815260076020526040902080546001810190915590565b8960405160200161064a9695949392919061163a565b604051602081830303815290604052805190602001209050600061066d82610962565b9050600061067d828787876109aa565b9050896001600160a01b0316816001600160a01b0316146106ce57808a6040517f4b800e4600000000000000000000000000000000000000000000000000000000815260040161047d929190611694565b6106d98a8a8a6106e5565b50505050505050505050565b6106f283838360016109da565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107935781811015610784578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161047d939291906116af565b610793848484840360006109da565b50505050565b6001600160a01b0383166107dc5760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161047d91906116d7565b6001600160a01b03821661081f5760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161047d91906116d7565b6106f2838383610adf565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561088357507f000000000000000000000000000000000000000000000000000000000000000046145b156108ad57507f000000000000000000000000000000000000000000000000000000000000000090565b610370610c0d565b60606103707f00000000000000000000000000000000000000000000000000000000000000006005610ca3565b60606103707f00000000000000000000000000000000000000000000000000000000000000006006610ca3565b6001600160a01b0382166109525760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161047d91906116d7565b61095e60008383610adf565b5050565b600061033a61096f61082a565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b6000806000806109bc88888888610d4e565b9250925092506109cc8282610e10565b50909150505b949350505050565b6001600160a01b038416610a1d5760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161047d91906116d7565b6001600160a01b038316610a605760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161047d91906116d7565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561079357826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610ad19190611093565b60405180910390a350505050565b6001600160a01b038316610b0a578060026000828254610aff91906116fb565b90915550610b829050565b6001600160a01b03831660009081526020819052604090205481811015610b63578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161047d939291906116af565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b9e57600280548290039055610bbd565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c009190611093565b60405180910390a3505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001610c8895949392919061170e565b60405160208183030381529060405280519060200120905090565b606060ff8314610cbd57610cb683610f12565b905061033a565b818054610cc99061148a565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf59061148a565b8015610d425780601f10610d1757610100808354040283529160200191610d42565b820191906000526020600020905b815481529060010190602001808311610d2557829003601f168201915b5050505050905061033a565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610d895750600091506003905082610e06565b600060018888888860405160008152602001604052604051610dae9493929190611750565b6020604051602081039080840390855afa158015610dd0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610dfc57506000925060019150829050610e06565b9250600091508190505b9450945094915050565b6000826003811115610e2457610e2461178e565b03610e2d575050565b6001826003811115610e4157610e4161178e565b03610e78576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002826003811115610e8c57610e8c61178e565b03610ec5576040517ffce698f700000000000000000000000000000000000000000000000000000000815261047d908290600401611093565b6003826003811115610ed957610ed961178e565b0361095e57806040517fd78bce0c00000000000000000000000000000000000000000000000000000000815260040161047d9190611093565b60606000610f1f83610f51565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f81111561033a576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b83811015610fad578181015183820152602001610f95565b50506000910152565b6000610fc0825190565b808452602084019350610fd7818560208601610f92565b601f01601f19169290920192915050565b6020808252810161035f8184610fb6565b60006001600160a01b03821661033a565b61101381610ff9565b811461101e57600080fd5b50565b803561033a8161100a565b80611013565b803561033a8161102c565b6000806040838503121561105357611053600080fd5b61105d8484611021565b915061106c8460208501611032565b90509250929050565b8015155b82525050565b6020810161033a8284611075565b80611079565b6020810161033a828461108d565b6000806000606084860312156110b9576110b9600080fd5b6110c38585611021565b92506110d28560208601611021565b91506110e18560408601611032565b90509250925092565b6000602082840312156110ff576110ff600080fd5b61035f8383611032565b600061033a82610ff9565b600061033a82611109565b61107981611114565b6020810161033a828461111f565b60ff8116611079565b6020810161033a8284611136565b60006020828403121561116257611162600080fd5b61035f8383611021565b7fff000000000000000000000000000000000000000000000000000000000000008116611079565b61107981610ff9565b6111a7828261108d565b5060200190565b60200190565b60006111be825190565b808452602093840193830160005b828110156111f15781516111e0878261119d565b9650506020820191506001016111cc565b5093949350505050565b60e08101611209828a61116c565b818103602083015261121b8189610fb6565b9050818103604083015261122f8188610fb6565b905061123e606083018761108d565b61124b6080830186611194565b61125860a083018561108d565b81810360c083015261126a81846111b4565b9998505050505050505050565b60008083601f84011261128c5761128c600080fd5b50813567ffffffffffffffff8111156112a7576112a7600080fd5b6020830191508360018202830111156112c2576112c2600080fd5b9250929050565b60008083601f8401126112de576112de600080fd5b50813567ffffffffffffffff8111156112f9576112f9600080fd5b6020830191508360208202830111156112c2576112c2600080fd5b60008060008060006060868803121561132f5761132f600080fd5b6113398787611021565b9450602086013567ffffffffffffffff81111561135857611358600080fd5b61136488828901611277565b9450945050604086013567ffffffffffffffff81111561138657611386600080fd5b611392888289016112c9565b92509250509295509295909350565b60ff8116611013565b803561033a816113a1565b600080600080600080600060e0888a0312156113d3576113d3600080fd5b6113dd8989611021565b96506113ec8960208a01611021565b95506113fb8960408a01611032565b945061140a8960608a01611032565b93506114198960808a016113aa565b92506114288960a08a01611032565b91506114378960c08a01611032565b905092959891949750929550565b6000806040838503121561145b5761145b600080fd5b6114658484611021565b915061106c8460208501611021565b634e487b7160e01b600052602260045260246000fd5b60028104600182168061149e57607f821691505b6020821081036114b0576114b0611474565b50919050565b634e487b7160e01b600052603260045260246000fd5b600e8152602081017f4e756c6c69666965722075736564000000000000000000000000000000000000815290506111ae565b6020808252810161033a816114cc565b82818337506000910152565b81835260208301925061152e82848361150e565b50601f01601f19160190565b82818337505050565b81835260208301925060007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561157e5761157e600080fd5b60208302925061158f83858461153a565b50500190565b604080825281016115a781868861151a565b905081810360208301526115bc818486611543565b9695505050505050565b801515611013565b805161033a816115c6565b6000602082840312156115ee576115ee600080fd5b61035f83836115ce565b600d8152602081017f496e76616c69642070726f6f6600000000000000000000000000000000000000815290506111ae565b6020808252810161033a816115f8565b60c08101611648828961108d565b6116556020830188611194565b6116626040830187611194565b61166f606083018661108d565b61167c608083018561108d565b61168960a083018461108d565b979650505050505050565b604081016116a28285611194565b61035f6020830184611194565b606081016116bd8286611194565b6116ca602083018561108d565b6109d2604083018461108d565b6020810161033a8284611194565b634e487b7160e01b600052601160045260246000fd5b8082018082111561033a5761033a6116e5565b60a0810161171c828861108d565b611729602083018761108d565b611736604083018661108d565b611743606083018561108d565b6115bc6080830184611194565b6080810161175e828761108d565b61176b6020830186611136565b611778604083018561108d565b611785606083018461108d565b95945050505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b270528729328ec5a0ec0c9f6fc03c07e35e48fa89547324566550bcedbe0fbf64736f6c63430008180033";

type NonSybilERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NonSybilERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NonSybilERC20__factory extends ContractFactory {
  constructor(...args: NonSybilERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _verifier: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_verifier, overrides || {});
  }
  override deploy(
    _verifier: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_verifier, overrides || {}) as Promise<
      NonSybilERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NonSybilERC20__factory {
    return super.connect(runner) as NonSybilERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NonSybilERC20Interface {
    return new Interface(_abi) as NonSybilERC20Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NonSybilERC20 {
    return new Contract(address, _abi, runner) as unknown as NonSybilERC20;
  }
}
