require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'goerli',
  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts:[`0x${process.env.WALLET_PRIVATE_KEY}`]
    },
  },
};
