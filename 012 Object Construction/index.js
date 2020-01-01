function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year
}

Car.prototype.getColor = function() {
  return this.color
}

const JimsCar = new Car("blue", "tesla", 2014)
console.log(JimsCar.getColor())