/*
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers(one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

You can assume there will only be one pair of numbers with the smallest difference.
*/

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let iterOne = 0;
  let iterTwo = 0;
  let smallest = Infinity;
  let current = Infinity; 
  let smallestPair = [];
  while (iterOne < arrayOne.length && iterTwo < arrayTwo.length) {
    let firstNum = arrayOne[iterOne];
    let secondNum = arrayTwo[iterTwo];
    if (firstNum < secondNum) {
       current = secondNum - firstNum;
       iterOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      iterTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

exports.smallestDifference = smallestDifference;