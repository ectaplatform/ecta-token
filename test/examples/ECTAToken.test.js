const { decodeLogs } = require('../helpers/decodeLogs');
const ECTAToken = artifacts.require('ECTAToken');

const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('ECTA Token', function ([_, creator]) {
  let token;

  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

  beforeEach(async function () {
    token = await ECTAToken.new({ from: creator });
  });

  it('has a name', async function () {
    const name = await token.name();
    name.should.eq('ECTA Token');
  });

  it('has a symbol', async function () {
    const symbol = await token.symbol();
    symbol.should.eq('ECTA');
  });

  it('has 18 decimals', async function () {
    const decimals = await token.decimals();
    decimals.should.be.bignumber.equal(18);
  });

  it('assigns the initial total supply to the creator except vesting amount', async function () {
    const totalSupply = await token.totalSupply();
    const creatorBalance = await token.balanceOf(creator);
    let platformVesting = await token.PLATFORM_GROWTH_VESTING_AMOUNT();
    let teamVesting = await token.TEAM_VESTING_AMOUNT();
    let adminAddress = await token.adminAddress();
    let adminAllowance = await token.ADMIN_ALLOWANCE();

    let finalBalance = totalSupply.minus(platformVesting);
    finalBalance = finalBalance.minus(teamVesting);
    creatorBalance.should.be.bignumber.equal(finalBalance);

    const receipt = await web3.eth.getTransactionReceipt(token.transactionHash);
    const logs = decodeLogs(receipt.logs, ECTAToken, token.address);
    logs.length.should.eq(1);
    logs[0].event.should.equal('Approval');
    logs[0].args.owner.valueOf().should.equal(creator);
    logs[0].args.spender.valueOf().should.equal(adminAddress);
    logs[0].args.value.should.be.bignumber.equal(adminAllowance);
  });
});
