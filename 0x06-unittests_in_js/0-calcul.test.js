const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Sample Test', () => {
  it('should return sum of two ints', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return sum of an int and float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return sum of two floats', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return sum of two floats', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
