/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockRealtimeFeedVerifier,
  MockRealtimeFeedVerifierInterface,
} from "../../../contracts/mock/MockRealtimeFeedVerifier";

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
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101a1806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638e760afe14610030575b600080fd5b61004161003e36600461006d565b90565b60405161004e919061011d565b60405180910390f35b634e487b7160e01b600052604160045260246000fd5b60006020828403121561007f57600080fd5b81356001600160401b038082111561009657600080fd5b818401915084601f8301126100aa57600080fd5b8135818111156100bc576100bc610057565b604051601f8201601f19908116603f011681019083821181831017156100e4576100e4610057565b816040528281528760208487010111156100fd57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b8181101561014a5785810183015185820160400152820161012e565b506000604082860101526040601f19601f830116850101925050509291505056fea26469706673582212204ca9c1d2e2204ad4f21c0afe56d00ce4cc2c3f879a8e382456ff3fa7ceb0fe8d64736f6c63430008120033";

type MockRealtimeFeedVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRealtimeFeedVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRealtimeFeedVerifier__factory extends ContractFactory {
  constructor(...args: MockRealtimeFeedVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockRealtimeFeedVerifier> {
    return super.deploy(overrides || {}) as Promise<MockRealtimeFeedVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockRealtimeFeedVerifier {
    return super.attach(address) as MockRealtimeFeedVerifier;
  }
  override connect(signer: Signer): MockRealtimeFeedVerifier__factory {
    return super.connect(signer) as MockRealtimeFeedVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRealtimeFeedVerifierInterface {
    return new utils.Interface(_abi) as MockRealtimeFeedVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRealtimeFeedVerifier {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockRealtimeFeedVerifier;
  }
}
