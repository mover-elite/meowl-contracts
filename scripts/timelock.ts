import { ethers } from "hardhat";

async function timelockArgs(contract: any, value = 0, signature: any, args: any, eta: any) {
    const method = signature.split("(")[0];
    const tx = await contract.populateTransaction[method](...args);
    const data = "0x" + tx.data.slice(10);
    return [tx.to, value, signature, data, eta];
}

async function main() {
    const timelock = await ethers.getContractAt("CompTimelock", "0x3a3da19244092371df1748470a41f7b1d4daf43e")
    const meowl = await ethers.getContractAt("Meowl", "0x1f1f26c966f483997728bed0f9814938b2b5e294")
    let args;

    args = await timelockArgs(
        meowl,
        0,
        "transfer(address,uint256)",
        ["0x24F5bE25cC59079347CF7faE2562bc9BBD44b890", ethers.utils.parseEther('800000')],
        "1690860626",
    );

    console.log(args)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
