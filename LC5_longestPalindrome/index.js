//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s){ 
  let startIndex = 0; 
  let maxLength = 1; // bare minimum max length of palindrome

  function expandAroundMiddle(left, right){
    // only run if valid palindrome expanding around the middle.
    while (left >= 0 && right < s.length && s[left] === s[right]){
      const currentPalLength = right - left + 1;
      // if current length is longer than max, set max length to current 
      if (currentPalLength > maxLength){
        maxLength = currentPalLength;
        startIndex = left;
      }
      left -= 1
      right += 1
    }
  }

  for (let i = 0; i <= s.length; i ++) {
    expandAroundMiddle(i - 1, i + 1); // one index left and one index right for odd numbers
    expandAroundMiddle(i, i + 1); // even-numbered words, treat space between two numbers as center
  }
  return s.slice(startIndex, startIndex + maxLength)
}

module.exports = longestPalindrome;