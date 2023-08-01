import { ethers } from "hardhat";

async function main() {
    const meowl = await ethers.getContractAt("Meowl", "0x1f1f26c966f483997728bed0f9814938b2b5e294")
    //await meowl.enableTrading()

    //await meowl.removeLimits()
    await meowl.excludeFromMaxTransaction("0xc50822a25c627c5c9c1dc65766fb8287597eaf87", true)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
