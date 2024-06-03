/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace PythStructs {
  export type PriceStruct = {
    price: PromiseOrValue<BigNumberish>;
    conf: PromiseOrValue<BigNumberish>;
    expo: PromiseOrValue<BigNumberish>;
    publishTime: PromiseOrValue<BigNumberish>;
  };

  export type PriceStructOutput = [BigNumber, BigNumber, number, BigNumber] & {
    price: BigNumber;
    conf: BigNumber;
    expo: number;
    publishTime: BigNumber;
  };
}

export interface AdapterPythInterface extends utils.Interface {
  functions: {
    "getEmaPriceUnsafe(bytes32)": FunctionFragment;
    "getPrice(bytes32)": FunctionFragment;
    "getPriceNoOlderThan(bytes32,uint256)": FunctionFragment;
    "latestPrice(bytes32,uint8)": FunctionFragment;
    "pythContract()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getEmaPriceUnsafe"
      | "getPrice"
      | "getPriceNoOlderThan"
      | "latestPrice"
      | "pythContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEmaPriceUnsafe",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceNoOlderThan",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestPrice",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pythContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getEmaPriceUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceNoOlderThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pythContract",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AdapterPyth extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AdapterPythInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getEmaPriceUnsafe(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[PythStructs.PriceStructOutput]>;

    getPrice(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[PythStructs.PriceStructOutput]>;

    getPriceNoOlderThan(
      priceId: PromiseOrValue<BytesLike>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[PythStructs.PriceStructOutput]>;

    latestPrice(
      priceFeedId: PromiseOrValue<BytesLike>,
      decimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { price: BigNumber; timestamp: BigNumber }
    >;

    pythContract(overrides?: CallOverrides): Promise<[string]>;
  };

  getEmaPriceUnsafe(
    priceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getPrice(
    priceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getPriceNoOlderThan(
    priceId: PromiseOrValue<BytesLike>,
    age: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  latestPrice(
    priceFeedId: PromiseOrValue<BytesLike>,
    decimals: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { price: BigNumber; timestamp: BigNumber }
  >;

  pythContract(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getEmaPriceUnsafe(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getPrice(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getPriceNoOlderThan(
      priceId: PromiseOrValue<BytesLike>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    latestPrice(
      priceFeedId: PromiseOrValue<BytesLike>,
      decimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { price: BigNumber; timestamp: BigNumber }
    >;

    pythContract(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getEmaPriceUnsafe(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceNoOlderThan(
      priceId: PromiseOrValue<BytesLike>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestPrice(
      priceFeedId: PromiseOrValue<BytesLike>,
      decimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pythContract(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getEmaPriceUnsafe(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      priceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceNoOlderThan(
      priceId: PromiseOrValue<BytesLike>,
      age: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestPrice(
      priceFeedId: PromiseOrValue<BytesLike>,
      decimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pythContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}