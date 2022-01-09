const vehicle = {
  hasEngine: true,
};
let car = {
  hasFourWheels: true,
};

car = Object.setPrototypeOf(car, vehicle);
console.log(car.hasEngine); //Output: true
console.dir(car);
