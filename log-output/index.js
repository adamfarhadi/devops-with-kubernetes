const crypto = require("crypto");

const printString = () => {
  console.log(new Date() + ': ' + crypto.randomUUID());

  setTimeout(printString, 5000)
};

printString()