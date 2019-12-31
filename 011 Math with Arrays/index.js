// write a range function that takes two arguments, start and end. and returns an array containing all the numbers from start and including end.

//  print range
function array(start, end, step) {
  let list = []
  for (let num = start; num <= end; num++) {
    list.push(num)
  } 
  return list
}
// console.log(array(1, 3))

// write a sum function that takes an array of numbers and returns the sum of numbers.

function sum(array) {
  let total = 0
  for(let i = 0; i < array.length; i++) {
    total += array[i]
  } 
  return total
}

console.log(sum(array(1,3)))