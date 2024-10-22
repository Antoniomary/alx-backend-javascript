const expect = require('chai').expect;
const request = require('request');

describe('api testing', () => {
  const url = 'http://localhost:7865/';
  const cartUrl = 'http://localhost:7865/cart/123';
  const wrongCartUrl = 'http://localhost:7865/cart/abc';

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

  it('correct status code and result when :id is a number', (done) => {
    request(cartUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('correct status code when :id is not a number', (done) => {
    request(wrongCartUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});