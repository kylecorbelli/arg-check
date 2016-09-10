'use strict';

let expect = require('chai').expect;

let typeCheck = require('../typeCheck');

describe('typeCheck', () => {
  it('should be a function', () => {
    expect(typeCheck).to.be.a('function');
  });
});
