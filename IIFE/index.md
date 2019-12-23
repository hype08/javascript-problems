## what is an IIFE?

An IIFE is an immediately invoked function expression.

- a function that is executed right after it is created.

## Turn this function into an IIFE.

function doubleNumber(num) {
  return num * 2
};

doubleNumber(5);

---

## Solution

(function doubleNumber(num) {
  return num * 2
})(10);

## ES6 Example

(() => { ...  })();