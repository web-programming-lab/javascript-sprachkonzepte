const car = {
  name: 'my car',
  age: 10,
  start() {
    console.dir(this);
    console.log(`start ${this.name}`);
  },
};

const car2 = {
  name: 'my car 2',
};

const start = car.start.bind(car2);
start(); // 'start my car 2'
