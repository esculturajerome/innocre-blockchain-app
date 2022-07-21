const hre = require("hardhat");

async function main() {
  const amazonCoinFactory = await hre.ethers.getContractFactory("InnocreCoin");
  const innocreCoin = await innocreCoinFactory.deploy();

  await innocreCoin.deployed();

  console.log("Innocre Coin deployed to:", innocreCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
