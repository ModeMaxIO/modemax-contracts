/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DepositUtils,
  DepositUtilsInterface,
} from "../../../contracts/deposit/DepositUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "DisabledMarket",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyDepositAmounts",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyMarket",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minExecutionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
    ],
    name: "InsufficientExecutionFee",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wntAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "executionFee",
        type: "uint256",
      },
    ],
    name: "InsufficientWntAmountForExecutionFee",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "InvalidSwapMarket",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "callbackGasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCallbackGasLimit",
        type: "uint256",
      },
    ],
    name: "MaxCallbackGasLimitExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "swapPathLengh",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSwapPathLength",
        type: "uint256",
      },
    ],
    name: "MaxSwapPathLengthExceeded",
    type: "error",
  },
] as const;

const _bytecode =
  "0x612d1761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80636c6a42ac146100455780639ef3818914610067575b600080fd5b81801561005157600080fd5b506100656100603660046119ed565b610099565b005b81801561007357600080fd5b50610087610082366004611b5e565b610492565b60405190815260200160405180910390f35b603f5a6100a69190611d07565b6100b09084611d29565b9250600073__$b63e253a228f0e32f671cc49c7fc32477c$__63fdfc26f38a886040518363ffffffff1660e01b81526004016100ed929190611d3c565b600060405180830381865af415801561010a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101329190810190611e8c565b9050600061013f82515190565b6001600160a01b031603610166576040516395b66fe960e01b815260040160405180910390fd5b60208101515115801561017e57506020808201510151155b1561019b57604051626be30960e21b815260040160405180910390fd5b73__$b63e253a228f0e32f671cc49c7fc32477c$__6374b6fe138a886101c085515190565b60405160e085901b6001600160e01b03191681526001600160a01b0393841660048201526024810192909252909116604482015260640160006040518083038186803b15801561020f57600080fd5b505af4158015610223573d6000803e3d6000fd5b50505050600061023582602001515190565b11156102b757866001600160a01b0316632fb12605610256835160a0015190565b8351516020850151516040860151516040518563ffffffff1660e01b81526004016102849493929190611ff3565b600060405180830381600087803b15801561029e57600080fd5b505af11580156102b2573d6000803e3d6000fd5b505050505b60208181015101511561034257866001600160a01b0316632fb126056102df835160c0015190565b83515160208086015101516040860151516040518563ffffffff1660e01b815260040161030f9493929190611ff3565b600060405180830381600087803b15801561032957600080fd5b505af115801561033d573d6000803e3d6000fd5b505050505b73__$c1a7af12cfab3fde53a677c13aea00f1f1$__632365fa23898861036785515190565b87876040518663ffffffff1660e01b8152600401610389959493929190612062565b60006040518083038186803b1580156103a157600080fd5b505af41580156103b5573d6000803e3d6000fd5b505050506103c16117b4565b6103cc878383610952565b73__$60bb1dd4670b1e26e5010aaaf2f65694d3$__634bf2a26d8b8b8b6103f887602001516080015190565b8a8c6104038a515190565b60405160e089901b6001600160e01b03191681526001600160a01b0397881660048201529587166024870152938616604486015260648501929092526084840152831660a483015290911660c482015260e40160006040518083038186803b15801561046e57600080fd5b505af4158015610482573d6000803e3d6000fd5b5050505050505050505050505050565b600061049d83610a22565b60006104ad878460600151610a4c565b90506104bd878460c00151610b02565b6104cb878460e00151610b02565b608083015160405163352f9aed60e01b81526000916001600160a01b0388169163352f9aed916104fd916004016120b3565b6020604051808303816000875af115801561051c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054091906120c7565b90506000866001600160a01b031663352f9aed8660a001516040518263ffffffff1660e01b815260040161057491906120b3565b6020604051808303816000875af1158015610593573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b791906120c7565b905060006105c48a610c36565b9050806001600160a01b031686608001516001600160a01b0316036105fa576101408601516105f39084611d29565b92506106e0565b806001600160a01b03168660a001516001600160a01b03160361062e576101408601516106279083611d29565b91506106e0565b60405163352f9aed60e01b81526000906001600160a01b038a169063352f9aed9061065d9085906004016120b3565b6020604051808303816000875af115801561067c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a091906120c7565b90508661014001518110156106d957610140870151604051631d3c66bf60e11b81526106d09183916004016120e0565b60405180910390fd5b6101408701525b821580156106ec575081155b1561070957604051626be30960e21b815260040160405180910390fd5b855161071490610ce3565b600060405180606001604052806040518061012001604052808b6001600160a01b031681526020018a600001516001600160a01b031681526020018a602001516001600160a01b031681526020018a604001516001600160a01b0316815260200188600001516001600160a01b031681526020018a608001516001600160a01b031681526020018a60a001516001600160a01b031681526020018a60c0015181526020018a60e0015181525081526020016040518060c001604052808781526020018681526020018a610100015181526020016107ef610d0a565b81526020018a610140015181526020018a6101600151815250815260200160405180602001604052808a6101200151151581525081525090506108408b61083b836020015160a0015190565b610d86565b600061084c8c83610e6d565b905061085e8c828a6101400151611087565b60006108698d6110cf565b905073__$b63e253a228f0e32f671cc49c7fc32477c$__632a3459168e83866040518463ffffffff1660e01b81526004016108a693929190612263565b60006040518083038186803b1580156108be57600080fd5b505af41580156108d2573d6000803e3d6000fd5b5050604051631ba5d99560e21b815273__$c1a7af12cfab3fde53a677c13aea00f1f1$__9250636e9766549150610911908f9085908890600401612263565b60006040518083038186803b15801561092957600080fd5b505af415801561093d573d6000803e3d6000fd5b50929f9e505050505050505050505050505050565b61096661096183516040015190565b611112565b61096f57505050565b8151604001516001600160a01b0316634ef189b8610992846020015160a0015190565b8585856040518563ffffffff1660e01b81526004016109b393929190612ac8565b600060405180830381600088803b1580156109cd57600080fd5b5087f1935050505080156109df575060015b610a1d577f7178777757efeb0f7ceed92d1aaa2dbc65147ebaf0e5da1565a76e73066c75d58383604051610a14929190612b97565b60405180910390a15b505050565b6001600160a01b038116610a4957604051636eb80b5160e11b815260040160405180910390fd5b50565b60408051608081018252600080825260208201819052918101829052606081019190915260405163a8d8fff560e01b815260009073__$ff439aa65a80c9eec648f15db20b189505$__9063a8d8fff590610aac9087908790600401612bb0565b608060405180830381865af4158015610ac9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aed9190612bca565b9050610af98482611149565b90505b92915050565b6000826001600160a01b031663bd02d0f5604051602001610b4b9060208082526014908201527309a82b0bea6ae82a0bea082a890be988a9c8ea8960631b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610b7f91815260200190565b602060405180830381865afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc091906120c7565b90508082511115610be957815181604051639da3604360e01b81526004016106d09291906120e0565b60005b8251811015610c30576000838281518110610c0957610c09612c4e565b60200260200101519050610c1d8582611212565b5080610c2881612c64565b915050610bec565b50505050565b6000816001600160a01b03166321f8a721604051602001610c6e9060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610ca291815260200190565b602060405180830381865afa158015610cbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afc9190612c7d565b6001600160a01b038116610a495760405163d551823d60e01b815260040160405180910390fd5b6000610d1461129b565b15610d815760646001600160a01b031663a3b1b31d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7c91906120c7565b905090565b504390565b6000826001600160a01b031663bd02d0f5604051602001610dd19060208082526016908201527513505617d0d05313109050d2d7d1d054d7d31253525560521b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610e0591815260200190565b602060405180830381865afa158015610e22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4691906120c7565b905080821115610a1d5781816040516308575b4960e11b81526004016106d09291906120e0565b600080836001600160a01b031663bd02d0f5610e876112b2565b6040518263ffffffff1660e01b8152600401610ea591815260200190565b602060405180830381865afa158015610ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee691906120c7565b90506000610ef78451610100015190565b51845160e0015151610f099190612c9a565b90506000610f178383612cad565b9050610f2585602001515190565b1580610f3657506020808601510151155b15610fe15780610f4b866020015160a0015190565b876001600160a01b031663bd02d0f5610f646001611308565b6040518263ffffffff1660e01b8152600401610f8291815260200190565b602060405180830381865afa158015610f9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc391906120c7565b610fcd9190612c9a565b610fd79190612c9a565b9350505050610afc565b80610ff1866020015160a0015190565b876001600160a01b031663bd02d0f561100a6000611308565b6040518263ffffffff1660e01b815260040161102891815260200190565b602060405180830381865afa158015611045573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106991906120c7565b6110739190612c9a565b61107d9190612c9a565b9695505050505050565b60006110938484611383565b905060006110a13a83612cad565b9050808310156110c8578083604051635dac504d60e01b81526004016106d09291906120e0565b5050505050565b6000806110db83611538565b9050600083826040516020016110f2929190611d3c565b60408051601f198184030181529190528051602090910120949350505050565b60006001600160a01b03821661112a57506000919050565b6001600160a01b0382163b61114157506000919050565b506001919050565b80516001600160a01b0316611171576040516302fde0d760e11b815260040160405180910390fd5b6000826001600160a01b0316637ae1cfca61118f84600001516115ea565b6040518263ffffffff1660e01b81526004016111ad91815260200190565b602060405180830381865afa1580156111ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ee9190612cc4565b90508015610a1d5781516040516309f8c93760e01b81526106d091906004016120b3565b60405163a8d8fff560e01b815260009073__$ff439aa65a80c9eec648f15db20b189505$__9063a8d8fff59061124e9086908690600401612bb0565b608060405180830381865af415801561126b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128f9190612bca565b9050610a1d8382611654565b600061a4b1461480610d7c5750504662066eed1490565b60006040516020016112ed9060208082526015908201527414d25391d31157d4d5d05417d1d054d7d312535255605a1b604082015260600190565b60405160208183030381529060405280519060200120905090565b600060405160200161133f9060208082526011908201527011115413d4d25517d1d054d7d312535255607a1b604082015260600190565b60408051601f19818403018152828252805160209182012090830152831515908201526060015b604051602081830303815290604052805190602001209050919050565b600080836001600160a01b031663bd02d0f56040516020016113d6906020808252601d908201527f455354494d415445445f4741535f4645455f424153455f414d4f554e54000000604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161140a91815260200190565b602060405180830381865afa158015611427573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144b91906120c7565b90506000846001600160a01b031663bd02d0f56040516020016114ab9060208082526023908201527f455354494d415445445f4741535f4645455f4d554c5449504c4945525f4641436040820152622a27a960e91b606082015260800190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016114df91815260200190565b602060405180830381865afa1580156114fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152091906120c7565b9050600061152e858361169f565b61107d9084612c9a565b6000816001600160a01b031663340dbab3604051602001611572906020808252600590820152644e4f4e434560d81b604082015260600190565b6040516020818303038152906040528051906020012060016040518363ffffffff1660e01b81526004016115a79291906120e0565b6020604051808303816000875af11580156115c6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afc91906120c7565b6000604051602001611622906020808252601290820152711254d7d3505492d15517d11254d05093115160721b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001611366565b61165e8282611149565b80606001516001600160a01b031681604001516001600160a01b03160361169b5780516040516332e6f44d60e21b81526106d091906004016120b3565b5050565b6000610af9838368327cb2734119d3b7a9601e1b60006116c08484846116ca565b90505b9392505050565b6000808060001985870985870292508281108382030391505080600003611704578382816116fa576116fa611cdb565b04925050506116c3565b80841161174b5760405162461bcd60e51b81526020600482015260156024820152744d6174683a206d756c446976206f766572666c6f7760581b60448201526064016106d0565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b604080516101208101909152606060e08201818152610100830191909152819081526020016117f6604051806040016040528060608152602001606081525090565b8152602001611818604051806040016040528060608152602001606081525090565b815260200161183a604051806040016040528060608152602001606081525090565b815260200161185c604051806040016040528060608152602001606081525090565b815260200161187e604051806040016040528060608152602001606081525090565b81526020016118a0604051806040016040528060608152602001606081525090565b905290565b6001600160a01b0381168114610a4957600080fd5b80356118c5816118a5565b919050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715611903576119036118ca565b60405290565b604051606081016001600160401b0381118282101715611903576119036118ca565b60405161012081016001600160401b0381118282101715611903576119036118ca565b604051601f8201601f191681016001600160401b0381118282101715611976576119766118ca565b604052919050565b600082601f83011261198f57600080fd5b81356001600160401b038111156119a8576119a86118ca565b6119bb601f8201601f191660200161194e565b8181528460208386010111156119d057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600080600080610100898b031215611a0a57600080fd5b8835611a15816118a5565b97506020890135611a25816118a5565b96506040890135611a35816118a5565b9550606089013594506080890135611a4c816118a5565b935060a0890135925060c08901356001600160401b0380821115611a6f57600080fd5b611a7b8c838d0161197e565b935060e08b0135915080821115611a9157600080fd5b50611a9e8b828c0161197e565b9150509295985092959890939650565b60006001600160401b03821115611ac757611ac76118ca565b5060051b60200190565b600082601f830112611ae257600080fd5b81356020611af7611af283611aae565b61194e565b82815260059290921b84018101918181019086841115611b1657600080fd5b8286015b84811015611b3a578035611b2d816118a5565b8352918301918301611b1a565b509695505050505050565b8015158114610a4957600080fd5b80356118c581611b45565b600080600080600060a08688031215611b7657600080fd5b8535611b81816118a5565b94506020860135611b91816118a5565b93506040860135611ba1816118a5565b92506060860135611bb1816118a5565b915060808601356001600160401b0380821115611bcd57600080fd5b90870190610180828a031215611be257600080fd5b611bea6118e0565b611bf3836118ba565b8152611c01602084016118ba565b6020820152611c12604084016118ba565b6040820152611c23606084016118ba565b6060820152611c34608084016118ba565b6080820152611c4560a084016118ba565b60a082015260c083013582811115611c5c57600080fd5b611c688b828601611ad1565b60c08301525060e083013582811115611c8057600080fd5b611c8c8b828601611ad1565b60e08301525061010083810135908201526101209150611cad828401611b53565b8282015261014091508183013582820152610160915081830135828201528093505050509295509295909350565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082611d2457634e487b7160e01b600052601260045260246000fd5b500490565b81810381811115610afc57610afc611cf1565b6001600160a01b03929092168252602082015260400190565b80516118c5816118a5565b600082601f830112611d7157600080fd5b81516020611d81611af283611aae565b82815260059290921b84018101918181019086841115611da057600080fd5b8286015b84811015611b3a578051611db7816118a5565b8352918301918301611da4565b600060c08284031215611dd657600080fd5b60405160c081016001600160401b0381118282101715611df857611df86118ca565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060208284031215611e4f57600080fd5b604051602081016001600160401b0381118282101715611e7157611e716118ca565b80604052508091508251611e8481611b45565b905292915050565b600060208284031215611e9e57600080fd5b81516001600160401b0380821115611eb557600080fd5b8184019150610100808387031215611ecc57600080fd5b611ed4611909565b835183811115611ee357600080fd5b84016101208189031215611ef657600080fd5b611efe61192b565b611f0782611d55565b8152611f1560208301611d55565b6020820152611f2660408301611d55565b6040820152611f3760608301611d55565b6060820152611f4860808301611d55565b6080820152611f5960a08301611d55565b60a0820152611f6a60c08301611d55565b60c082015260e082015185811115611f8157600080fd5b611f8d8a828501611d60565b60e0830152508382015185811115611fa457600080fd5b611fb08a828501611d60565b8286015250825250611fc58760208601611dc4565b6020820152611fd78760e08601611e3d565b60408201529695505050505050565b6001600160a01b03169052565b6001600160a01b0394851681529290931660208301526040820152901515606082015260800190565b6000815180845260005b8181101561204257602081850181015186830182015201612026565b506000602082860101526020601f19601f83011685010191505092915050565b6001600160a01b038681168252602082018690528416604082015260a0606082018190526000906120959083018561201c565b82810360808401526120a7818561201c565b98975050505050505050565b6001600160a01b0391909116815260200190565b6000602082840312156120d957600080fd5b5051919050565b918252602082015260400190565b600081518084526020808501945080840160005b838110156121275781516001600160a01b031687529582019590820190600101612102565b509495945050505050565b600061010082518185526121498286018251611fe6565b602081015161012061215d81880183611fe6565b60408301519150612172610140880183611fe6565b60608301519150612187610160880183611fe6565b6080830151915061219c610180880183611fe6565b60a083015191506121b16101a0880183611fe6565b60c083015191506121c66101c0880183611fe6565b60e08301519150806101e0880152506121e36102208701826120ee565b9282015186840360ff190161020088015292905061220181846120ee565b92505050602083015161224c6020860182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b5060408301518051151560e0860152509392505050565b60018060a01b038416815282602082015260606040820152600061228a6060830184612132565b95945050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156123015782840389528151604081518187526122d38288018261201c565b915050868201519150858103878701526122ed81836120ee565b9a87019a95505050908401906001016122b1565b5091979650505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561238557898603605f190184528451805188885261235f8989018261201c565b918401516001600160a01b0316978401979097529550938101939281019260010161233b565b50808801519550888503818a01525050505061228a8183612293565b6000815180845260208085019450848260051b86018286016000805b86811015612430578484038a528251604081518187526123df8288018261201c565b92890151878403888b01528051808552908a01938693508a0191505b8083101561241b57835182529289019260019290920191908901906123fb565b509b88019b95505050918501916001016123bd565b509198975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156124ac57898603605f190184528451805188885261248f8989018261201c565b91840151978401979097529550938101939281019260010161246b565b50808801519550888503818a01525050505061228a81836123a1565b600082825180855260208086019550808260051b8401018186016000805b8581101561243057601f19878503018a5282516040815181875261250c8288018261201c565b92880151878403888a0152805180855290890193869350890191505b808310156125485783518252928801926001929092019190880190612528565b509b87019b95505050918401916001016124e6565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156125cb57898603605f19018452845180518888526125ae8989018261201c565b91840151978401979097529550938101939281019260010161258a565b50808801519550888503818a01525050505061228a81836124c8565b600081518084526020808501808196508360051b810191508286016000805b8681101561267b578385038a528251604081518188526126288289018261201c565b92890151888403898b01528051808552908a01938693508a0191505b8083101561266657835115158252928901926001929092019190890190612644565b509b88019b9650505091850191600101612606565b509298975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156126f957898603605f19018452845180518888526126da8989018261201c565b91840151151597840197909752955093810193928101926001016126b6565b50808801519550888503818a01525050505061228a81836125e7565b600081518084526020808501808196508360051b810191508286016000805b8681101561267b578385038a528251604081518188526127568289018261201c565b92890151888403898b01528051808552908a01938693508a0191505b808310156127925783518252928901926001929092019190890190612772565b509b88019b9650505091850191600101612734565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561281557898603605f19018452845180518888526127f88989018261201c565b9184015197840197909752955093810193928101926001016127d4565b50808801519550888503818a01525050505061228a8183612715565b600081518084526020808501808196506005915083821b81018387016000805b878110156128dc578484038b528251604081518187526128738288018261201c565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b828110156128c557601f198583030184526128b382875161201c565b958d0195938d01939150600101612897565b509e8b019e97505050938801935050600101612851565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561296857898603605f190184528451805188885261293c8989018261201c565b9184015188830389860152919050612954818361201c565b975050509381019392810192600101612918565b50808801519550888503818a01525050505061228a8183612831565b600081518084526020808501808196506005915083821b81018387016000805b878110156128dc578484038b528251604081518187526129c68288018261201c565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b82811015612a1857601f19858303018452612a0682875161201c565b958d0195938d019391506001016129ea565b509e8b019e975050509388019350506001016129a4565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015612aac57898603605f1901845284518051888852612a808989018261201c565b9184015188830389860152919050612a98818361201c565b975050509381019392810192600101612a5c565b50808801519550888503818a01525050505061228a8183612984565b838152606060208201526000612ae16060830185612132565b8281036040840152835160e08252612afc60e083018261230e565b905060208501518282036020840152612b15828261243e565b91505060408501518282036040840152612b2f828261255d565b91505060608501518282036060840152612b498282612689565b91505060808501518282036080840152612b6382826127a7565b91505060a085015182820360a0840152612b7d82826128eb565b91505060c085015182820360c08401526120a78282612a2f565b8281526040602082015260006116c06040830184612132565b6001600160a01b0392831681529116602082015260400190565b600060808284031215612bdc57600080fd5b604051608081016001600160401b0381118282101715612bfe57612bfe6118ca565b6040528251612c0c816118a5565b81526020830151612c1c816118a5565b60208201526040830151612c2f816118a5565b60408201526060830151612c42816118a5565b60608201529392505050565b634e487b7160e01b600052603260045260246000fd5b600060018201612c7657612c76611cf1565b5060010190565b600060208284031215612c8f57600080fd5b8151610af9816118a5565b80820180821115610afc57610afc611cf1565b8082028115828204841417610afc57610afc611cf1565b600060208284031215612cd657600080fd5b8151610af981611b4556fea2646970667358221220bc98fb1bca7e785f33a63fdb4df35a31e3c996593e0774d1c4e765514d4b893364736f6c63430008120033";

type DepositUtilsConstructorParams =
  | [linkLibraryAddresses: DepositUtilsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DepositUtils__factory extends ContractFactory {
  constructor(...args: DepositUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DepositUtils__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DepositUtilsLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b63e253a228f0e32f671cc49c7fc32477c\\$__", "g"),
      linkLibraryAddresses[
        "contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c1a7af12cfab3fde53a677c13aea00f1f1\\$__", "g"),
      linkLibraryAddresses[
        "contracts/deposit/DepositEventUtils.sol:DepositEventUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$60bb1dd4670b1e26e5010aaaf2f65694d3\\$__", "g"),
      linkLibraryAddresses["contracts/gas/GasUtils.sol:GasUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ff439aa65a80c9eec648f15db20b189505\\$__", "g"),
      linkLibraryAddresses[
        "contracts/market/MarketStoreUtils.sol:MarketStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositUtils> {
    return super.deploy(overrides || {}) as Promise<DepositUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositUtils {
    return super.attach(address) as DepositUtils;
  }
  override connect(signer: Signer): DepositUtils__factory {
    return super.connect(signer) as DepositUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositUtilsInterface {
    return new utils.Interface(_abi) as DepositUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositUtils {
    return new Contract(address, _abi, signerOrProvider) as DepositUtils;
  }
}

export interface DepositUtilsLibraryAddresses {
  ["contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"]: string;
  ["contracts/deposit/DepositEventUtils.sol:DepositEventUtils"]: string;
  ["contracts/gas/GasUtils.sol:GasUtils"]: string;
  ["contracts/market/MarketStoreUtils.sol:MarketStoreUtils"]: string;
}