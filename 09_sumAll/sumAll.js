const sumAll = function (x, y) {
  if (Number.isInteger(x) && x >= 0 && Number.isInteger(y) && y >= 0) {
    const b = Math.max(x, y);
    const a = Math.min(x, y);
    const rangeLength = b - a + 1;
    return Array.from({ length: rangeLength }, (_, index) => a + index).reduce(
      (w, z) => w + z
    );
  } else {
    return "ERROR";
  }
};
// Do not edit below this line
module.exports = sumAll;
