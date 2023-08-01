import { ethers } from "hardhat";
import { VESTING_PERIOD_DURATION, VESTING_SCHEDULE, VESTING_PERIOD_DURATION_SHORT } from "../contracts/utils/config";

async function main() {
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

  const MeowlFactory = await ethers.getContractFactory("Meowl");
  const meowl = await MeowlFactory.deploy();
  await meowl.deployed();

  console.log(
    `meowl token deployed: ${meowl.address}`
  );

  const VMeowlFactory = await ethers.getContractFactory("VestedMeowl");

  const vmeowlContributor = await VMeowlFactory.deploy(meowl.address, VESTING_SCHEDULE, VESTING_PERIOD_DURATION);
  await vmeowlContributor.deployed();

  const vmeowlPrivate = await VMeowlFactory.deploy(meowl.address, VESTING_SCHEDULE, VESTING_PERIOD_DURATION_SHORT);
  await vmeowlPrivate.deployed();

  console.log(
    `vmeowlContributor deployed: ${vmeowlContributor.address}`
  );

  console.log(
    `vmeowlPrivate deployed: ${vmeowlPrivate.address}`
  );

  // // CO - 1mo
  const xfer = await meowl.transfer(vmeowlContributor.address, ethers.utils.parseEther('3000000'))
  await xfer.wait(1)

  // // PS 1 - 1mo
  const xfer2 = await meowl.transfer(vmeowlContributor.address, ethers.utils.parseEther('562500'))
  await xfer2.wait(1)

  // // PS 2 - 1we
  const xfer3 = await meowl.transfer(vmeowlPrivate.address, ethers.utils.parseEther('609375'))
  await xfer3.wait(1)

  const RewardSplitterFactory = await ethers.getContractFactory("RewardSplitter")
  const rewardSplitter = await RewardSplitterFactory.deploy(WETH)
  await rewardSplitter.deployed()

  console.log(
    `rewardSplitter deployed: ${rewardSplitter.address}`
  );

  const LP_WALLET = '0x24F5bE25cC59079347CF7faE2562bc9BBD44b890'

  const TREASURY = '0x842618c3f6E3E12edc5F02CC17561293e10CEb7d'

  // // LP
  const xfer4 = await meowl.transfer(LP_WALLET, ethers.utils.parseEther('6562500'))
  await xfer4.wait(1)

  // // CT
  const xfer5 = await meowl.transfer(TREASURY, ethers.utils.parseEther('3750000'))
  await xfer5.wait(1)

  // // PS TGE TO SPLIT
  const xfer6 = await meowl.transfer("0x2738d37ffbc86561f54096E08FEBdB27640c5702", ethers.utils.parseEther('515625'))
  await xfer6.wait(1)

  const contributorMintAccounts = [
    TREASURY,
    "0x22892d4D59b28C530d58932504B666388c125566",
    "0xb49b9e5C9c431E48e6A59A3E5fFc79Cd461Eb309",
    "0xc27FD9D5113dE19EA89D0265Be9FD93F35f052c8",
    "0x00285869437a33a652c817c143A3029313FD5794",
    "0xCB9f4732E299973862494ac17F6B4f306cED30f6",
    "0x046f973560200579c0a6A11757D370bec5151bd1",
    "0x50045A6BD706ea7231eec17Ee5a02483C687BA1A",
    "0xD5dE60F2Aec5a07d3266bFbE270b6ea101C2F2A0",
    "0x1E4c54394FFb1f062B0EC8bfbfcFE20C04096e56",
    "0x268E8eF615670b275418D2787521aD27A4C9c310",
    "0x09c000E6C6Dd290C8e811141FeeA462511f00797",
    "0x573cB2F1d47753C7Ea15747F751fB658Db550353",
    "0xC69903deB10e88305d2A22C1405fA19c3fb07046",
    "0x3B77e9A14EDcc6f15Bea29a25824ec64e4BF5D19",
    "0x8dE623F6B20C8F9bB72721b0Cd98078c1aea46B5"
  ]

  const contributorMintAmounts = [
    ethers.utils.parseEther("3000000"),
    ethers.utils.parseEther("112500"),
    ethers.utils.parseEther("45000"),
    ethers.utils.parseEther("45000"),
    ethers.utils.parseEther("45000"),
    ethers.utils.parseEther("45000"),
    ethers.utils.parseEther("45000"),
    ethers.utils.parseEther("45000"),
    ethers.utils.parseEther("45000"),
    ethers.utils.parseEther("27000"),
    ethers.utils.parseEther("22500"),
    ethers.utils.parseEther("22500"),
    ethers.utils.parseEther("22500"),
    ethers.utils.parseEther("13500"),
    ethers.utils.parseEther("13500"),
    ethers.utils.parseEther("13500")
  ]

  const mint1 = await vmeowlContributor.multiMint(contributorMintAccounts, contributorMintAmounts)
  await mint1.wait(1)

  const presaleMintAccounts1 = [
    "0x18BDdde8cd7998cc0533A790eb3a18B71BABcdeb",
    "0x00DF079BD91AB052E97843181d5f5404d0780c22",
    "0x7452e7D530078dbd6a2Ed65007BEA00A4D60F138",
    "0x292B20ce0045a6267A90B75d03384FF9016ba9eB",
    "0xa052B5C9e9D89f911009A3D72C1E6f162562B025",
    "0xf7586ef1426ccbf4e818f7391b4960e8898ab980",
    "0x9D20B912e8F66486CDf9cE02c20647C7153d65E5",
    "0x23A8CE2b970744471673E0435d54A869B158Cc41",
    "0x2A3a28E08Db8C5F99Db1Ae85aDDFd9d4421c4466",
    "0x3837BEd4055a7E0d9B1F180F038786e2E6055d8b",
    "0x3Bc52C09bccbaab531440860Ea8A1212Bf2F2177",
    "0xF5c095f96cd21E23C4348F87C44772B3e8803B67",
    "0xD431E6bBC9395d3264Ac646c7cc32De906eA7EDF",
    "0x750Ab0E1CD858CA57a0CD80b654b2970178AE7C3",
    "0xc6c8bA8E9A360AA5c95C294dBEa7C55f196131aa",
    "0xf8FeA0bA658aCAEf401566C9CC6f84fFaB6fCD70",
    "0xb614F0e24BE21044fB0Ee630E3dFBaE20b0B0c95",
    "0xC8F50F914964B7085Fc4e59D56232B910f084167",
    "0x3B7B40300b7F9ea7480c432B1D34C7211560329E",
    "0x18BDdde8cd7998cc0533A790eb3a18B71BABcdeb",
    "0x468f4C726c5da2f8fb97C483c56d7703c18545D6",
    "0xf8FeA0bA658aCAEf401566C9CC6f84fFaB6fCD70",
    "0x3Bc52C09bccbaab531440860Ea8A1212Bf2F2177",
    "0x0f3f647e19ddf45d1a963527db2af07c8175db20",
    "0xc6c8bA8E9A360AA5c95C294dBEa7C55f196131aa",
    "0x750Ab0E1CD858CA57a0CD80b654b2970178AE7C3",
  ]

  const presaleMintAmounts1 = [
    ethers.utils.parseEther("14402.77"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.61"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("14402.62"),
    ethers.utils.parseEther("6175.00"),
    ethers.utils.parseEther("6175.00"),
    ethers.utils.parseEther("6175.00"),
    ethers.utils.parseEther("6175.00"),
    ethers.utils.parseEther("6175.00"),
    ethers.utils.parseEther("6175.00"),
    ethers.utils.parseEther("6175.00"),
  ]

  const mint2 = await vmeowlPrivate.multiMint(presaleMintAccounts1, presaleMintAmounts1)
  await mint2.wait(1)

  const presaleMintAccounts2 = [
    "0xf559D601a39D34554f29f107A395162833705b30",
    "0x8e29d0e2ca8e92a9f27192616e2e9f170fd2a035",
    "0x088Ea263CecA426b3E5ab2Bb215021Ae61b143c1",
    "0x1562e5a92cAB6797738ED9953429f29d4978C9F6",
    "0x823Ef24EA90E3A04b79b9043C1d49Ad6EE3C634e",
    "0xe1962863bA74B1d166A106a4319e4C93a6F685bf",
    "0xCf0e8537880BbaD653e6522621aECd285e32577d",
    "0x1ba6B82641C77aB1Fc7Bc734C5C3628199A8967D",
    "0xF7b3e7E00F7b6D0e259Ffb82F2D5A130dFd021f1",
    "0x92eDd484281D38DF1DcA9c161CFCb0340Fc67b76",
    "0x983Ea4614cE696A312D918dE754fE2b9d6e08839",
    "0x6168623167941FF760306497960E90bd5f214d52",
    "0xaac84e8df34f86edeafe037826c0d4a833237013",
    "0xac08eeb1853ca05810c0843b722f1ad6d64270a5",
    "0xc1c00Ea6db4489e4680242E5fCBa6104380E7906",
    "0xF3200191b1b6344bfBEF5F4B6e73Bb47E2C1B8b5",
    "0x54cD47C2f0FB09C468E15344fd68c54272D57246",
    "0xCC92d0bE1b1919D23cfd291B88153C31b2Bc193B",
    "0x49C48C8407Cd71944C12258244e44B53FC8e57A5",
    "0x0f3f647e19ddf45d1a963527db2af07c8175db20",
    "0x83bfe1c10c97221663c8351a26cf56017b426f4a",
    "0xFee68D6314780974b77c721919755E71673c6E70",
    "0x9586d60e8558077438abf7597dbba9137194c7d7",
    "0x0B10D1a2436295b40c8B0336e1dD4109a0607790",
    "0xddbe58cC182DAd04e7558Aa94Fa902b420FeEb58",
    "0x871ff7CA8658b88578D50A227f06DAbB3f012ea9",
    "0xB39a1c8933E67eD4Dc65ba37035eF477B3423374",
    "0x58A3C2F70925d7414b6273531b25da49DFA273d5",
    "0xcaa3ad724d0fa3b0df4030d4262cb25abf2b65ac",
    "0xf41cb72f1bb31beaF732fE6e7b96d7513E2E110F",
    "0xEDBcE099A5EF635611A1EDA3794B47fE4c8a94d6"
  ]

  const presaleMintAmounts2 = [
    ethers.utils.parseEther("8125.00"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67")
  ]

  const mint3 = await vmeowlPrivate.multiMint(presaleMintAccounts2, presaleMintAmounts2)
  await mint3.wait(1)

  const presaleMintAccounts3 = [
    "0x6BB47D2CeAdd30e859AF5B80BF863794998b6b00",
    "0xBbBa2190A1a7c8F39D745dBEfa0d7B6e0db6f2cb",
    "0xEE61F6c495c40afE59a656802fdb5D66020a22a6",
    "0x8Cfa8Dd7BD8a1316f145c52D842C09EaC212F642",
    "0x815237E10eE00533729dd9fADB1Ef454ACE6d797",
    "0xbdd2f685561afd5ab9fb70a60d0a867c59c82ba0",
    "0xF8a18B57FF23c39D0198eDb37EfC59CA4D707cFD",
    "0x6090e06fd7b337db4e2443f08146c3df4263bf37",
    "0x5962a65d9faeab29f47971273f1d34c1b23f95c6",
    "0x6ca81ba804430c82a7be978E57c550a0b701D776",
    "0x29eB182B934780bB25C4656268Df4C919225E707",
    "0x4eC3B52C788f58a6f273F33e4cbC38ae2cBfE6C8",
    "0xd93B094FB09c175c124adB70b09d06fEe12d20d7",
    "0xa53a7E1e00b0bBfdD58A21449e2fE606F58B9FAE",
    "0x7152275089DDbc2704D31C5A7B70ffb0eFf949a7",
    "0xf2e81ce56890a9707156401e446046d8e6849584",
    "0xBCE319103d26A025672E4d71B43fc0Bc4f4ae85B",
    "0xa8da5912db11c6caa2762473f0b5d3dba6aff992",
  ]

  const presaleMintAmounts3 = [
    ethers.utils.parseEther("13541.67"),
    ethers.utils.parseEther("21666.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
    ethers.utils.parseEther("5416.67"),
  ]

  const mint4 = await vmeowlPrivate.multiMint(presaleMintAccounts3, presaleMintAmounts3)
  await mint4.wait(1)

  const update = await meowl.updateFeeWallet(rewardSplitter.address, TREASURY, LP_WALLET)
  await update.wait(1)

  const create = await meowl.createPair()
  await create.wait(1)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
