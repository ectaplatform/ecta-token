var ectaToken = artifacts.require("./ECTAToken.sol");

module.exports = function (deployer) {
  deployer.deploy(ectaToken);
};
