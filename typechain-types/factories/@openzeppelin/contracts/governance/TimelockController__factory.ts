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
  TimelockController,
  TimelockControllerInterface,
} from "../../../../@openzeppelin/contracts/governance/TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "CallSalt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
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
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "EXECUTOR_ROLE",
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
    name: "PROPOSER_ROLE",
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
    name: "TIMELOCK_ADMIN_ROLE",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
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
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        name: "id",
        type: "bytes32",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
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
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620022b0380380620022b0833981016040819052620000349162000408565b6200004f60008051602062002230833981519152806200022d565b6200007960008051602062002250833981519152600080516020620022308339815191526200022d565b620000a360008051602062002270833981519152600080516020620022308339815191526200022d565b620000cd60008051602062002290833981519152600080516020620022308339815191526200022d565b620000e8600080516020620022308339815191523062000278565b6001600160a01b03811615620001135762000113600080516020620022308339815191528262000278565b60005b835181101562000199576200015d600080516020620022508339815191528583815181106200014957620001496200048f565b60200260200101516200027860201b60201c565b62000186600080516020620022908339815191528583815181106200014957620001496200048f565b6200019181620004a5565b905062000116565b5060005b8251811015620001e357620001d0600080516020620022708339815191528483815181106200014957620001496200048f565b620001db81620004a5565b90506200019d565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505050620004cd565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000284828262000288565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000284576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002e43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200035657600080fd5b919050565b600082601f8301126200036d57600080fd5b815160206001600160401b03808311156200038c576200038c62000328565b8260051b604051601f19603f83011681018181108482111715620003b457620003b462000328565b604052938452858101830193838101925087851115620003d357600080fd5b83870191505b84821015620003fd57620003ed826200033e565b83529183019190830190620003d9565b979650505050505050565b600080600080608085870312156200041f57600080fd5b845160208601519094506001600160401b03808211156200043f57600080fd5b6200044d888389016200035b565b945060408701519150808211156200046457600080fd5b5062000473878288016200035b565b92505062000484606086016200033e565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b600060018201620004c657634e487b7160e01b600052601160045260246000fd5b5060010190565b611d5380620004dd6000396000f3fe60806040526004361061014b5760003560e01c806301d5062a1461015757806301ffc9a71461017957806307bd0265146101ae5780630d3cf6fc146101de578063134008d31461021257806313bc9f2014610225578063150b7a0214610245578063248a9ca3146102895780632ab0f529146102a95780632f2ff15d146102c957806331d50750146102e957806336568abe14610309578063584b153e1461032957806364d62353146103495780638065657f146103695780638f2a0bb0146103895780638f61f4f5146103a957806391d14854146103cb578063a217fddf146103eb578063b08e51c014610400578063b1c5f42714610422578063bc197c8114610442578063c4d252f51461046e578063d45c44351461048e578063d547741f146104ae578063e38335e5146104ce578063f23a6e61146104e1578063f27a0c921461050d57600080fd5b3661015257005b600080fd5b34801561016357600080fd5b506101776101723660046112b6565b610522565b005b34801561018557600080fd5b5061019961019436600461132a565b6105c2565b60405190151581526020015b60405180910390f35b3480156101ba57600080fd5b506101d0600080516020611c9e83398151915281565b6040519081526020016101a5565b3480156101ea57600080fd5b506101d07f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b610177610220366004611354565b6105ed565b34801561023157600080fd5b506101996102403660046113bf565b61067e565b34801561025157600080fd5b5061027061026036600461148d565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016101a5565b34801561029557600080fd5b506101d06102a43660046113bf565b6106a3565b3480156102b557600080fd5b506101996102c43660046113bf565b6106b8565b3480156102d557600080fd5b506101776102e43660046114f4565b6106cc565b3480156102f557600080fd5b506101996103043660046113bf565b6106ed565b34801561031557600080fd5b506101776103243660046114f4565b610700565b34801561033557600080fd5b506101996103443660046113bf565b610783565b34801561035557600080fd5b506101776103643660046113bf565b610790565b34801561037557600080fd5b506101d0610384366004611354565b610834565b34801561039557600080fd5b506101776103a4366004611564565b610873565b3480156103b557600080fd5b506101d0600080516020611c7e83398151915281565b3480156103d757600080fd5b506101996103e63660046114f4565b6109d0565b3480156103f757600080fd5b506101d0600081565b34801561040c57600080fd5b506101d0600080516020611cde83398151915281565b34801561042e57600080fd5b506101d061043d366004611615565b6109f9565b34801561044e57600080fd5b5061027061045d36600461173c565b63bc197c8160e01b95945050505050565b34801561047a57600080fd5b506101776104893660046113bf565b610a3e565b34801561049a57600080fd5b506101d06104a93660046113bf565b610b01565b3480156104ba57600080fd5b506101776104c93660046114f4565b610b13565b6101776104dc366004611615565b610b2f565b3480156104ed57600080fd5b506102706104fc3660046117e5565b63f23a6e6160e01b95945050505050565b34801561051957600080fd5b506002546101d0565b600080516020611c7e83398151915261053a81610c95565b600061054a898989898989610834565b90506105568184610ca2565b600081600080516020611cbe8339815191528b8b8b8b8b8a60405161058096959493929190611872565b60405180910390a383156105b75780600080516020611cfe833981519152856040516105ae91815260200190565b60405180910390a25b505050505050505050565b60006001600160e01b03198216630271189760e51b14806105e757506105e782610d91565b92915050565b600080516020611c9e8339815191526106078160006109d0565b610615576106158133610dc6565b6000610625888888888888610834565b90506106318185610e1f565b61063d88888888610eb0565b600081600080516020611c5e8339815191528a8a8a8a60405161066394939291906118af565b60405180910390a361067481610f83565b5050505050505050565b60008061068a83610b01565b905060018111801561069c5750428111155b9392505050565b60009081526020819052604090206001015490565b600060016106c583610b01565b1492915050565b6106d5826106a3565b6106de81610c95565b6106e88383610fbc565b505050565b6000806106f983610b01565b1192915050565b6001600160a01b03811633146107755760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61077f8282611040565b5050565b600060016106f983610b01565b3330146107f35760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b606482015260840161076c565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161085196959493929190611872565b6040516020818303038152906040528051906020012090509695505050505050565b600080516020611c7e83398151915261088b81610c95565b8887146108aa5760405162461bcd60e51b815260040161076c906118e1565b8885146108c95760405162461bcd60e51b815260040161076c906118e1565b60006108db8b8b8b8b8b8b8b8b6109f9565b90506108e78184610ca2565b60005b8a811015610993578082600080516020611cbe8339815191528e8e8581811061091557610915611924565b905060200201602081019061092a919061193a565b8d8d8681811061093c5761093c611924565b905060200201358c8c8781811061095557610955611924565b90506020028101906109679190611955565b8c8b60405161097b96959493929190611872565b60405180910390a361098c816119b1565b90506108ea565b5083156109c35780600080516020611cfe833981519152856040516109ba91815260200190565b60405180910390a25b5050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610a1a989796959493929190611a5b565b60405160208183030381529060405280519060200120905098975050505050505050565b600080516020611cde833981519152610a5681610c95565b610a5f82610783565b610ac55760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b606482015260840161076c565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b60009081526001602052604090205490565b610b1c826106a3565b610b2581610c95565b6106e88383611040565b600080516020611c9e833981519152610b498160006109d0565b610b5757610b578133610dc6565b878614610b765760405162461bcd60e51b815260040161076c906118e1565b878414610b955760405162461bcd60e51b815260040161076c906118e1565b6000610ba78a8a8a8a8a8a8a8a6109f9565b9050610bb38185610e1f565b60005b89811015610c7f5760008b8b83818110610bd257610bd2611924565b9050602002016020810190610be7919061193a565b905060008a8a84818110610bfd57610bfd611924565b9050602002013590503660008a8a86818110610c1b57610c1b611924565b9050602002810190610c2d9190611955565b91509150610c3d84848484610eb0565b8486600080516020611c5e83398151915286868686604051610c6294939291906118af565b60405180910390a35050505080610c78906119b1565b9050610bb6565b50610c8981610f83565b50505050505050505050565b610c9f8133610dc6565b50565b610cab826106ed565b15610d105760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b606482015260840161076c565b600254811015610d715760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b606482015260840161076c565b610d7b8142611afc565b6000928352600160205260409092209190915550565b60006001600160e01b03198216637965db0b60e01b14806105e757506301ffc9a760e01b6001600160e01b03198316146105e7565b610dd082826109d0565b61077f57610ddd816110a5565b610de88360206110b7565b604051602001610df9929190611b33565b60408051601f198184030181529082905262461bcd60e51b825261076c91600401611ba2565b610e288261067e565b610e445760405162461bcd60e51b815260040161076c90611bd5565b801580610e555750610e55816106b8565b61077f5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b606482015260840161076c565b6000846001600160a01b0316848484604051610ecd929190611c1f565b60006040518083038185875af1925050503d8060008114610f0a576040519150601f19603f3d011682016040523d82523d6000602084013e610f0f565b606091505b5050905080610f7c5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b606482015260840161076c565b5050505050565b610f8c8161067e565b610fa85760405162461bcd60e51b815260040161076c90611bd5565b600090815260016020819052604090912055565b610fc682826109d0565b61077f576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610ffc3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61104a82826109d0565b1561077f576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606105e76001600160a01b03831660145b606060006110c6836002611c2f565b6110d1906002611afc565b6001600160401b038111156110e8576110e86113d8565b6040519080825280601f01601f191660200182016040528015611112576020820181803683370190505b509050600360fc1b8160008151811061112d5761112d611924565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061115c5761115c611924565b60200101906001600160f81b031916908160001a9053506000611180846002611c2f565b61118b906001611afc565b90505b6001811115611203576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106111bf576111bf611924565b1a60f81b8282815181106111d5576111d5611924565b60200101906001600160f81b031916908160001a90535060049490941c936111fc81611c46565b905061118e565b50831561069c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161076c565b80356001600160a01b038116811461126957600080fd5b919050565b60008083601f84011261128057600080fd5b5081356001600160401b0381111561129757600080fd5b6020830191508360208285010111156112af57600080fd5b9250929050565b600080600080600080600060c0888a0312156112d157600080fd5b6112da88611252565b96506020880135955060408801356001600160401b038111156112fc57600080fd5b6113088a828b0161126e565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561133c57600080fd5b81356001600160e01b03198116811461069c57600080fd5b60008060008060008060a0878903121561136d57600080fd5b61137687611252565b95506020870135945060408701356001600160401b0381111561139857600080fd5b6113a489828a0161126e565b979a9699509760608101359660809091013595509350505050565b6000602082840312156113d157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611416576114166113d8565b604052919050565b600082601f83011261142f57600080fd5b81356001600160401b03811115611448576114486113d8565b61145b601f8201601f19166020016113ee565b81815284602083860101111561147057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156114a357600080fd5b6114ac85611252565b93506114ba60208601611252565b92506040850135915060608501356001600160401b038111156114dc57600080fd5b6114e88782880161141e565b91505092959194509250565b6000806040838503121561150757600080fd5b8235915061151760208401611252565b90509250929050565b60008083601f84011261153257600080fd5b5081356001600160401b0381111561154957600080fd5b6020830191508360208260051b85010111156112af57600080fd5b600080600080600080600080600060c08a8c03121561158257600080fd5b89356001600160401b038082111561159957600080fd5b6115a58d838e01611520565b909b50995060208c01359150808211156115be57600080fd5b6115ca8d838e01611520565b909950975060408c01359150808211156115e357600080fd5b506115f08c828d01611520565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b03121561163157600080fd5b88356001600160401b038082111561164857600080fd5b6116548c838d01611520565b909a50985060208b013591508082111561166d57600080fd5b6116798c838d01611520565b909850965060408b013591508082111561169257600080fd5b5061169f8b828c01611520565b999c989b509699959896976060870135966080013595509350505050565b600082601f8301126116ce57600080fd5b813560206001600160401b038211156116e9576116e96113d8565b8160051b6116f88282016113ee565b928352848101820192828101908785111561171257600080fd5b83870192505b8483101561173157823582529183019190830190611718565b979650505050505050565b600080600080600060a0868803121561175457600080fd5b61175d86611252565b945061176b60208701611252565b935060408601356001600160401b038082111561178757600080fd5b61179389838a016116bd565b945060608801359150808211156117a957600080fd5b6117b589838a016116bd565b935060808801359150808211156117cb57600080fd5b506117d88882890161141e565b9150509295509295909350565b600080600080600060a086880312156117fd57600080fd5b61180686611252565b945061181460208701611252565b9350604086013592506060860135915060808601356001600160401b0381111561183d57600080fd5b6117d88882890161141e565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a06040820152600061189a60a083018688611849565b60608301949094525060800152949350505050565b60018060a01b03851681528360208201526060604082015260006118d7606083018486611849565b9695505050505050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561194c57600080fd5b61069c82611252565b6000808335601e1984360301811261196c57600080fd5b8301803591506001600160401b0382111561198657600080fd5b6020019150368190038213156112af57600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016119c3576119c361199b565b5060010190565b81835260006020808501808196508560051b810191508460005b87811015611a4e5782840389528135601e19883603018112611a0557600080fd5b870185810190356001600160401b03811115611a2057600080fd5b803603821315611a2f57600080fd5b611a3a868284611849565b9a87019a95505050908401906001016119e4565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b811015611a9c576001600160a01b03611a8784611252565b16825260209283019290910190600101611a6e565b5083810360208501528881526001600160fb1b03891115611abc57600080fd5b8860051b9150818a60208301370182810360209081016040850152611ae490820187896119ca565b60608401959095525050608001529695505050505050565b808201808211156105e7576105e761199b565b60005b83811015611b2a578181015183820152602001611b12565b50506000910152565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611b65816017850160208801611b0f565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611b96816028840160208801611b0f565b01602801949350505050565b6020815260008251806020840152611bc1816040850160208701611b0f565b601f01601f19169190910160400192915050565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b8183823760009101908152919050565b80820281158282048414176105e7576105e761199b565b600081611c5557611c5561199b565b50600019019056fec2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e634cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dcafd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78320fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387a26469706673582212204ecf0639963120091815c7de3dd8079a1a4a1b6e4e168bcaa2c68f7438785cb064736f6c634300081200335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    ) as Promise<TimelockController>;
  }
  override getDeployTransaction(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    );
  }
  override attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  override connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}
