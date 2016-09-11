'use strict';

let determineArgumentType = require('./determineArgumentType');

let argCheck = (argument, expectedType) => {
  let type = determineArgumentType(argument);
  if (type != expectedType) {
    let message = `Expected argument to be of type "${expectedType}" but instead received type "${type}"`;
    throw new TypeError(message);
  }
};

module.exports = argCheck;
