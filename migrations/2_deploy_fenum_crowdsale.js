const FenumCrowdsale = artifacts.require('FenumCrowdsale');



module.exports = async function (deployer, network, accounts) {
  const rate = '1000';
  const purchaseLimit = '1000000000000000000000'; // 1000FNM
  const wallet = ''; // FenumDevPool адрес
  const token = ''; // FenumToken адрес
  const args = [rate, purchaseLimit, wallet, token];
  await deployer.deploy(FenumCrowdsale, ...args);
};
