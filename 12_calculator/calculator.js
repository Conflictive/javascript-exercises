const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(nums) {
	return nums.reduce((count, num) => count + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((count, num) => count * num, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

