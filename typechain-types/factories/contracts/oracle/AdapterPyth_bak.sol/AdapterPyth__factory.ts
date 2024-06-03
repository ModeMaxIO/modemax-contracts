/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AdapterPyth,
  AdapterPythInterface,
} from "../../../../contracts/oracle/AdapterPyth_bak.sol/AdapterPyth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "priceId",
        type: "bytes32",
      },
    ],
    name: "getEmaPriceUnsafe",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "priceId",
        type: "bytes32",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "priceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    name: "getPriceNoOlderThan",
    outputs: [
      {
        components: [
          {
            internalType: "int64",
            name: "price",
            type: "int64",
          },
          {
            internalType: "uint64",
            name: "conf",
            type: "uint64",
          },
          {
            internalType: "int32",
            name: "expo",
            type: "int32",
          },
          {
            internalType: "uint256",
            name: "publishTime",
            type: "uint256",
          },
        ],
        internalType: "struct PythStructs.Price",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "priceFeedId",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "latestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "price",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pythContract",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107f03803806107f083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61075d806100936000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806303ab61a31461005c57806331d98b3f146100895780638a32ada0146100de5780639474f45b14610109578063a4ae35e01461011c575b600080fd5b61006f61006a366004610450565b61012f565b604080519283526020830191909152015b60405180910390f35b61009c610097366004610486565b610250565b6040516100809190815160070b81526020808301516001600160401b03169082015260408083015160030b908201526060918201519181019190915260800190565b6000546100f1906001600160a01b031681565b6040516001600160a01b039091168152602001610080565b61009c610117366004610486565b6102cf565b61009c61012a36600461049f565b61030a565b600080546040516331d98b3f60e01b81526004810185905282916001600160a01b03169081906331d98b3f90602401608060405180830381865afa925050508015610197575060408051601f3d908101601f19168201909252610194918101906104ef565b60015b61022757604051639474f45b60e01b8152600481018690526001600160a01b03821690639474f45b90602401608060405180830381865afa9250505080156101fc575060408051601f3d908101601f191682019092526101f9918101906104ef565b60015b1561022257610217816000015160070b826040015187610392565b935080606001519250505b610248565b61023d816000015160070b826040015187610392565b935080606001519250505b509250929050565b610258610429565b6000546040516331d98b3f60e01b8152600481018490526001600160a01b039091169081906331d98b3f906024015b608060405180830381865afa1580156102a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c891906104ef565b9392505050565b6102d7610429565b600054604051639474f45b60e01b8152600481018490526001600160a01b03909116908190639474f45b90602401610287565b610312610429565b60005460405163052571af60e51b815260048101859052602481018490526001600160a01b0390911690819063a4ae35e090604401608060405180830381865afa158015610364573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038891906104ef565b9150505b92915050565b600061039d83610594565b63ffffffff168260ff1611156103dc576103b683610594565b6103c090836105b7565b6103cb90600a6106ac565b6103d590856106bb565b9350610421565b6103e583610594565b63ffffffff168260ff16101561042157816103ff84610594565b61040991906105b7565b61041490600a6106ac565b61041e90856106eb565b93505b509192915050565b60408051608081018252600080825260208201819052918101829052606081019190915290565b6000806040838503121561046357600080fd5b82359150602083013560ff8116811461047b57600080fd5b809150509250929050565b60006020828403121561049857600080fd5b5035919050565b600080604083850312156104b257600080fd5b50508035926020909101359150565b80516001600160401b03811681146104d857600080fd5b919050565b8051600381900b81146104d857600080fd5b60006080828403121561050157600080fd5b604051608081016001600160401b038111828210171561053157634e487b7160e01b600052604160045260246000fd5b6040528251600781900b811461054657600080fd5b8152610554602084016104c1565b6020820152610565604084016104dd565b6040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008160030b637fffffff1981036105ae576105ae61057e565b60000392915050565b60ff828116828216039081111561038c5761038c61057e565b600181815b808511156102485781600019048211156105f1576105f161057e565b808516156105fe57918102915b93841c93908002906105d5565b60008261061a5750600161038c565b816106275750600061038c565b816001811461063d576002811461064757610663565b600191505061038c565b60ff8411156106585761065861057e565b50506001821b61038c565b5060208310610133831016604e8410600b8410161715610686575081810a61038c565b61069083836105d0565b80600019048211156106a4576106a461057e565b029392505050565b60006102c860ff84168361060b565b80820260008212600160ff1b841416156106d7576106d761057e565b818105831482151761038c5761038c61057e565b60008261070857634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156107225761072261057e565b50059056fea2646970667358221220a5568b7132812af2ec8adef15833ff6bb041a4d8a7b370d1e434bfc548d7fae364736f6c63430008120033";

type AdapterPythConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdapterPythConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdapterPyth__factory extends ContractFactory {
  constructor(...args: AdapterPythConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    contractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdapterPyth> {
    return super.deploy(
      contractAddress,
      overrides || {}
    ) as Promise<AdapterPyth>;
  }
  override getDeployTransaction(
    contractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(contractAddress, overrides || {});
  }
  override attach(address: string): AdapterPyth {
    return super.attach(address) as AdapterPyth;
  }
  override connect(signer: Signer): AdapterPyth__factory {
    return super.connect(signer) as AdapterPyth__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdapterPythInterface {
    return new utils.Interface(_abi) as AdapterPythInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdapterPyth {
    return new Contract(address, _abi, signerOrProvider) as AdapterPyth;
  }
}