/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FeeSharingSystem,
  FeeSharingSystemInterface,
} from "../../contracts/FeeSharingSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsDistribution",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "RewardsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardForDuration",
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
    name: "lastTimeRewardApplicable",
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
    name: "lastUpdateTime",
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
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "paused",
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
    name: "periodFinish",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
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
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
    name: "rewardsDistribution",
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
    name: "rewardsDuration",
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
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_rewardsDistribution",
        type: "address",
      },
    ],
    name: "setRewardsDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256",
      },
    ],
    name: "setRewardsDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461010357601f6114ce38819003918201601f19168301916001600160401b0383118484101761010857808492606094604052833981010312610103576100478161011e565b9061006060406100596020840161011e565b920161011e565b60008054604051946001600160a01b039390928492338482167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08480a36001600160a81b0319163360ff60a01b191617815560018055600481905560055562093a80600655600280546001600160a01b031990811696841696909617905560038054861691909216179055600d8054909316911617905561139b90816101338239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101035756fe6040608081526004908136101561001557600080fd5b600091823560e01c80628cc26214610e885780630700037d14610e5057806318160ddd14610e315780631976214314610dec5780631c1f78eb14610dc85780632e1a7d4d14610cc2578063386a952514610ca35780633c6b16ab14610aa85780633d18b912146109e25780633fc6df6e146109b95780635c975abb1461099457806370a082311461095c578063715018a6146108ff57806372f702f3146108d65780637b0a47ee146108b757806380faa57d1461089a5780638980f11f146107b15780638b876347146107795780638da5cb5b14610751578063a694fc3a1461059b578063c8f33c911461057c578063cc1a378f14610495578063cd3daf9d14610471578063d1af0c7d14610448578063df136d6514610425578063e9fad8ee14610236578063ebe2b12b146102195763f2fde38b1461015457600080fd5b346102155760203660031901126102155761016d610eae565b90610176610ec9565b6001600160a01b039182169283156101c357505082546001600160a01b0319811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b503461021557826003193601126102155760209250549051908152f35b50346102155782600319360112610215573383526020600c8152828420549161025d611070565b610265610f36565b600855610270610f21565b6007553315159081610401575b83156103ca57600b548481039081116103b757600b55338652600c835284862054908482039182116103a45750338652600c83528486205560018060a01b03926102cc81338660035416611322565b84519081527f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5833392a260018055610302611070565b61030a610f36565b600855610315610f21565b600755610380575b338452600a815282842092848454948561033a575b506001805580f35b7fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e04869461036e92879255339060025416611322565b519283523392a2388080808481610332565b61038933610fe3565b338552600a825283852055600854600982528385205561031d565b634e487b7160e01b875260119052602486fd5b634e487b7160e01b875260118252602487fd5b845162461bcd60e51b81529081018390526011602482015270043616e6e6f74207769746864726177203607c1b6044820152606490fd5b61040a33610fe3565b338752600a845285872055600854600984528587205561027d565b5050346104445781600319360112610444576020906008549051908152f35b5080fd5b50503461044457816003193601126104445760025490516001600160a01b039091168152602090f35b50503461044457816003193601126104445760209061048e610f36565b9051908152f35b509034610215576020366003190112610215578135916104b3610ec9565b80544211156104ee5750816020917ffb46ca5a5e06d4540d6387b930a7c978bce0db5f449ec6b3f5d07c6e1d44f2d39360065551908152a180f35b602060a492519162461bcd60e51b8352820152605860248201527f50726576696f7573207265776172647320706572696f64206d7573742062652060448201527f636f6d706c657465206265666f7265206368616e67696e67207468652064757260648201527f6174696f6e20666f7220746865206e657720706572696f6400000000000000006084820152fd5b5050346104445781600319360112610444576020906007549051908152f35b5091903461044457602080600319360112610215578335916105bb611070565b60ff845460a01c1661071b576105cf610f36565b6008556105da610f21565b600755336106f7575b82156106c357600b548381018091116106b057600b55338452600c8252808420548381018091116106b057338552600c83528185205560018060a01b03600354168151906323b872dd60e01b848301523360248301523060448301528460648301526064825260a0820182811067ffffffffffffffff82111761069d5783527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d93929161068f916110fe565b519283523392a26001805580f35b634e487b7160e01b875260418852602487fd5b634e487b7160e01b855260118652602485fd5b5162461bcd60e51b815280850191909152600e60248201526d043616e6e6f74207374616b6520360941b6044820152606490fd5b61070033610fe3565b338552600a83528185205560085460098352818520556105e3565b5162461bcd60e51b815280850191909152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b505034610444578160031936011261044457905490516001600160a01b039091168152602090f35b5050346104445760203660031901126104445760209181906001600160a01b036107a1610eae565b1681526009845220549051908152f35b508290346104445782600319360112610444576107cc610eae565b602435916107d8610ec9565b6003546001600160a01b038381169290918216831461084d575094610827846108479387987f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa2898541690611322565b516001600160a01b03909216825260208201929092529081906040820190565b0390a180f35b608490602088519162461bcd60e51b8352820152602160248201527f43616e6e6f7420776974686472617720746865207374616b696e6720746f6b656044820152603760f91b6064820152fd5b50503461044457816003193601126104445760209061048e610f21565b5050346104445781600319360112610444576020906005549051908152f35b50503461044457816003193601126104445760035490516001600160a01b039091168152602090f35b8334610959578060031936011261095957610918610ec9565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b5050346104445760203660031901126104445760209181906001600160a01b03610984610eae565b168152600c845220549051908152f35b50503461044457816003193601126104445760ff6020925460a01c1690519015158152f35b505034610444578160031936011261044457600d5490516001600160a01b039091168152602090f35b5050346104445781600319360112610444576109fc611070565b610a04610f36565b600855610a0f610f21565b60075533610a82575b338252600a602052808220908282549283610a3557506001805580f35b55600254610a4f90839033906001600160a01b0316611322565b519081527fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e048660203392a238808281610332565b610a8b33610fe3565b338352600a60205281832055600854600960205281832055610a18565b50919034610444576020908160031936011261021557600d54843591906001600160a01b039081163303610c4d57610ade610f36565b600855610ae9610f21565b60075585548490428111610c015750602491610b0760065486610fc3565b6005555b600254168351928380926370a0823160e01b8252308b8301525afa908115610bf7578591610bc6575b50600554610b456006548093610fc3565b10610b83574260075542018042116106b0577fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d94955551908152a180f35b815162461bcd60e51b8152808701859052601860248201527f50726f76696465642072657761726420746f6f206869676800000000000000006044820152606490fd5b90508381813d8311610bf0575b610bdd81836110c6565b81010312610bec575138610b34565b8480fd5b503d610bd3565b82513d87823e3d90fd5b42810391508111610c3a57600554610c1891610fb0565b8301808411610c3a57602491610c32869260065490610fc3565b600555610b0b565b634e487b7160e01b865260118752602486fd5b815162461bcd60e51b8152808701859052602a60248201527f43616c6c6572206973206e6f742052657761726473446973747269627574696f6044820152691b8818dbdb9d1c9858dd60b21b6064820152608490fd5b5050346104445781600319360112610444576020906006549051908152f35b509190346104445760208060031936011261021557833591610ce2611070565b610cea610f36565b600855610cf5610f21565b60075533610da4575b8215610d6d57600b548381039081116106b057600b55338452600c8252808420548381039081116106b057907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d59291338652600c83528186205561068f843360018060a01b0360035416611322565b5162461bcd60e51b8152808501919091526011602482015270043616e6e6f74207769746864726177203607c1b6044820152606490fd5b610dad33610fe3565b338552600a8352818520556008546009835281852055610cfe565b50503461044457816003193601126104445760209061048e60055460065490610fb0565b833461095957602036600319011261095957610e06610eae565b610e0e610ec9565b60018060a01b03166bffffffffffffffffffffffff60a01b600d541617600d5580f35b505034610444578160031936011261044457602090600b549051908152f35b5050346104445760203660031901126104445760209181906001600160a01b03610e78610eae565b168152600a845220549051908152f35b5050346104445760203660031901126104445760209061048e610ea9610eae565b610fe3565b600435906001600160a01b0382168203610ec457565b600080fd5b6000546001600160a01b03163303610edd57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b600454804210600014610f3357504290565b90565b600b548015610fa95760085490610f4b610f21565b6007548103908111610f9357600554610f6391610fb0565b90670de0b6b3a764000091828102928184041490151715610f9357610f8791610fc3565b8101809111610f935790565b634e487b7160e01b600052601160045260246000fd5b5060085490565b81810292918115918404141715610f9357565b8115610fcd570490565b634e487b7160e01b600052601260045260246000fd5b6001600160a01b03166000818152600c6020526040812054611003610f36565b9083835260096020526040832054820391821161105c57670de0b6b3a76400009161102d91610fb0565b04918152600a60205260408120548201809211611048575090565b634e487b7160e01b81526011600452602490fd5b634e487b7160e01b83526011600452602483fd5b600260015414611081576002600155565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b90601f8019910116810190811067ffffffffffffffff8211176110e857604052565b634e487b7160e01b600052604160045260246000fd5b60018060a01b0316906040516040810167ffffffffffffffff90828110828211176110e8576040526020938483527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858401526000808587829751910182855af1903d15611243573d92831161122f57906111999392916040519261118c88601f19601f84011601856110c6565b83523d868885013e61124e565b80519182159184831561120b575b5050509050156111b45750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b919381809450010312610444578201519081151582036109595750803880846111a7565b634e487b7160e01b85526041600452602485fd5b906111999392506060915b919290156112b05750815115611262575090565b3b1561126b5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156112c35750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b828510611309575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506112e6565b60405163a9059cbb60e01b60208201526001600160a01b039290921660248301526044808301939093529181526113639161135e6064836110c6565b6110fe565b56fea26469706673582212208f00fdfb34fafcc4821dc9727cfc04885d863e332747cf13ef96c8bfa812880564736f6c63430008130033";

type FeeSharingSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeSharingSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeSharingSystem__factory extends ContractFactory {
  constructor(...args: FeeSharingSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rewardsDistribution: PromiseOrValue<string>,
    _rewardsToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeSharingSystem> {
    return super.deploy(
      _rewardsDistribution,
      _rewardsToken,
      _stakingToken,
      overrides || {}
    ) as Promise<FeeSharingSystem>;
  }
  override getDeployTransaction(
    _rewardsDistribution: PromiseOrValue<string>,
    _rewardsToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardsDistribution,
      _rewardsToken,
      _stakingToken,
      overrides || {}
    );
  }
  override attach(address: string): FeeSharingSystem {
    return super.attach(address) as FeeSharingSystem;
  }
  override connect(signer: Signer): FeeSharingSystem__factory {
    return super.connect(signer) as FeeSharingSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeSharingSystemInterface {
    return new utils.Interface(_abi) as FeeSharingSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeSharingSystem {
    return new Contract(address, _abi, signerOrProvider) as FeeSharingSystem;
  }
}
