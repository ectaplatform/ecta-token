var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "your seed words from ganache";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};