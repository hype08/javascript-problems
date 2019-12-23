function isPalindrome(s) { 
  // Sanitize the input string of all non-alphanumeric characters including underscores, and lowercase it.
  s = s.toLowerCase().replace(/[\W_]/g, "")

  // Create a left and right pointer, starting at end and start of string.
  let left = 0;
  let right = s.length - 1;

  // Work towards each other. While L !== R, return false
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true
}

module.exports = isPalindrome;
