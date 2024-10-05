const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('verify calculateNumber usage', () => {
    const mySpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(mySpy.calledOnce).to.be.true;
    expect(mySpy.calledWith('SUM', 100, 20)).to.be.true;

    mySpy.restore();
  });
});
