// the alert when buttons are pressed are 'This is button 6'.


// Solution 1:
// add an IIFE to execute button onClick independently as iterated through for loop.

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    (function (num) {
      button.onclick = function () {
        alert('This is button ' + num);
      }
    })(i);
    body.appendChild(button);
  }
}

createButtons();

// Solution 2:
// add a separate function that accepts two arguments, button & num.

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

function addClickFunctionality(button, num) {
  button.onclick = function () {
    alert('This is button ' + num);
  }
}

createButtons();

// Solution 3:
// use ES6 'let' keyword, because it is block scoped, whereas 'var' is function scoped.

function createButtons() {
  for (let i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    button.onclick = function () {
      alert('This is button ' + i);
    }
    body.appendChild(button);
  }
}

createButtons();