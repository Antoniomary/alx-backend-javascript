const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let myStub;
  let mySpy;

  beforeEach(() => {
    mySpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    mySpy.restore();
  });

  it('verify calculateNumber usage with sum of 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(mySpy.calledWith('The total is: 120')).to.be.true;
    expect(mySpy.calledOnce).to.be.true;
  });

  it('verify calculateNumber usage with sum of 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(mySpy.calledWith('The total is: 20')).to.be.true;
    expect(mySpy.calledOnce).to.be.true;
  });
});
