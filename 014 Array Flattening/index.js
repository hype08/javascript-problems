let arrays = [[1], [2,3,4], [5,6,7], [8,9,10, "string", false]]

let flattened = arrays.reduce((a, b) => a.concat(b),[])

console.log(flattened)