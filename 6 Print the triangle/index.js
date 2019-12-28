// Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle.

function triangle() {
  let star = []
  let num = 1
  while (num <= 7) {
    num++
    star.push('*')
    console.log(star.toString().split(",").join(""))
    //console.log(star.toString()..replace(/,/g, "")
  }
}

triangle()

/*

(function triangle() {
  let star = []
  let num = 1
  while (num <= 7) {
    num++
    star.push('*')
    //console.log(star.toString()..replace(/,/g, "")
  }
})()

*/