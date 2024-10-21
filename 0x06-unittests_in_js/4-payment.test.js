const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let myStub;
  let mySpy;

  beforeEach(() => {
    myStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    mySpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    myStub.restore();
    mySpy.restore();
  });

  it('verify calculateNumber usage with stub and spy', () => {
    sendPaymentRequestToApi(100, 20);

    expect(myStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(mySpy.calledWith('The total is: 10')).to.be.true;
  });
});
