const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('Sample Test', () => {
  it('should return sum of two ints', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('should return sum of an int and float', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('should return sum of two floats', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });

  it('should return sum of two floats', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  it('should return difference of two floats', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return quotient of two floats', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should return Error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
