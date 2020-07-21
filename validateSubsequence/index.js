/**
 Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
 */

 // O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
   let arrPointer = 0;
   let seqPointer = 0;
   while (arrPointer < array.length && seqPointer < sequence.length) {
     if (array[arrPointer] === sequence[seqPointer]) seqPointer++;
     arrPointer++;
   }
   return seqPointer === sequence.length;
 }

 module.exports = isValidSubsequence;