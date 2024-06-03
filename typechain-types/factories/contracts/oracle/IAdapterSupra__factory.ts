/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAdapterSupra,
  IAdapterSupraInterface,
} from "../../../contracts/oracle/IAdapterSupra";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_pairIndex",
        type: "uint64",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "latestPrices",
    outputs: [
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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

export class IAdapterSupra__factory {
  static readonly abi = _abi;
  static createInterface(): IAdapterSupraInterface {
    return new utils.Interface(_abi) as IAdapterSupraInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAdapterSupra {
    return new Contract(address, _abi, signerOrProvider) as IAdapterSupra;
  }
}