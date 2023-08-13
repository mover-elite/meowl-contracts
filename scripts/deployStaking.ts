import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Define the addresses for FeeSharingSystem
    const rewardsDistributionAddress = deployer.address;
    const rewardsTokenAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const MEOWL = "0x1f1f26c966f483997728bed0f9814938b2b5e294";
    const vMEOWL = "0x86ab436ef4ab3269cfa55789c917613da44044e5"

    // Deploy FeeSharingSystem
    const FeeSharingSystem = await ethers.getContractFactory("FeeSharingSystem");
    const feeSharingSystem = await ethers.getContractAt("FeeSharingSystem", "0x679A376Dab6318d62DE3C87292e207532c8607a9");
    await feeSharingSystem.deployed();

    console.log("FeeSharingSystem deployed to:", feeSharingSystem.address);

    // Deploy FeeSharingSystem
    const feeSharingSystemWithVesting = await FeeSharingSystem.deploy(rewardsDistributionAddress, rewardsTokenAddress, vMEOWL);
    await feeSharingSystemWithVesting.deployed();

    console.log("feeSharingSystemWithVesting deployed to:", feeSharingSystemWithVesting.address);

    // Define the addresses for MeowlFeeSharingWithCompounding
    const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

    // Deploy MeowlFeeSharingWithCompounding
    const MeowlFeeSharingWithCompounding = await ethers.getContractFactory("MeowlFeeSharingWithCompounding");
    const meowlFeeSharingWithCompounding = await MeowlFeeSharingWithCompounding.deploy(feeSharingSystem.address, uniswapRouterAddress);
    await meowlFeeSharingWithCompounding.deployed();



    console.log("MeowlFeeSharingWithCompounding deployed to:", meowlFeeSharingWithCompounding.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });