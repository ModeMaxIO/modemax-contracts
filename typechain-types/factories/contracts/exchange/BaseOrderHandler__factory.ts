/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BaseOrderHandler,
  BaseOrderHandlerInterface,
} from "../../../contracts/exchange/BaseOrderHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
      {
        internalType: "contract EventEmitter",
        name: "_eventEmitter",
        type: "address",
      },
      {
        internalType: "contract OrderVault",
        name: "_orderVault",
        type: "address",
      },
      {
        internalType: "contract Oracle",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "contract SwapHandler",
        name: "_swapHandler",
        type: "address",
      },
      {
        internalType: "contract IReferralStorage",
        name: "_referralStorage",
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
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "OracleError",
    type: "event",
  },
  {
    inputs: [],
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventEmitter",
    outputs: [
      {
        internalType: "contract EventEmitter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract Oracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orderVault",
    outputs: [
      {
        internalType: "contract OrderVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "referralStorage",
    outputs: [
      {
        internalType: "contract IReferralStorage",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapHandler",
    outputs: [
      {
        internalType: "contract SwapHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61016060405234801561001157600080fd5b506040516103453803806103458339810160408190526100309161007e565b6001600160a01b0395861660805295851660a05292841660c05290831660e052821661012052811661010052166101405261011a565b6001600160a01b038116811461007b57600080fd5b50565b600080600080600080600060e0888a03121561009957600080fd5b87516100a481610066565b60208901519097506100b581610066565b60408901519096506100c681610066565b60608901519095506100d781610066565b60808901519094506100e881610066565b60a08901519093506100f981610066565b60c089015190925061010a81610066565b8091505092959891949750929550565b60805160a05160c05160e0516101005161012051610140516101d461017160003960006076015260006101070152600061012e015260006101550152600061017c0152600060b90152600060e001526101d46000f3fe608060405234801561001057600080fd5b506004361061006c5760003560e01c80626cc35e146100715780634a4a7b04146100b4578063660d0d67146100db5780637dc0d1d0146101025780638a53aaac1461012957806393845e46146101505780639ff78c3014610177575b600080fd5b6100987f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100987f000000000000000000000000000000000000000000000000000000000000000081565b6100987f000000000000000000000000000000000000000000000000000000000000000081565b6100987f000000000000000000000000000000000000000000000000000000000000000081565b6100987f000000000000000000000000000000000000000000000000000000000000000081565b6100987f000000000000000000000000000000000000000000000000000000000000000081565b6100987f00000000000000000000000000000000000000000000000000000000000000008156fea26469706673582212203b152cbf65f9d67921963e70c5893287cab3a75131ea6529c416098390e5a31864736f6c63430008120033";

type BaseOrderHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseOrderHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseOrderHandler__factory extends ContractFactory {
  constructor(...args: BaseOrderHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    _orderVault: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _swapHandler: PromiseOrValue<string>,
    _referralStorage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseOrderHandler> {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _orderVault,
      _oracle,
      _swapHandler,
      _referralStorage,
      overrides || {}
    ) as Promise<BaseOrderHandler>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    _orderVault: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _swapHandler: PromiseOrValue<string>,
    _referralStorage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _orderVault,
      _oracle,
      _swapHandler,
      _referralStorage,
      overrides || {}
    );
  }
  override attach(address: string): BaseOrderHandler {
    return super.attach(address) as BaseOrderHandler;
  }
  override connect(signer: Signer): BaseOrderHandler__factory {
    return super.connect(signer) as BaseOrderHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseOrderHandlerInterface {
    return new utils.Interface(_abi) as BaseOrderHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseOrderHandler {
    return new Contract(address, _abi, signerOrProvider) as BaseOrderHandler;
  }
}
