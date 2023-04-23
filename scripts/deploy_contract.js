const hre = require("hardhat");

async function main() {
  const Diplomint = await hre.ethers.getContractFactory("Diplomint");
  const diplomint = await Diplomint.deploy();

  await diplomint.deployed();

  console.log("Lock deployed to:", diplomint.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
