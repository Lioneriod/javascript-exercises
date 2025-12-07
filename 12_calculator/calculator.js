const add = function (...x) {
  return x.reduce((acc, curr) => acc + curr);
};

const subtract = function (...x) {
  return x.reduce((acc, curr) => acc - curr);
};

const sum = function (...x) {
  return x[0].reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (...x) {
  console.log(x[0]);
  return x[0].reduce((acc, curr) => acc * curr);
};

const power = function (...x) {
  return x.reduce((acc, curr) => acc ** curr);
};

const factorial = function (...x) {
  if (x > 0) {
    x = Array.from({ length: x }, (x, i) => i + 1);
    console.log(x);
    return x.reduce((acc, curr) => acc * curr);
  } else {
    return 1;
  }
};

console.log(factorial(2));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
