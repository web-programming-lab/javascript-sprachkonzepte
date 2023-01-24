const vehicle = {
  hasEngine: true,
};
let car = {
  hasFourWheels: true,
};

car = Object.setPrototypeOf(car, vehicle); // or car.__proto__ = vehicle;

console.log(car.hasEngine); //Output: true
console.log(car.__proto__ === vehicle); //Output: true
console.log(Object.getPrototypeOf(car) === vehicle); //Output: true

const car2 = Object.create(vehicle, { hasFourWheels: { value: true } }); // Property descriptor
console.log(car2.hasEngine);
console.log(car2.hasFourWheels);

//
// Prototype chain
// car2.__proto__ ==> vehicle, vehicle.__proto__ ==> Object.prototype, Object.prototype.__proto__ ==> null
//
console.log(car2.__proto__ === vehicle); //Output: true
console.log(vehicle.__proto__ === Object.prototype); //Output: true
console.log(Object.prototype.__proto__ === null); //Output: true
