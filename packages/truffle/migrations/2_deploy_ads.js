const Ads = artifacts.require("Ads");

module.exports = function (deployer) {
  deployer.deploy(Ads, 10);
};
