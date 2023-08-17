/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Meowl, MeowlInterface } from "../../contracts/Meowl";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmountReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "SwapBackSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_isExcludedMaxTransactionAmount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "automatedMarketMakerPairs",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "devWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enableTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "excluded",
        type: "bool",
      },
    ],
    name: "excludeFromFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressToExclude",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isExcluded",
        type: "bool",
      },
    ],
    name: "excludeFromMaxTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isExcludedFromFees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limitsInEffect",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTransactionAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWallet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "buyFees_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sellFees_",
        type: "uint256",
      },
    ],
    name: "reduceFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revshareAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardSplitter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sellFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setAutomatedMarketMakerPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapTokensAtAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tradingActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV2Pair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV2Router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardSplitter_",
        type: "address",
      },
      {
        internalType: "address",
        name: "devWallet_",
        type: "address",
      },
      {
        internalType: "address",
        name: "lpWallet_",
        type: "address",
      },
    ],
    name: "updateFeeWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60406080815234620004cd5762000015620004d2565b60206413595bdddb60da1b818301526200002e620004d2565b64135153d5d360da1b82820152825192906001600160401b03808511620003cd5760038054956001948588811c98168015620004c2575b87891014620004ac578190601f9889811162000456575b508790898311600114620003ef57600092620003e3575b505060001982841b1c191690851b1781555b8251918211620003cd5760049283548581811c91168015620003c2575b87821014620003ad579081888594931162000355575b508690888411600114620002ea57600093620002de575b505082851b92600019911b1c19161781555b60058054336001600160a01b0319821681179092556001600160a01b03919082167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36a0c685fa11e01ec6f0000009283600955691fc3842bd1f071c0000080600a5569032d26d12e980b600000600b55600c558062ffffff19600d541617600d556032600e556032600f55602860105560146011556028601255620001a9620004f6565b3360005260158552866000209060ff19918183825416179055620001cc620004f6565b30600052601586528760002081838254161790558260055416620001ef620004f6565b600052601686528760002081838254161790556200020c620004f6565b30600052601686528760002091825416179055600554169384156200029c57506002549082820180921162000287575060025560008381528083528481208054830190558451918252917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a351611c679081620005508239f35b601190634e487b7160e01b6000525260246000fd5b855162461bcd60e51b815291820184905260248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260649150fd5b015191503880620000ef565b9190869450601f1984169286600052886000209360005b8a8282106200033e575050851162000323575b50505050811b01815562000101565b01519060f884600019921b161c191690553880808062000314565b8385015187558a9890960195938401930162000301565b9091925084600052866000208880860160051c820192898710620003a3575b91889187969594930160051c01915b82811062000393575050620000d8565b6000815586955088910162000383565b9250819262000374565b602285634e487b7160e01b6000525260246000fd5b90607f1690620000c2565b634e487b7160e01b600052604160045260246000fd5b01519050388062000093565b90879350601f1983169185600052896000209260005b8b8282106200043f575050841162000426575b505050811b018155620000a5565b015160001983861b60f8161c1916905538808062000418565b8385015186558b9790950194938401930162000405565b90915083600052876000208980850160051c8201928a8610620004a2575b918991869594930160051c01915b828110620004925750506200007c565b6000815585945089910162000482565b9250819262000474565b634e487b7160e01b600052602260045260246000fd5b97607f169762000065565b600080fd5b60408051919082016001600160401b03811183821017620003cd5760405260058252565b6005546001600160a01b031633036200050b57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfe6080604081815260049182361015610022575b505050361561002057600080fd5b005b600092833560e01c918263055f812614610fcf5750816306fdde0314610eda578163095ea7b314610eb057816310d5de5314610e725781631694505e14610e4957816318160ddd14610e2a57816323b872dd14610d605781632b34596414610d41578163313ce56714610d255781633950935114610cd557816349bd5a5e14610cac5781634a62bb6514610c885781634fbee19314610c4a5781636303516c14610c2157816365dc7ef414610c025781636ddd171314610bdb5781636ef91c7714610bbc57816370a0823114610b85578163715018a614610b28578163751039fc14610af85781637571336a14610ab85781638a8c523c14610a8b5781638da5cb5b14610a625781638ea5220f14610a3957816395d89b41146109365781639a7a23d6146108a25781639e78fb4f146106d2578163a08fc5c714610652578163a457c2d7146105aa578163a5396c791461047f578163a9059cbb1461044e578163b62496f514610410578163bbc0c742146103e9578163c0246668146103a6578163c8c8ebe414610387578163dd62ed3e1461033e578163e0f3ccf51461031f578163e2f4560514610300578163e4748b9e146102e1578163f2fde38b14610216575063f8b45b05146101f55780610012565b34610212578160031936011261021257602090600c549051908152f35b5080fd5b9050346102dd5760203660031901126102dd5761023161103d565b9061023a61109d565b6001600160a01b0391821692831561028b575050600554826001600160601b0360a01b821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b505034610212578160031936011261021257602090600e549051908152f35b505034610212578160031936011261021257602090600b549051908152f35b505034610212578160031936011261021257602090600f549051908152f35b5050346102125780600319360112610212578060209261035c61103d565b610364611058565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b505034610212578160031936011261021257602090600a549051908152f35b505034610212576103e6906103ba3661106e565b91906103c461109d565b60018060a01b03168452601560205283209060ff801983541691151516179055565b80f35b50503461021257816003193601126102125760209060ff600d5460081c1690519015158152f35b5050346102125760203660031901126102125760209160ff9082906001600160a01b0361043b61103d565b1681526017855220541690519015158152f35b50503461021257806003193601126102125760209061047861046e61103d565b6024359033611372565b5160018152f35b5050346102125760603660031901126102125761049a61103d565b6104a2611058565b6001600160a01b039160443583811691908290036105a65783906104c461109d565b816001600160601b0360a01b941684600754161760075516918281600654161760065560085416176008556104f761109d565b83526020916015835260168185209360019360ff19958587825416179055806007541661052261109d565b8752601582528387208587825416179055806008541661054061109d565b8752601582528387208587825416179055806006541661055e61109d565b87528282528387208587825416179055806007541661057b61109d565b875282825283872085878254161790556008541661059761109d565b86525283209182541617905580f35b8580fd5b9050823461064f578260031936011261064f576105c561103d565b918360243592338152600160205281812060018060a01b03861682526020522054908282106105fe576020856104788585038733611150565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b9050346102dd57816003193601126102dd578035906024359261067361109d565b600e54831115806106c6575b1561068f575050600e55600f5580f35b906020606492519162461bcd60e51b835282015260116024820152704d454f574c2f5245445543455f4f4e4c5960781b6044820152fd5b50600f5484111561067f565b919050346102dd57826003193601126102dd576106ed61109d565b737a250d5630b4cf539739df2c5dacb4c659f2488d916001600160601b0360a01b928084601354161760135561072161109d565b8452602090601682528285209360ff199460018682541617905560018060a01b039161075583601354166002549030611150565b601354855163c45a015560e01b8152908416918886838381875afa9283156108775787908294610883575b5088516315ab88c960e31b815293948490849082905afa928315610877579181878096948a96610857575b50604493948b5197889687956364e329cb60e11b87523090870152166024850152165af190811561084d5791836017949260019796948a91610820575b5016809160145416176014556107fc61109d565b87526016825283872085878254161790556014541686525283209182541617905580f35b6108409150853d8711610846575b61083881836110f5565b810190611252565b386107e8565b503d61082e565b85513d89823e3d90fd5b6044945061087190873d89116108465761083881836110f5565b936107ab565b508751903d90823e3d90fd5b83945061089c90823d84116108465761083881836110f5565b93610780565b83915034610212576108b33661106e565b916108bc61109d565b6014546001600160a01b03928316921682146108f357509282936103e69352601760205283209060ff801983541691151516179055565b606490602086519162461bcd60e51b8352820152601760248201527f4d454f574c2f43414e545f52454d4f56455f554e4956320000000000000000006044820152fd5b838334610212578160031936011261021257805191809380549160019083821c92828516948515610a2f575b6020958686108114610a1c578589529081156109f857506001146109a0575b61099c8787610992828c03836110f5565b5191829182610ff4565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106109e5575050508261099c9461099292820101948680610981565b80548685018801529286019281016109c7565b60ff19168887015250505050151560051b83010192506109928261099c8680610981565b634e487b7160e01b845260228352602484fd5b93607f1693610962565b50503461021257816003193601126102125760075490516001600160a01b039091168152602090f35b50503461021257816003193601126102125760055490516001600160a01b039091168152602090f35b833461064f578060031936011261064f57610aa461109d565b6201010062ffff0019600d541617600d5580f35b505034610212576103e690610acc3661106e565b9190610ad661109d565b60018060a01b03168452601660205283209060ff801983541691151516179055565b833461064f578060031936011261064f57610b1161109d565b6005600e556005600f5560ff19600d5416600d5580f35b833461064f578060031936011261064f57610b4161109d565b600580546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5050346102125760203660031901126102125760209181906001600160a01b03610bad61103d565b16815280845220549051908152f35b5050346102125781600319360112610212576020906010549051908152f35b50503461021257816003193601126102125760209060ff600d5460101c1690519015158152f35b5050346102125781600319360112610212576020906011549051908152f35b50503461021257816003193601126102125760085490516001600160a01b039091168152602090f35b5050346102125760203660031901126102125760209160ff9082906001600160a01b03610c7561103d565b1681526015855220541690519015158152f35b50503461021257816003193601126102125760209060ff600d541690519015158152f35b50503461021257816003193601126102125760145490516001600160a01b039091168152602090f35b505034610212578060031936011261021257610478602092610d1e610cf861103d565b338352600186528483206001600160a01b0382168452865291849020546024359061112d565b9033611150565b5050346102125781600319360112610212576020905160128152f35b5050346102125781600319360112610212576020906012549051908152f35b8391503461021257606036600319011261021257610d7c61103d565b610d84611058565b91846044359460018060a01b038416815260016020528181203382526020522054906000198203610dbe575b602086610478878787611372565b848210610de75750918391610ddc6020969561047895033383611150565b919394819350610db0565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346102125781600319360112610212576020906002549051908152f35b50503461021257816003193601126102125760135490516001600160a01b039091168152602090f35b5050346102125760203660031901126102125760209160ff9082906001600160a01b03610e9d61103d565b1681526016855220541690519015158152f35b505034610212578060031936011261021257602090610478610ed061103d565b6024359033611150565b919050346102dd57826003193601126102dd57805191836003549060019082821c928281168015610fc5575b6020958686108214610fb25750848852908115610f905750600114610f37575b61099c8686610992828b03836110f5565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610f7d575050508261099c94610992928201019438610f26565b8054868501880152928601928101610f60565b60ff191687860152505050151560051b83010192506109928261099c38610f26565b634e487b7160e01b845260229052602483fd5b93607f1693610f06565b8490346102125781600319360112610212576006546001600160a01b03168152602090f35b6020808252825181830181905290939260005b82811061102957505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611007565b600435906001600160a01b038216820361105357565b600080fd5b602435906001600160a01b038216820361105357565b6040906003190112611053576004356001600160a01b0381168103611053579060243580151581036110535790565b6005546001600160a01b031633036110b157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff82111761111757604052565b634e487b7160e01b600052604160045260246000fd5b9190820180921161113a57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0390811691821561120157169182156111b15760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9081602091031261105357516001600160a01b03811681036110535790565b1561127857565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b156112d257565b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b1561132a57565b60405162461bcd60e51b815260206004820152601360248201527213585e081dd85b1b195d08195e18d959591959606a1b6044820152606490fd5b9190820391821161113a57565b9291906001600160a01b038085169061138c821515611271565b808316908115159061139d826112cb565b851561180857600d5460ff9283809381841661157e575b50505060101c168061156f575b80611557575b8061153f575b80611527575b6114fd575b8060055460a01c16159260009281845260156020528260408520541680156114ed575b6114e4575b8394611418575b5050505050611416929361185f565b565b8398969852601760205281604084205416806114d9575b1561148f575050600f5486810292508683040361147b57506114169394606461145f9204905b8161146b57611365565b91939238808080611407565b61147682308761185f565b611365565b634e487b7160e01b81526011600452602490fd5b8252604082205416806114ce575b6114b1575b5061145f906114169495611455565b600e5486810292508683040361147b5750606490046114166114a2565b50600e54151561149d565b50600f54151561142f565b93508293611400565b50808452826040852054166113fb565b6005805460ff60a01b19908116600160a01b1790915561151b611973565b600554166005556113d8565b508160005260156020528060406000205416156113d3565b508260005260156020528060406000205416156113cd565b508260005260176020528060406000205416156113c7565b508060055460a01c16156113c1565b600554908116928389141593846117fd575b50836117f5575b50826117e8575b826117da575b50506115b3575b3882816113b4565b908160081c1615611767575b6000848152602090601782526040918480848420541680611751575b156116725750600a548911611611578493928280611602938961160c96525220548961112d565b600c541015611323565b6115ab565b60849083519062461bcd60e51b82526004820152603560248201527f427579207472616e7366657220616d6f756e742065786365656473207468652060448201527436b0bc2a3930b739b0b1ba34b7b720b6b7bab73a1760591b6064820152fd5b909291868152601784528183822054168061173d575b15611703575050600a5488116116a157505081906115ab565b60849250519062461bcd60e51b82526004820152603660248201527f53656c6c207472616e7366657220616d6f756e742065786365656473207468656044820152751036b0bc2a3930b739b0b1ba34b7b720b6b7bab73a1760511b6064820152fd5b91868395949295526016825284818420541615611723575b5050506115ab565b8261173593611602935220548961112d565b38808061171b565b508781526016845281838220541615611688565b50508582526016815284808484205416156115db565b836000526015602052816040600020541680156117c8575b6115bf5760405162461bcd60e51b815260206004820152601b60248201527f54726164696e67206973206e6f7420656e61626c6564207965742e00000000006044820152606490fd5b5082600052816040600020541661177f565b60a01c1615905082386115a4565b61dead871415925061159e565b925038611597565b881415935038611590565b60405162461bcd60e51b815260206004820152602960248201527f5472616e7366657220616d6f756e74206d7573742062652067726561746572206044820152687468616e207a65726f60b81b6064820152608490fd5b6001600160a01b0390811691611876831515611271565b16916118838315156112cb565b6000828152806020526040812054918083106118df57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b3d1561196e573d9067ffffffffffffffff82116111175760405191611962601f8201601f1916602001846110f5565b82523d6000602084013e565b606090565b600030815260208181526040908183205492831561199757600b548094101561199d575b50505050565b825167ffffffffffffffff916060820183811183821017611c1d578552600282528382019185368437805115611c095730835260135486516315ab88c960e31b81526001600160a01b03956004959092871688838881845afa928315611bff578693611be0575b50845192600193841015611bcd57611a2491898d92168c88015230611150565b866013541691823b156105a657895163791ac94760e01b81528781018c90526024810187905260a06044820152945160a4860181905286938693909260c4850192865b8d828210611bb25750505050508383809230606483015242608483015203925af18015611ba857611b86575b505090479260105480850285159186820414821715611b735760649004926011549182870292878404141715611b605750928080848194828080807fe9f689eb4d290dd3a40869ea626055ee4a55d40f20286208d04ef55f39254cff9f9d9b9a60609f9d9b8280808f611b1590611b0f6064849704809861112d565b90611365565b9a8a600654165af150611b26611933565b5085600854165af150611b37611933565b50600754165af191611b47611933565b508351948552840152151590820152a138808080611997565b634e487b7160e01b855260119052602484fd5b634e487b7160e01b855260118452602485fd5b8111611b955785523880611a93565b506041602492634e487b7160e01b835252fd5b87513d85823e3d90fd5b84518e1686528b98508a975094850194909301928201611a67565b634e487b7160e01b875260328852602487fd5b611bf8919350893d8b116108465761083881836110f5565b9138611a04565b8a513d88823e3d90fd5b634e487b7160e01b82526032600452602482fd5b634e487b7160e01b82526041600452602482fdfea2646970667358221220a711ba49148e7f8dd65a4d6bdf842156e6e0f9a9a7121153375997a010bfe2b064736f6c63430008130033";

type MeowlConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MeowlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Meowl__factory extends ContractFactory {
  constructor(...args: MeowlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Meowl> {
    return super.deploy(overrides || {}) as Promise<Meowl>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Meowl {
    return super.attach(address) as Meowl;
  }
  override connect(signer: Signer): Meowl__factory {
    return super.connect(signer) as Meowl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MeowlInterface {
    return new utils.Interface(_abi) as MeowlInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Meowl {
    return new Contract(address, _abi, signerOrProvider) as Meowl;
  }
}
