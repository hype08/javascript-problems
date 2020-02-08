// brute force

var twoSum = function(nums, target) {
  let result = []; // test against target

  // loop through array nums[i] incrementally
  for (let i = 0; i < nums.length; i++) {
    // loop through array nums[j] incrementally
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        // add successful combinations i + j to result []
        result.push(i);
        result.push(j);
      }
    }
  }
  return result
}

// should return index [0, 1] 
console.log(twoSum([2, 7, 11, 15], 9));