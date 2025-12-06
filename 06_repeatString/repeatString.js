const repeatString = function (str, num) {
  if (num >= 0) {
    let newStr = "";
    for (let x = 1; x <= num; x++) {
      newStr += str;
    }
    return newStr;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
