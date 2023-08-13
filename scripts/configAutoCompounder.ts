import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    // Define the addresses for FeeSharingSystem
    const rewardsDistributionAddress = deployer.address;
    const meowlFeeSharingWithCompounding = await ethers.getContractAt("MeowlFeeSharingWithCompounding", "0x38628490c3043e5d0bbb26d5a0a62fc77342e9d5")

    await meowlFeeSharingWithCompounding.updateHarvestBufferBlocks("5")
    await meowlFeeSharingWithCompounding.updateMaxPriceOfMEOWInWETH(ethers.utils.parseEther("0.001"))
    await meowlFeeSharingWithCompounding.updateThresholdAmount(ethers.utils.parseEther("500"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });