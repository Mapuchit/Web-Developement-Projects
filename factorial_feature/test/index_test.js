const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {

    it('returns 120 for input 5', () => {
      // Setup
      const input = 5;
      const expected = 120;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.equal(result, expected);
    });

    it('returns 6 for input 3', () => {
      // Setup
      const input = 3;
      const expected = 6;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.equal(result, expected);
    });

    // cover the edge case
    it('returns 1 for input 0', () => {
      // Setup
      const input = 0;
      const expected = 1;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.equal(result, expected);
    });

  });
});