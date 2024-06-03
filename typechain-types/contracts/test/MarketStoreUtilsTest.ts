/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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
} from "../../common";

export declare namespace Market {
  export type PropsStruct = {
    marketToken: PromiseOrValue<string>;
    indexToken: PromiseOrValue<string>;
    longToken: PromiseOrValue<string>;
    shortToken: PromiseOrValue<string>;
  };

  export type PropsStructOutput = [string, string, string, string] & {
    marketToken: string;
    indexToken: string;
    longToken: string;
    shortToken: string;
  };
}

export interface MarketStoreUtilsTestInterface extends utils.Interface {
  functions: {
    "getEmptyMarket()": FunctionFragment;
    "getMarketSaltHash(address,string,address,address,address,bytes32)": FunctionFragment;
    "removeMarket(address,address)": FunctionFragment;
    "removeMarketSaltHash(address,string,address,address,address,bytes32)": FunctionFragment;
    "setMarket(address,address,bytes32,(address,address,address,address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getEmptyMarket"
      | "getMarketSaltHash"
      | "removeMarket"
      | "removeMarketSaltHash"
      | "setMarket"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEmptyMarket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketSaltHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMarket",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMarketSaltHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarket",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      Market.PropsStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEmptyMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketSaltHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMarketSaltHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMarket", data: BytesLike): Result;

  events: {};
}

export interface MarketStoreUtilsTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketStoreUtilsTestInterface;

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
    getEmptyMarket(
      overrides?: CallOverrides
    ): Promise<[Market.PropsStructOutput]>;

    getMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      market: Market.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getEmptyMarket(overrides?: CallOverrides): Promise<Market.PropsStructOutput>;

  getMarketSaltHash(
    dataStore: PromiseOrValue<string>,
    label: PromiseOrValue<string>,
    indexToken: PromiseOrValue<string>,
    longToken: PromiseOrValue<string>,
    shortToken: PromiseOrValue<string>,
    marketType: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  removeMarket(
    dataStore: PromiseOrValue<string>,
    key: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeMarketSaltHash(
    dataStore: PromiseOrValue<string>,
    label: PromiseOrValue<string>,
    indexToken: PromiseOrValue<string>,
    longToken: PromiseOrValue<string>,
    shortToken: PromiseOrValue<string>,
    marketType: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMarket(
    dataStore: PromiseOrValue<string>,
    key: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    market: Market.PropsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEmptyMarket(
      overrides?: CallOverrides
    ): Promise<Market.PropsStructOutput>;

    getMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    removeMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      market: Market.PropsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getEmptyMarket(overrides?: CallOverrides): Promise<BigNumber>;

    getMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      market: Market.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEmptyMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeMarketSaltHash(
      dataStore: PromiseOrValue<string>,
      label: PromiseOrValue<string>,
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMarket(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      market: Market.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
