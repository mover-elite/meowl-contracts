import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    // Define the addresses for FeeSharingSystem
    const rewardsDistributionAddress = deployer.address;
    const rewardsTokenAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const MEOWL = await ethers.getContractAt("Meowl", "0x1f1f26c966f483997728bed0f9814938b2b5e294");
    const vMEOWL = await ethers.getContractAt("VestedMeowl", "0x86ab436ef4ab3269cfa55789c917613da44044e5");
    const feeSharingSystem = await ethers.getContractAt("FeeSharingSystem", "0xd5bfebdce5c91413e41cc7b24c8402c59a344f7c")
    const feeSharingSystemWithVesting = await ethers.getContractAt("FeeSharingSystem", "0x77ad263cd578045105fbfc88a477cad808d39cf6")
    const meowlFeeSharingWithCompounding = await ethers.getContractAt("MeowlFeeSharingWithCompounding", "0x38628490c3043e5d0bbb26d5a0a62fc77342e9d5")
    const rewardsSplitter = await ethers.getContractAt("RewardSplitter", "0x4ff42c21604b04f9836bf45fd3824ed8274399e0")
    const weth = await ethers.getContractAt("WETH9", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")

    await rewardsSplitter.recover(ethers.constants.AddressZero)

    const balanceOfRewards = await ethers.provider.getBalance(deployer.address)

    await weth.deposit({ value: balanceOfRewards })

    // Calculate staked balances
    const publicStaked = await MEOWL.balanceOf(feeSharingSystem.address);
    const privateStaked = await vMEOWL.balanceOf(feeSharingSystemWithVesting.address);

    const totalStaked = publicStaked.add(privateStaked);

    // Calculate shares
    const publicShares = publicStaked.mul(10000).div(totalStaked);

    // Calculate rewards
    const totalRewards = await weth.balanceOf(deployer.address);
    const publicRewards = totalRewards.mul(publicShares).div(10000);
    const privateRewards = totalRewards.sub(publicRewards);

    // Transfer rewards and notify
    await weth.transfer(feeSharingSystem.address, publicRewards);
    await feeSharingSystem.notifyRewardAmount(publicRewards);

    await weth.transfer(feeSharingSystemWithVesting.address, privateRewards);
    await feeSharingSystemWithVesting.notifyRewardAmount(privateRewards);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });