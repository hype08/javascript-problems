// tab 1

console.log('1 above:', color);

var color = "blue";

console.log('1 below', color);



//tab 2

var color;

console.log('2 above:', color);

color = "blue";

console.log('2 below:', color);



// tab 3

console.log('3 above:', getProduct(2, 3));

var getProduct = function (num1, num2) {
  return num1 * num2;
};

console.log('3 below:', getProduct(2, 3));



// tab 4

console.log('4: ', getProduct(2, 3));

function getProduct(num1, num2) {
  return num1 * num2;
}



// tab 5

var globalVar = 'global';

(function () {

  var name = 'Jen';

  var getAge = function () {
    return '30';
  };

  function getState() {
    return 'Delaware';
  }

})();