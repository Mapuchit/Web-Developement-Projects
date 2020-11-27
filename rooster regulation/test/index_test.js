const assert = require('assert');
const Rooster = require('../index');

// a describe block for Rooster
describe('Rooster', () => {

  // a new describe block for the .announceDawn method
  describe('.announceDawn', () => {
    // an it block
    it('returns a rooster call', () => {

      // Setup
      let expected = 'cock-a-doodle-doo!';

      // Exercise 
      let result = Rooster.announceDawn();

      // Verify 
      assert.strictEqual(result, expected);
 
    });  
  });

  // a new describe block for the .timeAtDawn method
  describe('.timeAtDawn', () => {

    // an it block that checks if the input number is converted to a string
    it('returns its argument as a string', () => {
  
      // Setup
      let hour = 1;
      let expected = '1';
  
      // Exercise 
      let result = Rooster.timeAtDawn(hour);
  
      // Verify 
      assert.strictEqual(result, expected);
   
    });

    // an it block that checks if the function throws an error if passed a number less than 0
    it('throws an error if passed a number less than 0', () => {
  
      // Setup
      let hour = -1;
  
      // Verify 
      assert.throws(() => {
        // Exercise
           Rooster.timeAtDawn(hour);
        },
        // the error I expect to be thrown
        RangeError
      );
   
    }); 

    // an it block that checks if the function throws an error if passed a number greater than 23
    it('throws an error if passed a number greater than 23', () => {
  
      // Setup
      let hour = 24;
  
      // Verify 
      assert.throws(() => {
        // Exercise
           Rooster.timeAtDawn(hour);
        },
        // the error I expect to be thrown
        RangeError
      );
   
    }); 

  });
});