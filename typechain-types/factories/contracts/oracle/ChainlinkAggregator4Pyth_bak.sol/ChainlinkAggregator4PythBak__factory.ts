/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ChainlinkAggregator4PythBak,
  ChainlinkAggregator4PythBakInterface,
} from "../../../../contracts/oracle/ChainlinkAggregator4Pyth_bak.sol/ChainlinkAggregator4PythBak";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "NewRound",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "description",
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
        internalType: "uint256",
        name: "_roundId",
        type: "uint256",
      },
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roundId",
        type: "uint256",
      },
    ],
    name: "getTimestamp",
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
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRound",
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
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
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
    name: "owner",
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
        name: "adapter",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "setAdapterInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setEnableAdapter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int192[]",
        name: "answers",
        type: "int192[]",
      },
    ],
    name: "setLatestAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620012d6380380620012d683398101604081905262000034916200008a565b600080546001600160a01b0319163317905560ff821660805260056200005b828262000209565b50506001805463ffffffff60a01b1916905550620002d5565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200009e57600080fd5b825160ff81168114620000b057600080fd5b602084810151919350906001600160401b0380821115620000d057600080fd5b818601915086601f830112620000e557600080fd5b815181811115620000fa57620000fa62000074565b604051601f8201601f19908116603f0116810190838211818310171562000125576200012562000074565b8160405282815289868487010111156200013e57600080fd5b600093505b8284101562000162578484018601518185018701529285019262000143565b60008684830101528096505050505050509250929050565b600181811c908216806200018f57607f821691505b602082108103620001b057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200020457600081815260208120601f850160051c81016020861015620001df5750805b601f850160051c820191505b818110156200020057828155600101620001eb565b5050505b505050565b81516001600160401b0381111562000225576200022562000074565b6200023d816200023684546200017a565b84620001b6565b602080601f8311600181146200027557600084156200025c5750858301515b600019600386901b1c1916600185901b17855562000200565b600085815260208120601f198616915b82811015620002a65788860151825594840194600190910190840162000285565b5085821015620002c55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051610fc3620003136000396000818160da0152818161028e01528181610365015281816105b70152818161065f0152610b5d0152610fc36000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c8063313ce567146100d557806350d25bcd1461011357806354fd4d5014610129578063668a0f02146101315780637284e4161461013957806374d9adda1461014e57806379ba5097146101635780638205bf6a1461016b5780638da5cb5b146101735780639a6fc8f51461019e578063b5ab58dc146101e5578063b633620c146101f8578063dd9b23141461020b578063e123bb771461021e578063f2fde38b14610231578063feaf968c14610244575b600080fd5b6100fc7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020015b60405180910390f35b61011b61024c565b60405190815260200161010a565b61011b600481565b61011b610323565b6101416103e8565b60405161010a9190610c39565b61016161015c366004610c87565b61047a565b005b6101616104cb565b61011b610575565b600054610186906001600160a01b031681565b6040516001600160a01b03909116815260200161010a565b6101b16101ac366004610ca9565b610612565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a00161010a565b61011b6101f3366004610cd2565b610787565b61011b610206366004610cd2565b6107b9565b610161610219366004610d18565b6107f8565b61016161022c366004610df3565b610a45565b61016161023f366004610e1d565b610a95565b6101b1610b10565b600154600090600160c01b900460ff16156102fd576002546003546040516303ab61a360e01b81526000926001600160a01b0316916303ab61a3916102b691907f000000000000000000000000000000000000000000000000000000000000000090600401610e38565b6040805180830381865afa1580156102d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f69190610e49565b5092915050565b50600154600160a01b900463ffffffff1660009081526004602052604090205460170b90565b600154600090600160c01b900460ff16156103d4576002546003546040516303ab61a360e01b81526000926001600160a01b0316916303ab61a39161038d91907f000000000000000000000000000000000000000000000000000000000000000090600401610e38565b6040805180830381865afa1580156103a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cd9190610e49565b9392505050565b50600154600160a01b900463ffffffff1690565b6060600580546103f790610e6d565b80601f016020809104026020016040519081016040528092919081815260200182805461042390610e6d565b80156104705780601f1061044557610100808354040283529160200191610470565b820191906000526020600020905b81548152906001019060200180831161045357829003601f168201915b5050505050905090565b6000546001600160a01b031633146104ad5760405162461bcd60e51b81526004016104a490610ea7565b60405180910390fd5b60018054911515600160c01b0260ff60c01b19909216919091179055565b6001546001600160a01b0316331461051e5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b60448201526064016104a4565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b600154600090600160c01b900460ff16156105df576002546003546040516303ab61a360e01b81526000926001600160a01b0316916303ab61a39161038d91907f000000000000000000000000000000000000000000000000000000000000000090600401610e38565b50600154600160a01b900463ffffffff16600090815260046020526040902054600160c01b90046001600160401b031690565b6000806000806000600160189054906101000a900460ff16156106dc576002546003546040516303ab61a360e01b815260009283926001600160a01b03909116916303ab61a391610687917f000000000000000000000000000000000000000000000000000000000000000090600401610e38565b6040805180830381865afa1580156106a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c79190610e49565b9750955086945084935083925061077e915050565b60408051808201909152600f81526e139bc819185d18481c1c995cd95b9d608a1b602082015263ffffffff6001600160501b03881611156107305760405162461bcd60e51b81526004016104a49190610c39565b5050505063ffffffff8316600090815260046020908152604091829020825180840190935254601781900b808452600160c01b9091046001600160401b031692909101829052849350915080835b91939590929450565b600063ffffffff82111561079d57506000919050565b5063ffffffff1660009081526004602052604090205460170b90565b600063ffffffff8211156107cf57506000919050565b5063ffffffff16600090815260046020526040902054600160c01b90046001600160401b031690565b6000546001600160a01b031633146108225760405162461bcd60e51b81526004016104a490610ea7565b60018054600160a01b900463ffffffff1690601461083f83610eed565b91906101000a81548163ffffffff021916908363ffffffff1602179055505060005b6001825161086f9190610f10565b81101561091557600082610884836001610f29565b8151811061089457610894610f3c565b602002602001015160170b8383815181106108b1576108b1610f3c565b602002602001015160170b13159050806109025760405162461bcd60e51b8152602060048201526012602482015271185b9cddd95c9cc81b9bdd081cdbdc9d195960721b60448201526064016104a4565b508061090d81610f52565b915050610861565b50600081600283516109279190610f6b565b8151811061093757610937610f3c565b602090810291909101810151604080518082018252601783900b81526001600160401b03428181168387019081526001805463ffffffff600160a01b91829004811660009081526004909a52878a2096519351909516600160c01b026001600160c01b03909316929092179094559254935194965091909204909116917f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac60271916109e39190815260200190565b60405180910390a3600160149054906101000a900463ffffffff1663ffffffff168160170b7f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f42604051610a3991815260200190565b60405180910390a35050565b6000546001600160a01b03163314610a6f5760405162461bcd60e51b81526004016104a490610ea7565b600280546001600160a01b0319166001600160a01b039390931692909217909155600355565b6000546001600160a01b03163314610abf5760405162461bcd60e51b81526004016104a490610ea7565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000806000806000600160189054906101000a900460ff1615610bda576002546003546040516303ab61a360e01b815260009283926001600160a01b03909116916303ab61a391610b85917f000000000000000000000000000000000000000000000000000000000000000090600401610e38565b6040805180830381865afa158015610ba1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc59190610e49565b97509550869450849350839250610c32915050565b5050600154600160a01b900463ffffffff16600081815260046020908152604091829020825180840190935254601781900b808452600160c01b9091046001600160401b031692909101829052919450909250905080835b9091929394565b600060208083528351808285015260005b81811015610c6657858101830151858201604001528201610c4a565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215610c9957600080fd5b813580151581146103cd57600080fd5b600060208284031215610cbb57600080fd5b81356001600160501b03811681146103cd57600080fd5b600060208284031215610ce457600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b8035601781900b8114610d1357600080fd5b919050565b60006020808385031215610d2b57600080fd5b82356001600160401b0380821115610d4257600080fd5b818501915085601f830112610d5657600080fd5b813581811115610d6857610d68610ceb565b8060051b604051601f19603f83011681018181108582111715610d8d57610d8d610ceb565b604052918252848201925083810185019188831115610dab57600080fd5b938501935b82851015610dd057610dc185610d01565b84529385019392850192610db0565b98975050505050505050565b80356001600160a01b0381168114610d1357600080fd5b60008060408385031215610e0657600080fd5b610e0f83610ddc565b946020939093013593505050565b600060208284031215610e2f57600080fd5b6103cd82610ddc565b91825260ff16602082015260400190565b60008060408385031215610e5c57600080fd5b505080516020909101519092909150565b600181811c90821680610e8157607f821691505b602082108103610ea157634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526016908201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818103610f0657610f06610ed7565b6001019392505050565b81810381811115610f2357610f23610ed7565b92915050565b80820180821115610f2357610f23610ed7565b634e487b7160e01b600052603260045260246000fd5b600060018201610f6457610f64610ed7565b5060010190565b600082610f8857634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220319ed0fea254ca8b28c8d5bf3c892261b0448eb870fe7e9f1936e9ff446ab64c64736f6c63430008120033";

type ChainlinkAggregator4PythBakConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainlinkAggregator4PythBakConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainlinkAggregator4PythBak__factory extends ContractFactory {
  constructor(...args: ChainlinkAggregator4PythBakConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _decimals: PromiseOrValue<BigNumberish>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChainlinkAggregator4PythBak> {
    return super.deploy(
      _decimals,
      _description,
      overrides || {}
    ) as Promise<ChainlinkAggregator4PythBak>;
  }
  override getDeployTransaction(
    _decimals: PromiseOrValue<BigNumberish>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_decimals, _description, overrides || {});
  }
  override attach(address: string): ChainlinkAggregator4PythBak {
    return super.attach(address) as ChainlinkAggregator4PythBak;
  }
  override connect(signer: Signer): ChainlinkAggregator4PythBak__factory {
    return super.connect(signer) as ChainlinkAggregator4PythBak__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkAggregator4PythBakInterface {
    return new utils.Interface(_abi) as ChainlinkAggregator4PythBakInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkAggregator4PythBak {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkAggregator4PythBak;
  }
}
