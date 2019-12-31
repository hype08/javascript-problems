// apply getCarDescription to the Lamborghini using a CALL method..

const car1 = { 
  brand: 'Porsche', 
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}. \n`)
  }
}

const car2 = {
  brand: 'Lamborghini',
}

console.log(car1.getCarDescription(80_000, 2010, 'blue'))

console.log(car1.getCarDescription.call(car2, 200_000, 2013, 'yellow'))