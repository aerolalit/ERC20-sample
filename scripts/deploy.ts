// Import required libraries
const { ethers, network } = require("hardhat");

async function main() {
  // Print the network name for confirmation
  console.log("Deploying contract to network:", network.name);

  // Get the ERC20 contract factory
  const MyToken = await ethers.getContractFactory("MyToken");

  // Deploy the contract
  console.log("Deploying MyToken...");
  const initalSupply = ethers.utils.parseUnits("1000000", 18);
  const token = await MyToken.deploy( initalSupply); // constructor arguments

  console.log("Transaction hash:", token.deployTransaction.hash);

  // Wait for deployment to be mined
  await token.deployed();

  // Log the deployed contract address
  console.log("MyToken deployed to:", token.address);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
