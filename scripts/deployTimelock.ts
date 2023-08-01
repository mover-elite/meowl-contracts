import { ethers } from "hardhat";

async function main() {
    const TimelockFactory = await ethers.getContractFactory("CompTimelock");
    const timelock = await TimelockFactory.deploy("0x24F5bE25cC59079347CF7faE2562bc9BBD44b890");

    await timelock.deployed();

    console.log(
        `${timelock.address}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
