const palindromes = function (str) {
  str = str
    .replace(/[^\w\d\s]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
  revStr = str
    .replace(/[^\w\d\s]/g, "")
    .replace(/\s/g, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  return !!(str === revStr);
};

console.log(palindromes("teste!@!#!@meu deu s"));

// Do not edit below this line
module.exports = palindromes;
