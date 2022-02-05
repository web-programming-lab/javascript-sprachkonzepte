const vehicle = {
  hasEngine: true,
};
let car = {
  hasFourWheels: true,
};

car = Object.setPrototypeOf(car, vehicle);
console.log(car.hasEngine); //Output: true
console.dir(car);

const car2 = Object.create(vehicle, {hasFourWheels: {value: true}});
console.log(car2.hasEngine);
console.log(car2.hasFourWheels);