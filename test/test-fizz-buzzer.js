'use strict';
let fizzBuzzer = require('../fizzBuzzer.js');
const expect = require('chai').expect;



//, buzz when divisible by 5, and fizzbuzz when divisible by 15'

describe('fizzBuzzer', function(){
  it('should return fizz when a number is divisible by 3', function () {
    const answer = fizzBuzzer(6);
    expect(answer).to.equal('fizz');
  });
  it('should return buzz when a number is divisible by 5', function () {
    const answer = fizzBuzzer(10);
    expect(answer).to.equal('buzz');
  });
  it('should return fizzbuzz when a number is divisible by 15', function() {
    const answer = fizzBuzzer(30);
    expect(answer).to.equal('fizz-buzz'); 
  });
  /* negative cases */
  it('should throw an error when entry is NaN', 
    function() {
      const badInputFields = ['a','c',true,[]];
      badInputFields.forEach(function (field) {
        expect(function(){fizzBuzzer(field);}).to.throw(Error);
      });
    });
});
