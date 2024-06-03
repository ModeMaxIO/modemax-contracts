/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WithdrawalStoreUtils,
  WithdrawalStoreUtilsInterface,
} from "../../../contracts/withdrawal/WithdrawalStoreUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "WithdrawalNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "ACCOUNT",
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
    name: "CALLBACK_CONTRACT",
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
    name: "CALLBACK_GAS_LIMIT",
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
    name: "EXECUTION_FEE",
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
    name: "LONG_TOKEN_SWAP_PATH",
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
    name: "MARKET",
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
    name: "MARKET_TOKEN_AMOUNT",
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
    name: "MIN_LONG_TOKEN_AMOUNT",
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
    name: "MIN_SHORT_TOKEN_AMOUNT",
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
    name: "RECEIVER",
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
    name: "SHORT_TOKEN_SWAP_PATH",
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
    name: "SHOULD_UNWRAP_NATIVE_TOKEN",
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
    name: "UI_FEE_RECEIVER",
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
    name: "UPDATED_AT_BLOCK",
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
        internalType: "contract DataStore",
        name: "dataStore",
        type: "DataStore",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Withdrawal.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "marketTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Withdrawal.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Withdrawal.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Withdrawal.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61300061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100e55760003560e01c806304a36e20146100ea578063284d63ed1461010557806333d608f11461010d5780634675e8eb14610115578063566a6e661461011d5780636a751bc41461012557806374b6fe1314610147578063856d8f89146101675780638f7f20481461016f578063ad7430cc14610177578063b451e5341461017f578063db854fb714610187578063e90524f21461018f578063f145e54a14610197578063f46f16c21461019f578063f5b0e5b1146101a7578063fdfc26f3146101af575b600080fd5b6100f26101cf565b6040519081526020015b60405180910390f35b6100f26101f7565b6100f2610206565b6100f2610215565b6100f2610224565b81801561013157600080fd5b506101456101403660046128d2565b610233565b005b81801561015357600080fd5b50610145610162366004612a26565b610e1b565b6100f261192b565b6100f261193a565b6100f2611949565b6100f2611958565b6100f2611967565b6100f2611976565b6100f2611985565b6100f2611994565b6100f26119a3565b6101c26101bd366004612a68565b6119b2565b6040516100fc9190612ae5565b6040516020016101de90612be8565b6040516020818303038152906040528051906020012081565b6040516020016101de90612c1c565b6040516020016101de90612c49565b6040516020016101de90612c75565b6040516020016101de90612c9c565b826001600160a01b031663c80f4c6260405160200161025190612cc5565b60405160208183030381529060405280519060200120846040518363ffffffff1660e01b8152600401610285929190612cee565b600060405180830381600087803b15801561029f57600080fd5b505af11580156102b3573d6000803e3d6000fd5b50505050826001600160a01b031663c80f4c626102d76102d284515190565b612594565b846040518363ffffffff1660e01b81526004016102f5929190612cee565b600060405180830381600087803b15801561030f57600080fd5b505af1158015610323573d6000803e3d6000fd5b50505050826001600160a01b031663ca446dd98360405160200161034690612cfc565b6040516020818303038152906040528051906020012060405160200161036d929190612cee565b6040516020818303038152906040528051906020012061038c84515190565b6040518363ffffffff1660e01b81526004016103a9929190612d1d565b6020604051808303816000875af11580156103c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ec9190612d34565b50826001600160a01b031663ca446dd98360405160200161040c90612d51565b60405160208183030381529060405280519060200120604051602001610433929190612cee565b6040516020818303038152906040528051906020012061045584516020015190565b6040518363ffffffff1660e01b8152600401610472929190612d1d565b6020604051808303816000875af1158015610491573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b59190612d34565b50826001600160a01b031663ca446dd9836040516020016104d590612d73565b604051602081830303815290604052805190602001206040516020016104fc929190612cee565b6040516020818303038152906040528051906020012061051e84516040015190565b6040518363ffffffff1660e01b815260040161053b929190612d1d565b6020604051808303816000875af115801561055a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057e9190612d34565b50826001600160a01b031663ca446dd98360405160200161059e90612c9c565b604051602081830303815290604052805190602001206040516020016105c5929190612cee565b604051602081830303815290604052805190602001206105e784516060015190565b6040518363ffffffff1660e01b8152600401610604929190612d1d565b6020604051808303816000875af1158015610623573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106479190612d34565b50826001600160a01b031663ca446dd98360405160200161066790612d9e565b6040516020818303038152906040528051906020012060405160200161068e929190612cee565b604051602081830303815290604052805190602001206106b084516080015190565b6040518363ffffffff1660e01b81526004016106cd929190612d1d565b6020604051808303816000875af11580156106ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107109190612d34565b50826001600160a01b031663ec672cf68360405160200161073090612dbe565b60405160208183030381529060405280519060200120604051602001610757929190612cee565b60405160208183030381529060405280519060200120610779845160a0015190565b6040518363ffffffff1660e01b8152600401610796929190612dec565b600060405180830381600087803b1580156107b057600080fd5b505af11580156107c4573d6000803e3d6000fd5b50505050826001600160a01b031663ec672cf6836040516020016107e790612e43565b6040516020818303038152906040528051906020012060405160200161080e929190612cee565b60405160208183030381529060405280519060200120610830845160c0015190565b6040518363ffffffff1660e01b815260040161084d929190612dec565b600060405180830381600087803b15801561086757600080fd5b505af115801561087b573d6000803e3d6000fd5b50505050826001600160a01b031663e2a4853a8360405160200161089e90612c1c565b604051602081830303815290604052805190602001206040516020016108c5929190612cee565b604051602081830303815290604052805190602001206108e784602001515190565b6040518363ffffffff1660e01b8152600401610904929190612cee565b6020604051808303816000875af1158015610923573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109479190612e72565b50826001600160a01b031663e2a4853a8360405160200161096790612e8b565b6040516020818303038152906040528051906020012060405160200161098e929190612cee565b604051602081830303815290604052805190602001206109b384602090810151015190565b6040518363ffffffff1660e01b81526004016109d0929190612cee565b6020604051808303816000875af11580156109ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a139190612e72565b50826001600160a01b031663e2a4853a83604051602001610a3390612eba565b60405160208183030381529060405280519060200120604051602001610a5a929190612cee565b60405160208183030381529060405280519060200120610a7f84602001516040015190565b6040518363ffffffff1660e01b8152600401610a9c929190612cee565b6020604051808303816000875af1158015610abb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adf9190612e72565b50826001600160a01b031663e2a4853a83604051602001610aff90612eea565b60405160208183030381529060405280519060200120604051602001610b26929190612cee565b60405160208183030381529060405280519060200120610b4b84602001516060015190565b6040518363ffffffff1660e01b8152600401610b68929190612cee565b6020604051808303816000875af1158015610b87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bab9190612e72565b50826001600160a01b031663e2a4853a83604051602001610bcb90612c75565b60405160208183030381529060405280519060200120604051602001610bf2929190612cee565b60405160208183030381529060405280519060200120610c1784602001516080015190565b6040518363ffffffff1660e01b8152600401610c34929190612cee565b6020604051808303816000875af1158015610c53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c779190612e72565b50826001600160a01b031663e2a4853a83604051602001610c9790612c49565b60405160208183030381529060405280519060200120604051602001610cbe929190612cee565b60405160208183030381529060405280519060200120610ce3846020015160a0015190565b6040518363ffffffff1660e01b8152600401610d00929190612cee565b6020604051808303816000875af1158015610d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d439190612e72565b50826001600160a01b031663abfdcced83604051602001610d6390612be8565b60405160208183030381529060405280519060200120604051602001610d8a929190612cee565b60405160208183030381529060405280519060200120610dac84604001515190565b6040516001600160e01b031960e085901b1681526004810192909252151560248201526044016020604051808303816000875af1158015610df1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e159190612f14565b50505050565b826001600160a01b03166391d4403c604051602001610e3990612cc5565b60405160208183030381529060405280519060200120846040518363ffffffff1660e01b8152600401610e6d929190612cee565b602060405180830381865afa158015610e8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eae9190612f14565b610ed257604051630181cdef60e61b81526004810183905260240160405180910390fd5b826001600160a01b0316639921c3cc604051602001610ef090612cc5565b60405160208183030381529060405280519060200120846040518363ffffffff1660e01b8152600401610f24929190612cee565b600060405180830381600087803b158015610f3e57600080fd5b505af1158015610f52573d6000803e3d6000fd5b50505050826001600160a01b0316639921c3cc610f6e83612594565b846040518363ffffffff1660e01b8152600401610f8c929190612cee565b600060405180830381600087803b158015610fa657600080fd5b505af1158015610fba573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb683604051602001610fdd90612cfc565b60405160208183030381529060405280519060200120604051602001611004929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161103891815260200190565b600060405180830381600087803b15801561105257600080fd5b505af1158015611066573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb68360405160200161108990612d51565b604051602081830303815290604052805190602001206040516020016110b0929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016110e491815260200190565b600060405180830381600087803b1580156110fe57600080fd5b505af1158015611112573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb68360405160200161113590612d73565b6040516020818303038152906040528051906020012060405160200161115c929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161119091815260200190565b600060405180830381600087803b1580156111aa57600080fd5b505af11580156111be573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb6836040516020016111e190612c9c565b60405160208183030381529060405280519060200120604051602001611208929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161123c91815260200190565b600060405180830381600087803b15801561125657600080fd5b505af115801561126a573d6000803e3d6000fd5b50505050826001600160a01b0316639faf6fb68360405160200161128d90612d9e565b604051602081830303815290604052805190602001206040516020016112b4929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016112e891815260200190565b600060405180830381600087803b15801561130257600080fd5b505af1158015611316573d6000803e3d6000fd5b50505050826001600160a01b031663c1dc91828360405160200161133990612dbe565b60405160208183030381529060405280519060200120604051602001611360929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161139491815260200190565b600060405180830381600087803b1580156113ae57600080fd5b505af11580156113c2573d6000803e3d6000fd5b50505050826001600160a01b031663c1dc9182836040516020016113e590612e43565b6040516020818303038152906040528051906020012060405160200161140c929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161144091815260200190565b600060405180830381600087803b15801561145a57600080fd5b505af115801561146e573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd968360405160200161149190612c1c565b604051602081830303815290604052805190602001206040516020016114b8929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016114ec91815260200190565b600060405180830381600087803b15801561150657600080fd5b505af115801561151a573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd968360405160200161153d90612e8b565b60405160208183030381529060405280519060200120604051602001611564929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161159891815260200190565b600060405180830381600087803b1580156115b257600080fd5b505af11580156115c6573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd96836040516020016115e990612eba565b60405160208183030381529060405280519060200120604051602001611610929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161164491815260200190565b600060405180830381600087803b15801561165e57600080fd5b505af1158015611672573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd968360405160200161169590612eea565b604051602081830303815290604052805190602001206040516020016116bc929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016116f091815260200190565b600060405180830381600087803b15801561170a57600080fd5b505af115801561171e573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd968360405160200161174190612c75565b60405160208183030381529060405280519060200120604051602001611768929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161179c91815260200190565b600060405180830381600087803b1580156117b657600080fd5b505af11580156117ca573d6000803e3d6000fd5b50505050826001600160a01b03166342c3bd96836040516020016117ed90612c49565b60405160208183030381529060405280519060200120604051602001611814929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161184891815260200190565b600060405180830381600087803b15801561186257600080fd5b505af1158015611876573d6000803e3d6000fd5b50505050826001600160a01b0316639fe7ac128360405160200161189990612be8565b604051602081830303815290604052805190602001206040516020016118c0929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016118f491815260200190565b600060405180830381600087803b15801561190e57600080fd5b505af1158015611922573d6000803e3d6000fd5b50505050505050565b6040516020016101de90612eba565b6040516020016101de90612d73565b6040516020016101de90612d51565b6040516020016101de90612dbe565b6040516020016101de90612e43565b6040516020016101de90612cfc565b6040516020016101de90612eea565b6040516020016101de90612d9e565b6040516020016101de90612e8b565b6119ba612616565b6119c2612616565b836001600160a01b03166391d4403c6040516020016119e090612cc5565b60405160208183030381529060405280519060200120856040518363ffffffff1660e01b8152600401611a14929190612cee565b602060405180830381865afa158015611a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a559190612f14565b611a6057905061258e565b611b2f846001600160a01b03166321f8a72185604051602001611a8290612cfc565b60405160208183030381529060405280519060200120604051602001611aa9929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611add91815260200190565b602060405180830381865afa158015611afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1e9190612d34565b82516001600160a01b039091169052565b611c02846001600160a01b03166321f8a72185604051602001611b5190612d51565b60405160208183030381529060405280519060200120604051602001611b78929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611bac91815260200190565b602060405180830381865afa158015611bc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bed9190612d34565b82516001600160a01b03909116602090910152565b611cd5846001600160a01b03166321f8a72185604051602001611c2490612d73565b60405160208183030381529060405280519060200120604051602001611c4b929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611c7f91815260200190565b602060405180830381865afa158015611c9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cc09190612d34565b82516001600160a01b03909116604090910152565b611da8846001600160a01b03166321f8a72185604051602001611cf790612c9c565b60405160208183030381529060405280519060200120604051602001611d1e929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611d5291815260200190565b602060405180830381865afa158015611d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d939190612d34565b82516001600160a01b03909116606090910152565b611e7b846001600160a01b03166321f8a72185604051602001611dca90612d9e565b60405160208183030381529060405280519060200120604051602001611df1929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611e2591815260200190565b602060405180830381865afa158015611e42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e669190612d34565b82516001600160a01b03909116608090910152565b611f45846001600160a01b0316635948f73385604051602001611e9d90612dbe565b60405160208183030381529060405280519060200120604051602001611ec4929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611ef891815260200190565b600060405180830381865afa158015611f15573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611f3d9190810190612f31565b825160a00152565b61200f846001600160a01b0316635948f73385604051602001611f6790612e43565b60405160208183030381529060405280519060200120604051602001611f8e929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401611fc291815260200190565b600060405180830381865afa158015611fdf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526120079190810190612f31565b825160c00152565b6120d5846001600160a01b031663bd02d0f58560405160200161203190612c1c565b60405160208183030381529060405280519060200120604051602001612058929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161208c91815260200190565b602060405180830381865afa1580156120a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120cd9190612e72565b602083015152565b61219d846001600160a01b031663bd02d0f5856040516020016120f790612e8b565b6040516020818303038152906040528051906020012060405160200161211e929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161215291815260200190565b602060405180830381865afa15801561216f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121939190612e72565b6020808401510152565b612266846001600160a01b031663bd02d0f5856040516020016121bf90612eba565b604051602081830303815290604052805190602001206040516020016121e6929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161221a91815260200190565b602060405180830381865afa158015612237573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061225b9190612e72565b602083015160400152565b61232f846001600160a01b031663bd02d0f58560405160200161228890612eea565b604051602081830303815290604052805190602001206040516020016122af929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016122e391815260200190565b602060405180830381865afa158015612300573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123249190612e72565b602083015160600152565b6123f8846001600160a01b031663bd02d0f58560405160200161235190612c75565b60405160208183030381529060405280519060200120604051602001612378929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016123ac91815260200190565b602060405180830381865afa1580156123c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ed9190612e72565b602083015160800152565b6124c1846001600160a01b031663bd02d0f58560405160200161241a90612c49565b60405160208183030381529060405280519060200120604051602001612441929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161247591815260200190565b602060405180830381865afa158015612492573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124b69190612e72565b602083015160a00152565b61258b846001600160a01b0316637ae1cfca856040516020016124e390612be8565b6040516020818303038152906040528051906020012060405160200161250a929190612cee565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161253e91815260200190565b602060405180830381865afa15801561255b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061257f9190612f14565b60408301519015159052565b90505b92915050565b60006040516020016125d1906020808252601790820152761050d0d3d5539517d5d2551211149055d05317d31254d5604a1b604082015260600190565b60405160208183030381529060405280519060200120826040516020016125f9929190612d1d565b604051602081830303815290604052805190602001209050919050565b604080516101408101909152600060608083018281526080840183905260a0840183905260c0840183905260e08401929092526101008301819052610120830152819081526020016126976040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526040805160208181019092526000815291015290565b6001600160a01b03811681146126c457600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156126ff576126ff6126c7565b60405290565b60405160e081016001600160401b03811182821017156126ff576126ff6126c7565b604051601f8201601f191681016001600160401b038111828210171561274f5761274f6126c7565b604052919050565b8035612762816126af565b919050565b60006001600160401b03821115612780576127806126c7565b5060051b60200190565b600082601f83011261279b57600080fd5b813560206127b06127ab83612767565b612727565b82815260059290921b840181019181810190868411156127cf57600080fd5b8286015b848110156127f35780356127e6816126af565b83529183019183016127d3565b509695505050505050565b600060c0828403121561281057600080fd5b60405160c081016001600160401b0381118282101715612832576128326126c7565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b80151581146126c457600080fd5b60006020828403121561289757600080fd5b604051602081016001600160401b03811182821017156128b9576128b96126c7565b60405290508082356128ca81612877565b905292915050565b6000806000606084860312156128e757600080fd5b83356128f2816126af565b92506020840135915060408401356001600160401b038082111561291557600080fd5b90850190610100828803121561292a57600080fd5b6129326126dd565b82358281111561294157600080fd5b830160e0818a03121561295357600080fd5b61295b612705565b61296482612757565b815261297260208301612757565b602082015261298360408301612757565b604082015261299460608301612757565b60608201526129a560808301612757565b608082015260a0820135848111156129bc57600080fd5b6129c88b82850161278a565b60a08301525060c0820135848111156129e057600080fd5b6129ec8b82850161278a565b60c083015250825250612a0288602085016127fe565b6020820152612a148860e08501612885565b60408201528093505050509250925092565b600080600060608486031215612a3b57600080fd5b8335612a46816126af565b9250602084013591506040840135612a5d816126af565b809150509250925092565b60008060408385031215612a7b57600080fd5b8235612a86816126af565b946020939093013593505050565b6001600160a01b03169052565b600081518084526020808501945080840160005b83811015612ada5781516001600160a01b031687529582019590820190600101612ab5565b509495945050505050565b602081526000825161010080602085015260018060a01b03808351166101208601528060208401511661014086015280604084015116610160860152506060820151612b35610180860182612a94565b506080820151612b496101a0860182612a94565b5060a082015160e06101c0860152612b65610200860182612aa1565b905060c0830151925061011f19858203016101e0860152612b868184612aa1565b9250506020850151612bd06040860182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b50604085015180511515858301525090949350505050565b6020808252601a908201527929a427aaa6222faaa72ba920a82fa720aa24ab22afaa27a5a2a760311b604082015260600190565b60208082526013908201527213505492d15517d513d2d15397d05353d55395606a1b604082015260600190565b60208082526012908201527110d05313109050d2d7d1d054d7d31253525560721b604082015260600190565b6020808252600d908201526c455845435554494f4e5f46454560981b604082015260600190565b6020808252600f908201526e2aa4afa322a2afa922a1a2a4ab22a960891b604082015260600190565b6020808252600f908201526e15d2551211149055d05317d31254d5608a1b604082015260600190565b918252602082015260400190565b6020808252600790820152661050d0d3d5539560ca1b604082015260600190565b9182526001600160a01b0316602082015260400190565b600060208284031215612d4657600080fd5b815161258b816126af565b6020808252600890820152672922a1a2a4ab22a960c11b604082015260600190565b60208082526011908201527010d05313109050d2d7d0d3d395149050d5607a1b604082015260600190565b60208082526006908201526513505492d15560d21b604082015260600190565b6020808252601490820152730989e9c8ebea89e968a9cbea6ae82a0bea082a8960631b604082015260600190565b6000604082018483526020604081850152818551808452606086019150828701935060005b81811015612e365784516001600160a01b031683529383019391830191600101612e11565b5090979650505050505050565b6020808252601590820152740a6909ea4a8bea89e968a9cbea6ae82a0bea082a89605b1b604082015260600190565b600060208284031215612e8457600080fd5b5051919050565b60208082526015908201527413525397d313d391d7d513d2d15397d05353d55395605a1b604082015260600190565b60208082526016908201527513525397d4d213d49517d513d2d15397d05353d5539560521b604082015260600190565b60208082526010908201526f555044415445445f41545f424c4f434b60801b604082015260600190565b600060208284031215612f2657600080fd5b815161258b81612877565b60006020808385031215612f4457600080fd5b82516001600160401b03811115612f5a57600080fd5b8301601f81018513612f6b57600080fd5b8051612f796127ab82612767565b81815260059190911b82018301908381019087831115612f9857600080fd5b928401925b82841015612fbf578351612fb0816126af565b82529284019290840190612f9d565b97965050505050505056fea2646970667358221220f19ab3872c834a72a7207f56cdd8f0f07df249af170552da83cfd78e5600996c64736f6c63430008120033";

type WithdrawalStoreUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawalStoreUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WithdrawalStoreUtils__factory extends ContractFactory {
  constructor(...args: WithdrawalStoreUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WithdrawalStoreUtils> {
    return super.deploy(overrides || {}) as Promise<WithdrawalStoreUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WithdrawalStoreUtils {
    return super.attach(address) as WithdrawalStoreUtils;
  }
  override connect(signer: Signer): WithdrawalStoreUtils__factory {
    return super.connect(signer) as WithdrawalStoreUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawalStoreUtilsInterface {
    return new utils.Interface(_abi) as WithdrawalStoreUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawalStoreUtils {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WithdrawalStoreUtils;
  }
}