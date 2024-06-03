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

export declare namespace Withdrawal {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    longTokenSwapPath: PromiseOrValue<string>[];
    shortTokenSwapPath: PromiseOrValue<string>[];
  };

  export type AddressesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string[],
    string[]
  ] & {
    account: string;
    receiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    market: string;
    longTokenSwapPath: string[];
    shortTokenSwapPath: string[];
  };

  export type NumbersStruct = {
    marketTokenAmount: PromiseOrValue<BigNumberish>;
    minLongTokenAmount: PromiseOrValue<BigNumberish>;
    minShortTokenAmount: PromiseOrValue<BigNumberish>;
    updatedAtBlock: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type NumbersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    marketTokenAmount: BigNumber;
    minLongTokenAmount: BigNumber;
    minShortTokenAmount: BigNumber;
    updatedAtBlock: BigNumber;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };

  export type FlagsStruct = {
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
  };

  export type FlagsStructOutput = [boolean] & {
    shouldUnwrapNativeToken: boolean;
  };

  export type PropsStruct = {
    addresses: Withdrawal.AddressesStruct;
    numbers: Withdrawal.NumbersStruct;
    flags: Withdrawal.FlagsStruct;
  };

  export type PropsStructOutput = [
    Withdrawal.AddressesStructOutput,
    Withdrawal.NumbersStructOutput,
    Withdrawal.FlagsStructOutput
  ] & {
    addresses: Withdrawal.AddressesStructOutput;
    numbers: Withdrawal.NumbersStructOutput;
    flags: Withdrawal.FlagsStructOutput;
  };
}

export declare namespace OracleUtils {
  export type SetPricesParamsStruct = {
    signerInfo: PromiseOrValue<BigNumberish>;
    tokens: PromiseOrValue<string>[];
    compactedMinOracleBlockNumbers: PromiseOrValue<BigNumberish>[];
    compactedMaxOracleBlockNumbers: PromiseOrValue<BigNumberish>[];
    compactedOracleTimestamps: PromiseOrValue<BigNumberish>[];
    compactedDecimals: PromiseOrValue<BigNumberish>[];
    compactedMinPrices: PromiseOrValue<BigNumberish>[];
    compactedMinPricesIndexes: PromiseOrValue<BigNumberish>[];
    compactedMaxPrices: PromiseOrValue<BigNumberish>[];
    compactedMaxPricesIndexes: PromiseOrValue<BigNumberish>[];
    signatures: PromiseOrValue<BytesLike>[];
    priceFeedTokens: PromiseOrValue<string>[];
    realtimeFeedTokens: PromiseOrValue<string>[];
    realtimeFeedData: PromiseOrValue<BytesLike>[];
  };

  export type SetPricesParamsStructOutput = [
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    string[],
    string[],
    string[],
    string[]
  ] & {
    signerInfo: BigNumber;
    tokens: string[];
    compactedMinOracleBlockNumbers: BigNumber[];
    compactedMaxOracleBlockNumbers: BigNumber[];
    compactedOracleTimestamps: BigNumber[];
    compactedDecimals: BigNumber[];
    compactedMinPrices: BigNumber[];
    compactedMinPricesIndexes: BigNumber[];
    compactedMaxPrices: BigNumber[];
    compactedMaxPricesIndexes: BigNumber[];
    signatures: string[];
    priceFeedTokens: string[];
    realtimeFeedTokens: string[];
    realtimeFeedData: string[];
  };

  export type SimulatePricesParamsStruct = {
    primaryTokens: PromiseOrValue<string>[];
    primaryPrices: Price.PropsStruct[];
  };

  export type SimulatePricesParamsStructOutput = [
    string[],
    Price.PropsStructOutput[]
  ] & { primaryTokens: string[]; primaryPrices: Price.PropsStructOutput[] };
}

export declare namespace WithdrawalUtils {
  export type CreateWithdrawalParamsStruct = {
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    longTokenSwapPath: PromiseOrValue<string>[];
    shortTokenSwapPath: PromiseOrValue<string>[];
    minLongTokenAmount: PromiseOrValue<BigNumberish>;
    minShortTokenAmount: PromiseOrValue<BigNumberish>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type CreateWithdrawalParamsStructOutput = [
    string,
    string,
    string,
    string,
    string[],
    string[],
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    receiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    market: string;
    longTokenSwapPath: string[];
    shortTokenSwapPath: string[];
    minLongTokenAmount: BigNumber;
    minShortTokenAmount: BigNumber;
    shouldUnwrapNativeToken: boolean;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };
}

export declare namespace Price {
  export type PropsStruct = {
    min: PromiseOrValue<BigNumberish>;
    max: PromiseOrValue<BigNumberish>;
  };

  export type PropsStructOutput = [BigNumber, BigNumber] & {
    min: BigNumber;
    max: BigNumber;
  };
}

export interface WithdrawalHandlerInterface extends utils.Interface {
  functions: {
    "_executeWithdrawal(bytes32,((address,address,address,address,address,address[],address[]),(uint256,uint256,uint256,uint256,uint256,uint256),(bool)),(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[],address[],bytes[]),address)": FunctionFragment;
    "cancelWithdrawal(bytes32)": FunctionFragment;
    "createWithdrawal(address,(address,address,address,address,address[],address[],uint256,uint256,bool,uint256,uint256))": FunctionFragment;
    "dataStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "executeWithdrawal(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[],address[],bytes[]))": FunctionFragment;
    "oracle()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "simulateExecuteWithdrawal(bytes32,(address[],(uint256,uint256)[]))": FunctionFragment;
    "withdrawalVault()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_executeWithdrawal"
      | "cancelWithdrawal"
      | "createWithdrawal"
      | "dataStore"
      | "eventEmitter"
      | "executeWithdrawal"
      | "oracle"
      | "roleStore"
      | "simulateExecuteWithdrawal"
      | "withdrawalVault"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_executeWithdrawal",
    values: [
      PromiseOrValue<BytesLike>,
      Withdrawal.PropsStruct,
      OracleUtils.SetPricesParamsStruct,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelWithdrawal",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createWithdrawal",
    values: [
      PromiseOrValue<string>,
      WithdrawalUtils.CreateWithdrawalParamsStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithdrawal",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SetPricesParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "simulateExecuteWithdrawal",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SimulatePricesParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalVault",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_executeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "simulateExecuteWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalVault",
    data: BytesLike
  ): Result;

  events: {
    "OracleError(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OracleError"): EventFragment;
}

export interface OracleErrorEventObject {
  reason: string;
}
export type OracleErrorEvent = TypedEvent<[string], OracleErrorEventObject>;

export type OracleErrorEventFilter = TypedEventFilter<OracleErrorEvent>;

export interface WithdrawalHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WithdrawalHandlerInterface;

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
    _executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawalVault(overrides?: CallOverrides): Promise<[string]>;
  };

  _executeWithdrawal(
    key: PromiseOrValue<BytesLike>,
    withdrawal: Withdrawal.PropsStruct,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    keeper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelWithdrawal(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createWithdrawal(
    account: PromiseOrValue<string>,
    params: WithdrawalUtils.CreateWithdrawalParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  executeWithdrawal(
    key: PromiseOrValue<BytesLike>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  oracle(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  simulateExecuteWithdrawal(
    key: PromiseOrValue<BytesLike>,
    params: OracleUtils.SimulatePricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawalVault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    oracle(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawalVault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OracleError(string)"(reason?: null): OracleErrorEventFilter;
    OracleError(reason?: null): OracleErrorEventFilter;
  };

  estimateGas: {
    _executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawalVault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeWithdrawal(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawalVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
