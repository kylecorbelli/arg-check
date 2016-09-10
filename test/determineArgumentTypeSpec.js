'use strict';

let expect = require('chai').expect;
let determineArgumentType = require('../determineArgumentType');

describe('determineArgumentType', () => {
  it('should be a function', () => {
    expect(determineArgumentType).to.be.a('function');
  });

  it('should correctly determine the type of a null argument', () => {
    let arg = null;
    expectDeterminedArgumentTypeToBe(arg, 'null');
  });

  it('should correctly determine the type of an undefined argument', () => {
    let arg = undefined;
    expectDeterminedArgumentTypeToBe(arg, 'undefined');
  });

  it('should correctly determine the type of a String argument', () => {
    let arg = 'name';
    expectDeterminedArgumentTypeToBe(arg, 'string');
  });

  it('should correctly determine the type of a Number argument', () => {
    let arg1 = 3.14;
    let arg2 = 4;
    expectDeterminedArgumentTypeToBe(arg1, 'number');
    expectDeterminedArgumentTypeToBe(arg2, 'number');
  });

  it('should correctly determine the type of a Boolean argument', () => {
    let arg1 = false;
    let arg2 = true;
    expectDeterminedArgumentTypeToBe(arg1, 'boolean');
    expectDeterminedArgumentTypeToBe(arg2, 'boolean');
  });

  it('should correctly determine the type of an Array argument', () => {
    let arg = [0, 1, 2, 3];
    expectDeterminedArgumentTypeToBe(arg, 'array');
  });

  it('should correctly determine the type of an Object argument', () => {
    let arg = {key1: 'val1', key2: 'val2'};
    expectDeterminedArgumentTypeToBe(arg, 'object');
  });

  it('should correctly determine the type of a custom class instance argument', () => {
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    let kyle = new Person('Kyle');
    expectDeterminedArgumentTypeToBe(kyle, 'person');
  });
});

let expectDeterminedArgumentTypeToBe = (argument, expectedType) => {
  expect(determineArgumentType(argument)).to.equal(expectedType);
};
