'use strict';

let determineArgumentType = (argument) => {
  let argumentType;
  if (argument === null) {
    argumentType = 'null';
  } else
  if (argument === undefined) {
    argumentType = 'undefined';
  } else
  if (argument.constructor.name === 'String') {
    argumentType = 'string';
  } else
  if (argument.constructor.name === 'Number') {
    argumentType = 'number';
  } else
  if (argument.constructor.name === 'Boolean') {
    argumentType = 'boolean';
  } else
  if (argument.constructor.name === 'Array') {
    argumentType = 'array';
  } else
  if (argument.constructor.name === 'Object') {
    argumentType = 'object';
  } else {
    argumentType = argument.constructor.name.toLowerCase();
  }

  return argumentType;
};

module.exports = determineArgumentType;
