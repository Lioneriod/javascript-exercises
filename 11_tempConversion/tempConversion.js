const convertToCelsius = function (fahr) {
  fahr = ((fahr - 32) * 5) / 9;
  return +fahr.toFixed(1);
};

const convertToFahrenheit = function (cels) {
  cels = cels * 1.8 + 32;
  return +cels.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
