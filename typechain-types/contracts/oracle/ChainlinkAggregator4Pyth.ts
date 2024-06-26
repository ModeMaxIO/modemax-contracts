/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ChainlinkAggregator4PythInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "decimals()": FunctionFragment;
    "description()": FunctionFragment;
    "getAnswer(uint256)": FunctionFragment;
    "getRoundData(uint80)": FunctionFragment;
    "getTimestamp(uint256)": FunctionFragment;
    "isKeeper(address)": FunctionFragment;
    "latestAnswer()": FunctionFragment;
    "latestAnswerOracle()": FunctionFragment;
    "latestAnswerTimestampOracle()": FunctionFragment;
    "latestRound()": FunctionFragment;
    "latestRoundData()": FunctionFragment;
    "latestRoundOracle()": FunctionFragment;
    "latestTimestamp()": FunctionFragment;
    "latestTimestampOracle()": FunctionFragment;
    "maxRoundId()": FunctionFragment;
    "owner()": FunctionFragment;
    "setKeeper(address,bool)": FunctionFragment;
    "setLatestAnswer(int192[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "decimals"
      | "description"
      | "getAnswer"
      | "getRoundData"
      | "getTimestamp"
      | "isKeeper"
      | "latestAnswer"
      | "latestAnswerOracle"
      | "latestAnswerTimestampOracle"
      | "latestRound"
      | "latestRoundData"
      | "latestRoundOracle"
      | "latestTimestamp"
      | "latestTimestampOracle"
      | "maxRoundId"
      | "owner"
      | "setKeeper"
      | "setLatestAnswer"
      | "transferOwnership"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAnswer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isKeeper",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswerOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswerTimestampOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestampOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxRoundId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setKeeper",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLatestAnswer",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswerOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswerTimestampOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestampOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxRoundId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLatestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "AnswerUpdated(int256,uint256,uint256)": EventFragment;
    "NewRound(uint256,address,uint256)": EventFragment;
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnswerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AnswerUpdatedEventObject {
  current: BigNumber;
  roundId: BigNumber;
  updatedAt: BigNumber;
}
export type AnswerUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AnswerUpdatedEventObject
>;

export type AnswerUpdatedEventFilter = TypedEventFilter<AnswerUpdatedEvent>;

export interface NewRoundEventObject {
  roundId: BigNumber;
  startedBy: string;
  startedAt: BigNumber;
}
export type NewRoundEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  NewRoundEventObject
>;

export type NewRoundEventFilter = TypedEventFilter<NewRoundEvent>;

export interface OwnershipTransferRequestedEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string],
  OwnershipTransferRequestedEventObject
>;

export type OwnershipTransferRequestedEventFilter =
  TypedEventFilter<OwnershipTransferRequestedEvent>;

export interface OwnershipTransferredEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ChainlinkAggregator4Pyth extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainlinkAggregator4PythInterface;

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
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    description(overrides?: CallOverrides): Promise<[string]>;

    getAnswer(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    getTimestamp(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isKeeper(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestAnswerOracle(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestAnswerTimestampOracle(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    latestRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestRoundOracle(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestTimestampOracle(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxRoundId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      _isKeeper: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLatestAnswer(
      answers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  description(overrides?: CallOverrides): Promise<string>;

  getAnswer(
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoundData(
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  getTimestamp(
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isKeeper(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  latestAnswerOracle(overrides?: CallOverrides): Promise<BigNumber>;

  latestAnswerTimestampOracle(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  latestRound(overrides?: CallOverrides): Promise<BigNumber>;

  latestRoundData(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  latestRoundOracle(overrides?: CallOverrides): Promise<BigNumber>;

  latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  latestTimestampOracle(overrides?: CallOverrides): Promise<BigNumber>;

  maxRoundId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  setKeeper(
    _keeper: PromiseOrValue<string>,
    _isKeeper: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLatestAnswer(
    answers: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    description(overrides?: CallOverrides): Promise<string>;

    getAnswer(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    getTimestamp(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isKeeper(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    latestAnswerOracle(overrides?: CallOverrides): Promise<BigNumber>;

    latestAnswerTimestampOracle(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    latestRound(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestRoundOracle(overrides?: CallOverrides): Promise<BigNumber>;

    latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    latestTimestampOracle(overrides?: CallOverrides): Promise<BigNumber>;

    maxRoundId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      _isKeeper: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLatestAnswer(
      answers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AnswerUpdated(int256,uint256,uint256)"(
      current?: PromiseOrValue<BigNumberish> | null,
      roundId?: PromiseOrValue<BigNumberish> | null,
      updatedAt?: null
    ): AnswerUpdatedEventFilter;
    AnswerUpdated(
      current?: PromiseOrValue<BigNumberish> | null,
      roundId?: PromiseOrValue<BigNumberish> | null,
      updatedAt?: null
    ): AnswerUpdatedEventFilter;

    "NewRound(uint256,address,uint256)"(
      roundId?: PromiseOrValue<BigNumberish> | null,
      startedBy?: PromiseOrValue<string> | null,
      startedAt?: null
    ): NewRoundEventFilter;
    NewRound(
      roundId?: PromiseOrValue<BigNumberish> | null,
      startedBy?: PromiseOrValue<string> | null,
      startedAt?: null
    ): NewRoundEventFilter;

    "OwnershipTransferRequested(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;
    OwnershipTransferRequested(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    getAnswer(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isKeeper(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    latestAnswerOracle(overrides?: CallOverrides): Promise<BigNumber>;

    latestAnswerTimestampOracle(overrides?: CallOverrides): Promise<BigNumber>;

    latestRound(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundData(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundOracle(overrides?: CallOverrides): Promise<BigNumber>;

    latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    latestTimestampOracle(overrides?: CallOverrides): Promise<BigNumber>;

    maxRoundId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      _isKeeper: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLatestAnswer(
      answers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAnswer(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimestamp(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isKeeper(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestAnswerOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestAnswerTimestampOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRoundOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestTimestampOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxRoundId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setKeeper(
      _keeper: PromiseOrValue<string>,
      _isKeeper: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLatestAnswer(
      answers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
