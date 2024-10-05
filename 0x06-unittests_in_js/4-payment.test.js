const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('verify calculateNumber usage', () => {
    const myStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const mySpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(myStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(mySpy.calledWith('The total is: 10')).to.be.true;

    mySpy.restore();
  });
});
