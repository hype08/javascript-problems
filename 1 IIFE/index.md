## what is an IIFE?

An IIFE is an immediately invoked function expression.

- a function that is executed right after it is created.

## Turn this function into an IIFE.

```javascript
function doubleNumber(num) {
  return num * 2
};

doubleNumber(5);
```
---

## Solution

```javascript
(function doubleNumber(num) {
  return num * 2
})(10);
```

## ES6 Example

```javascript
(() => { ...  })();
```