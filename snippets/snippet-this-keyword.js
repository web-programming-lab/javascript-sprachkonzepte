const car = {
  name: 'my car',
  age: 10,
  start() {
    console.dir(this);
    console.log(`start ${this.name}`);
  },
};

car.start();
