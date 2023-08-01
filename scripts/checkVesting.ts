import { ethers } from "hardhat";

async function main() {
    const vestingContributor = await ethers.getContractAt("VestedMeowl", "0x21b6B54F26cF4D94d3755534dDaB299aBafFD212")

    await vestingContributor.mint("0xAA5e625217Ed0C56A1939a2811AbF743E1122ED6", ethers.utils.parseEther("1000000"))


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
