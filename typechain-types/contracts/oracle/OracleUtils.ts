/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../common";

export interface OracleUtilsInterface extends utils.Interface {
  functions: {
    "COMPACTED_BLOCK_NUMBER_BITMASK()": FunctionFragment;
    "COMPACTED_BLOCK_NUMBER_BIT_LENGTH()": FunctionFragment;
    "COMPACTED_PRECISION_BITMASK()": FunctionFragment;
    "COMPACTED_PRECISION_BIT_LENGTH()": FunctionFragment;
    "COMPACTED_PRICE_BITMASK()": FunctionFragment;
    "COMPACTED_PRICE_BIT_LENGTH()": FunctionFragment;
    "COMPACTED_PRICE_INDEX_BITMASK()": FunctionFragment;
    "COMPACTED_PRICE_INDEX_BIT_LENGTH()": FunctionFragment;
    "COMPACTED_TIMESTAMP_BITMASK()": FunctionFragment;
    "COMPACTED_TIMESTAMP_BIT_LENGTH()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "COMPACTED_BLOCK_NUMBER_BITMASK"
      | "COMPACTED_BLOCK_NUMBER_BIT_LENGTH"
      | "COMPACTED_PRECISION_BITMASK"
      | "COMPACTED_PRECISION_BIT_LENGTH"
      | "COMPACTED_PRICE_BITMASK"
      | "COMPACTED_PRICE_BIT_LENGTH"
      | "COMPACTED_PRICE_INDEX_BITMASK"
      | "COMPACTED_PRICE_INDEX_BIT_LENGTH"
      | "COMPACTED_TIMESTAMP_BITMASK"
      | "COMPACTED_TIMESTAMP_BIT_LENGTH"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "COMPACTED_BLOCK_NUMBER_BITMASK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_BLOCK_NUMBER_BIT_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_PRECISION_BITMASK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_PRECISION_BIT_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_PRICE_BITMASK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_PRICE_BIT_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_PRICE_INDEX_BITMASK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_PRICE_INDEX_BIT_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_TIMESTAMP_BITMASK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPACTED_TIMESTAMP_BIT_LENGTH",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "COMPACTED_BLOCK_NUMBER_BITMASK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_BLOCK_NUMBER_BIT_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_PRECISION_BITMASK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_PRECISION_BIT_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_PRICE_BITMASK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_PRICE_BIT_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_PRICE_INDEX_BITMASK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_PRICE_INDEX_BIT_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_TIMESTAMP_BITMASK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPACTED_TIMESTAMP_BIT_LENGTH",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OracleUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleUtilsInterface;

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
    COMPACTED_BLOCK_NUMBER_BITMASK(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    COMPACTED_BLOCK_NUMBER_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    COMPACTED_PRECISION_BITMASK(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    COMPACTED_PRECISION_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    COMPACTED_PRICE_BITMASK(overrides?: CallOverrides): Promise<[BigNumber]>;

    COMPACTED_PRICE_BIT_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    COMPACTED_PRICE_INDEX_BITMASK(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    COMPACTED_PRICE_INDEX_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    COMPACTED_TIMESTAMP_BITMASK(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    COMPACTED_TIMESTAMP_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  COMPACTED_BLOCK_NUMBER_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

  COMPACTED_BLOCK_NUMBER_BIT_LENGTH(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  COMPACTED_PRECISION_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

  COMPACTED_PRECISION_BIT_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  COMPACTED_PRICE_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

  COMPACTED_PRICE_BIT_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  COMPACTED_PRICE_INDEX_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

  COMPACTED_PRICE_INDEX_BIT_LENGTH(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  COMPACTED_TIMESTAMP_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

  COMPACTED_TIMESTAMP_BIT_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    COMPACTED_BLOCK_NUMBER_BITMASK(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_BLOCK_NUMBER_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_PRECISION_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_PRECISION_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_PRICE_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_PRICE_BIT_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_PRICE_INDEX_BITMASK(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_PRICE_INDEX_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_TIMESTAMP_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_TIMESTAMP_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    COMPACTED_BLOCK_NUMBER_BITMASK(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_BLOCK_NUMBER_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_PRECISION_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_PRECISION_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_PRICE_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_PRICE_BIT_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_PRICE_INDEX_BITMASK(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_PRICE_INDEX_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    COMPACTED_TIMESTAMP_BITMASK(overrides?: CallOverrides): Promise<BigNumber>;

    COMPACTED_TIMESTAMP_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    COMPACTED_BLOCK_NUMBER_BITMASK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_BLOCK_NUMBER_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_PRECISION_BITMASK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_PRECISION_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_PRICE_BITMASK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_PRICE_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_PRICE_INDEX_BITMASK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_PRICE_INDEX_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_TIMESTAMP_BITMASK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    COMPACTED_TIMESTAMP_BIT_LENGTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
