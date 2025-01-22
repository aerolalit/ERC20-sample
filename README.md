# MyERC20Project

## Overview

MyERC20Project is a Solidity-based project that deploys an ERC20 token contract on the Ethereum blockchain. The project uses Hardhat as the development environment and includes scripts for deploying and interacting with the contract.

## Features

- Custom ERC20 token deployment.
- Configured for deployment to the Sepolia test network.
- Includes scripts for deploying the contract and interacting with it.

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Hardhat
- Infura account for Ethereum RPC
- Sepolia testnet ETH in your wallet

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd MyERC20Project
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure environment variables:
    Create a [.env](http://_vscodecontentref_/1) file in the project root with the following:
    ```env
    INFURA_PROJECT_ID=<Your Infura Project ID>
    PRIVATE_KEY=<Your Wallet Private Key>
    ```

4. Verify Hardhat configuration:
    Ensure the [hardhat.config.ts](http://_vscodecontentref_/2) is properly set up for Sepolia:
    ```ts
    require("@nomiclabs/hardhat-ethers");
    require("dotenv").config();

    module.exports = {
      solidity: "0.8.28",
      networks: {
        sepolia: {
          url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
          accounts: [process.env.PRIVATE_KEY],
        },
      },
    };
    ```

## Scripts

### Deploy Script

The deploy script deploys the ERC20 contract to the Sepolia test network.

File: [deploy.ts](http://_vscodecontentref_/3)

Run the script:
```sh
npx hardhat run scripts/deploy.ts --network sepolia
```
Expected Output:
- Network name
- Transaction hash
- Deployed contract address

Example Output:
```sh
Deploying contract to network: sepolia
Deploying MyToken...
Transaction hash: 0x1234567890abcdef...
MyToken deployed to address: 0xabcdef123456...
```

## Folder Structure

- `contracts/`: Contains Solidity contracts.
  - `MyToken.sol`: Custom ERC20 token contract.
- `scripts/`: Deployment and interaction scripts.
  - `deploy.ts`: Script to deploy the ERC20 contract.
- `artifacts/`: Generated folder with compiled contract data.
- `cache/`: Temporary build data for the project.
- `hardhat.config.ts`: Hardhat configuration file.
- `.env`: Environment variables.

## Dependencies

- Hardhat
- Ethers.js
- dotenv
- @openzeppelin/contracts

## Notes

- **Artifacts and Cache**: Avoid committing `artifacts/` and `cache/` to version control.
- **Security**: Never share your private key or `.env` file contents publicly.

## References

- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
- [Ethers.js Documentation](https://docs.ethers.io/v5/)

## License

This project is licensed under the MIT License. See the LICENSE file for details.