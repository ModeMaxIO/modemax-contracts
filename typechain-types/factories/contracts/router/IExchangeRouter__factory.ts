/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IExchangeRouter,
  IExchangeRouterInterface,
} from "../../../contracts/router/IExchangeRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "cancelDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "cancelWithdrawal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
            internalType: "address",
            name: "initialLongToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "initialShortToken",
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
          {
            internalType: "uint256",
            name: "minMarketTokens",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
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
        internalType: "struct DepositUtils.CreateDepositParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createDeposit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
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
                internalType: "address",
                name: "initialCollateralToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "swapPath",
                type: "address[]",
              },
            ],
            internalType: "struct IBaseOrderUtils.CreateOrderParamsAddresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialCollateralDeltaAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptablePrice",
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
              {
                internalType: "uint256",
                name: "minOutputAmount",
                type: "uint256",
              },
            ],
            internalType: "struct IBaseOrderUtils.CreateOrderParamsNumbers",
            name: "numbers",
            type: "tuple",
          },
          {
            internalType: "enum Order.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "enum Order.DecreasePositionSwapType",
            name: "decreasePositionSwapType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "referralCode",
            type: "bytes32",
          },
        ],
        internalType: "struct IBaseOrderUtils.CreateOrderParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createOrder",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
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
        internalType: "struct WithdrawalUtils.CreateWithdrawalParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createWithdrawal",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "sizeDeltaUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "acceptablePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "triggerPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOutputAmount",
        type: "uint256",
      },
    ],
    name: "updateOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IExchangeRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IExchangeRouterInterface {
    return new utils.Interface(_abi) as IExchangeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExchangeRouter {
    return new Contract(address, _abi, signerOrProvider) as IExchangeRouter;
  }
}