const chai = require('chai');

const isValidSubsequence = require('.');

it('isValidSubsequence', function () {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  chai.expect(isValidSubsequence(array, sequence)).to.deep.equal(true);
});
