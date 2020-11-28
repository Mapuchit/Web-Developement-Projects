const Calculate = {
  factorial(num) {
    // account for edge case
    if (num === 0) {
      return 1;
    }
    // calculate factorial
    for (let i = num - 1; i >= 1; i--) {
      num *= i; 
    }
    return num
  }
};

module.exports = Calculate;


