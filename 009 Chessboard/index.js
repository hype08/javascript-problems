// print a chessboard of 8x8 diameter.

let size = 8
let board = "";
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 16; x++ ) {
    if ((x + y) % 2 == 0) { // if even
      board += " "
    } else {
      board += "#" // odd
    }
  }
  board += "\n" // add row
}

console.log(board)