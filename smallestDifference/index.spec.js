const chai = require('chai');

const smallestDifference = require('.');

it('isSmallestDifference', function () {
  const arrayOne = [-1, 5, 10, 20, 28, 3];
  const arrayTwo = [26, 134, 135, 15, 17];
  chai.expect(smallestDifference.smallestDifference(arrayOne, arrayTwo)).to.deep.equal([28, 26]);
});
