'use strict';

let expect = require('chai').expect;
let typeCheck = require('../typeCheck');

describe('typeCheck', () => {
  let name = 'kyle';
  let age = 31;
  let isCoolGuy = true;
  let friends = ['rachael', 'jakey boy'];
  let hobbies = {
    indoor: ['coding', 'netflix'],
    outdoor: ['hiking', 'surfing', 'walking jake']
  };
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  let kyle = new Person('Kyle');

  it('should be a function', () => {
    expect(typeCheck).to.be.a('function');
  });

  it('should not raise an error when the argument type and expected type match', () => {
    expectNotToThrowErrorOnArgumentAndExpectedType(name, 'string');
    expectNotToThrowErrorOnArgumentAndExpectedType(age, 'number');
    expectNotToThrowErrorOnArgumentAndExpectedType(isCoolGuy, 'boolean');
    expectNotToThrowErrorOnArgumentAndExpectedType(friends, 'array');
    expectNotToThrowErrorOnArgumentAndExpectedType(hobbies, 'object');
    expectNotToThrowErrorOnArgumentAndExpectedType(kyle, 'person');
    expectNotToThrowErrorOnArgumentAndExpectedType(null, 'null');
    expectNotToThrowErrorOnArgumentAndExpectedType(undefined, 'undefined');
  });

  it('should raise an error when expecting a string but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(age, 'string', 'Expected argument to be of type "string" but instead received type "number"');
  });

  it('should raise an error when expecting a number but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(name, 'number', 'Expected argument to be of type "number" but instead received type "string"');
  });

  it('should raise an error when expecting a boolean but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(name, 'boolean', 'Expected argument to be of type "boolean" but instead received type "string"');
  });

  it('should raise an error when expecting a array but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(name, 'array', 'Expected argument to be of type "array" but instead received type "string"');
  });

  it('should raise an error when expecting a object but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(name, 'object', 'Expected argument to be of type "object" but instead received type "string"');
  });

  it('should raise an error when expecting a custom class instance but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(name, 'person', 'Expected argument to be of type "person" but instead received type "string"');
  });

  it('should raise an error when expecting a null value but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(name, 'null', 'Expected argument to be of type "null" but instead received type "string"');
  });

  it('should raise an error when expecting an undefined value but receiving something else', () => {
    expectToThrowErrorOnArgumentAndExpectedType(name, 'undefined', 'Expected argument to be of type "undefined" but instead received type "string"');
  });
});

let expectNotToThrowErrorOnArgumentAndExpectedType = (argument, expectedType) => {
  expect(() => {
    typeCheck(argument, expectedType);
  }).to.not.throw(Error);
};

let expectToThrowErrorOnArgumentAndExpectedType = (argument, expectedType, errorMessage) => {
  expect(() => {
    typeCheck(argument, expectedType);
  }).to.throw(Error, errorMessage);
};
