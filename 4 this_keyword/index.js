// what is the 'this' keyword referring to?

const house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function () {
    return this.price / this.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());

/* 

the 'this' keyword refers to the object it is within.

In a method, 'this' refers to the owner object.
Alone, 'this' refers to the global object.
In a function, 'this' refers to the global object.
In a function, in strict mode, this is undefined.
In an event, 'this' refers to the element that received the event.
Methods like call(), and apply() can refer 'this' to any object.

*/