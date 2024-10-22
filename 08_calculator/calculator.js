const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let output = 0;
	for (let item of array ){
    output += parseInt(item)
  }
  return output;
};

const multiply = function(array) {
  let output = 1;
  for (let item of array) {
    output = parseInt(item) * output;
  }
  return output;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  a = parseInt(a);
  let output = 1;
  for (let i = 1; i <= a; i++) {
    output = output * i;
  }
  return output;
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
