const car = {
  name: 'my car',
  age: 10,
  start() {
    console.log(`start ${this.name}`);
  },
};
const startAsArrow = () => console.log(`start ${this.name}`);
car.start = startAsArrow;
car.start(); // Error
