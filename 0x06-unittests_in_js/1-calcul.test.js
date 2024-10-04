const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Sample Test', () => {
  it('should return sum of two ints', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should return sum of an int and float', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should return sum of two floats', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should return sum of two floats', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('should return difference of two floats', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return quotient of two floats', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return Error', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
