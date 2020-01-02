//write a function that reverses a string. do not use the reverse method.
// (["1", "2", "3"].reverse()

function reverseArray(array) {
  let reverse = []
  for (let i = array.length -1; i >= 0; i--)
      reverse.push(array[i])
      return reverse
}

// console.log(reverseArray(["1", "2", "3"]))

