/* 
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions.abs

1. numbers divisible by 3, print "Fizz" instead of the number.
2. numbers divisible by 5 (and not 3), print "Buzz" instead of the number.
3. numbers divisible by 3 and 5, print "FizzBuzz". and still print conditions 1 and 2.

*/

(function countToHundred() {
  let num = 0
  for( i = 0; i < 100; i++) {
    num ++
    if(num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz")
    } else if (num % 3 === 0 && !num % 5 === 0){
      console.log("Fizz")
    } else if (num % 5 === 0 && !num % 3 === 0){
      console.log("Buzz")
    } else (
      console.log(num)
    )
  }
})()

