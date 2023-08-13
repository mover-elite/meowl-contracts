import { ethers } from "hardhat";

async function main() {
  const Router = await ethers.getContractFactory("MeowlRouter");
  const router = await Router.deploy();

  await router.deployed();

  console.log(
    `${router.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
