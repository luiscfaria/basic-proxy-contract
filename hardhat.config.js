require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_GOERLI_KEY}`,
      accounts: [`0x${process.env.ADMIN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
