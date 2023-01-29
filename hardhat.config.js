const { network } = require("hardhat");

require("dotenv");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
    networks: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
