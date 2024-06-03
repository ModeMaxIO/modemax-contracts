/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ReferralStorage,
  ReferralStorageInterface,
} from "../../../contracts/mock/ReferralStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAccount",
        type: "address",
      },
    ],
    name: "GovSetCodeOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    name: "RegisterCode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAccount",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    name: "SetCodeOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevGov",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nextGov",
        type: "address",
      },
    ],
    name: "SetGov",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "SetHandler",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "discountShare",
        type: "uint256",
      },
    ],
    name: "SetReferrerDiscountShare",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tierId",
        type: "uint256",
      },
    ],
    name: "SetReferrerTier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tierId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRebate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "discountShare",
        type: "uint256",
      },
    ],
    name: "SetTier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    name: "SetTraderReferralCode",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINTS",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "codeOwners",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getTraderReferralInfo",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
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
        name: "_code",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newAccount",
        type: "address",
      },
    ],
    name: "govSetCodeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isHandler",
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
    name: "pendingGov",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "referrerDiscountShares",
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
        name: "",
        type: "address",
      },
    ],
    name: "referrerTiers",
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
        name: "_code",
        type: "bytes32",
      },
    ],
    name: "registerCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newAccount",
        type: "address",
      },
    ],
    name: "setCodeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_discountShare",
        type: "uint256",
      },
    ],
    name: "setReferrerDiscountShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tierId",
        type: "uint256",
      },
    ],
    name: "setReferrerTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tierId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalRebate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_discountShare",
        type: "uint256",
      },
    ],
    name: "setTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
    ],
    name: "setTraderReferralCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
    ],
    name: "setTraderReferralCodeByUser",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "tiers",
    outputs: [
      {
        internalType: "uint256",
        name: "totalRebate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "discountShare",
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
        name: "",
        type: "address",
      },
    ],
    name: "traderReferralCodes",
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
        name: "_newGov",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610080565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b610c798061008f6000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c8063039af9eb1461010c57806312d43a511461014d5780631582a0181461017857806325240810146101a657806336def2c8146101b95780633fb8b323146101ce57806346ea87af146101e1578063534ef8831461021457806356b4b2ad1461023557806371a6a7901461024857806379ba509714610268578063836a01871461027057806385725b58146102835780639c8e2de9146102a35780639cb7de4b146102b6578063c8b3c460146102c9578063dfcfa250146102f2578063e1e01bf314610305578063e1f1c4a714610318578063ed84313414610321578063f2fde38b14610334575b600080fd5b61013361011a366004610a1e565b6004602052600090815260409020805460019091015482565b604080519283526020830191909152015b60405180910390f35b600054610160906001600160a01b031681565b6040516001600160a01b039091168152602001610144565b610198610186366004610a53565b60036020526000908152604090205481565b604051908152602001610144565b600154610160906001600160a01b031681565b6101cc6101c7366004610a1e565b610347565b005b6101cc6101dc366004610a75565b61043b565b6102046101ef366004610a53565b60056020526000908152604090205460ff1681565b6040519015158152602001610144565b610227610222366004610a53565b6104c1565b604051610144929190610a9f565b6101cc610243366004610a75565b610507565b610198610256366004610a53565b60026020526000908152604090205481565b6101cc610544565b6101cc61027e366004610ab6565b61059f565b610198610291366004610a53565b60076020526000908152604090205481565b6101cc6102b1366004610a1e565b6106c8565b6101cc6102c4366004610ae2565b61072c565b6101606102d7366004610a1e565b6006602052600090815260409020546001600160a01b031681565b6101cc610300366004610b1e565b6107b5565b6101cc610313366004610a1e565b610858565b61019861271081565b6101cc61032f366004610b1e565b610865565b6101cc610342366004610a53565b610928565b8061036d5760405162461bcd60e51b815260040161036490610b4a565b60405180910390fd5b6000818152600660205260409020546001600160a01b0316156103de5760405162461bcd60e51b8152602060048201526024808201527f526566657272616c53746f726167653a20636f646520616c72656164792065786044820152636973747360e01b6064820152608401610364565b6000818152600660205260409081902080546001600160a01b0319163390811790915590517f04f82286a2a3b2ee5c8555de8304dfe2ea70991613213184b73a9e408d2d802991610430918490610b81565b60405180910390a150565b6000546001600160a01b03163314610468573360405163a35b150b60e01b81526004016103649190610b9a565b6001600160a01b03821660009081526003602052604090819020829055517f7696855cdbb94bb5a44cb0a95caff6f29173aa1cbfba193834b12b90827ce2bc906104b59084908490610b81565b60405180910390a15050565b6001600160a01b03811660009081526007602052604081205481908181156104fd57506000818152600660205260409020546001600160a01b03165b9094909350915050565b3360009081526005602052604090205460ff166105365760405162461bcd60e51b815260040161036490610bc9565b6105408282610977565b5050565b6001546001600160a01b03163314610594576040805163a35b150b60e01b81523360048201526024810191909152600a6044820152692832b73234b733a3b7bb60b11b6064820152608401610364565b61059d336109c4565b565b6000546001600160a01b031633146105cc573360405163a35b150b60e01b81526004016103649190610b9a565b61271082111561062a5760405162461bcd60e51b8152602060048201526024808201527f526566657272616c53746f726167653a20696e76616c696420746f74616c52656044820152636261746560e01b6064820152608401610364565b61271081111561064c5760405162461bcd60e51b815260040161036490610bfd565b600083815260046020818152604080842081518083018352878152808401878152958990529383528351815593516001909401939093558251868152908101859052918201839052907f4ebd23a492b2bd79586cb57cae40d7793408265f20320f68b478b971e696f4c79060600160405180910390a150505050565b6127108111156106ea5760405162461bcd60e51b815260040161036490610bfd565b3360008181526002602052604090819020839055517fbd224f3917462b0fa80805fe3ec29be3a37f664955aad6224e5ece036224c42991610430918490610b81565b6000546001600160a01b03163314610759573360405163a35b150b60e01b81526004016103649190610b9a565b6001600160a01b038216600081815260056020908152604091829020805460ff19168515159081179091558251938452908301527fd373464a39404e5f98fdb4b152b8ba9a094561e97e5c4b4ea11eb18cd9e6695e91016104b5565b6000546001600160a01b031633146107e2573360405163a35b150b60e01b81526004016103649190610b9a565b816107ff5760405162461bcd60e51b815260040161036490610b4a565b6000828152600660205260409081902080546001600160a01b0319166001600160a01b038416179055517f6431f88c655dd0e2b8d09b6405c007c515c66d67f2998e69c902873a8c8f3e97906104b59084908490610a9f565b6108623382610977565b50565b816108825760405162461bcd60e51b815260040161036490610b4a565b6000828152600660205260409020546001600160a01b03163381146108b95760405162461bcd60e51b815260040161036490610bc9565b60008381526006602090815260409182902080546001600160a01b0319166001600160a01b0386169081179091558251338152918201529081018490527f5640856798d41ce9ca0a109b54c20a06eb99ba9c36ab4547115dafb8473cf3979060600160405180910390a1505050565b6000546001600160a01b03163314610955573360405163a35b150b60e01b81526004016103649190610b9a565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03821660009081526007602052604090819020829055517f43825f14567dda057e821be2e51a5aa79aa51f3907a647e3ed2bd486a01050f1906104b59084908490610b81565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f78591016104b5565b600060208284031215610a3057600080fd5b5035919050565b80356001600160a01b0381168114610a4e57600080fd5b919050565b600060208284031215610a6557600080fd5b610a6e82610a37565b9392505050565b60008060408385031215610a8857600080fd5b610a9183610a37565b946020939093013593505050565b9182526001600160a01b0316602082015260400190565b600080600060608486031215610acb57600080fd5b505081359360208301359350604090920135919050565b60008060408385031215610af557600080fd5b610afe83610a37565b915060208301358015158114610b1357600080fd5b809150509250929050565b60008060408385031215610b3157600080fd5b82359150610b4160208401610a37565b90509250929050565b6020808252601e908201527f526566657272616c53746f726167653a20696e76616c6964205f636f64650000604082015260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039190911681526040602082018190526003908201526223a7ab60e91b606082015260800190565b6020808252601a90820152792932b332b93930b629ba37b930b3b29d103337b93134b23232b760311b604082015260600190565b60208082526026908201527f526566657272616c53746f726167653a20696e76616c696420646973636f756e60408201526574536861726560d01b60608201526080019056fea264697066735822122088724f8f3518eb2779f77ca4dbb95d66ac2d5793be1961df067f455b0301b66964736f6c63430008120033";

type ReferralStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReferralStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReferralStorage__factory extends ContractFactory {
  constructor(...args: ReferralStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReferralStorage> {
    return super.deploy(overrides || {}) as Promise<ReferralStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReferralStorage {
    return super.attach(address) as ReferralStorage;
  }
  override connect(signer: Signer): ReferralStorage__factory {
    return super.connect(signer) as ReferralStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReferralStorageInterface {
    return new utils.Interface(_abi) as ReferralStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReferralStorage {
    return new Contract(address, _abi, signerOrProvider) as ReferralStorage;
  }
}
