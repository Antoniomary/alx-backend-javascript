const expect = require('chai').expect;
const request = require('request');

describe('api testing', () => {
  const url = 'http://localhost:7865/';

  it('correct status code', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
