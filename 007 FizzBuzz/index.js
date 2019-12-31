/* 
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions.abs

1. numbers divisible by 3, print "Fizz" instead of the number.
2. numbers divisible by 5 (and not 3), print "Buzz" instead of the number.
3. numbers divisible by 3 and 5, print "FizzBuzz". and still print conditions 1 and 2.

*/

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

