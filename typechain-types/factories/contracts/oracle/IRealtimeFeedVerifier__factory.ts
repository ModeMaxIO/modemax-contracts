/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRealtimeFeedVerifier,
  IRealtimeFeedVerifierInterface,
} from "../../../contracts/oracle/IRealtimeFeedVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRealtimeFeedVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IRealtimeFeedVerifierInterface {
    return new utils.Interface(_abi) as IRealtimeFeedVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRealtimeFeedVerifier {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRealtimeFeedVerifier;
  }
}