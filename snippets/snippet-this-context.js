let car1 = { name: 'car1' };
let car2 = { name: 'car2' };
function start() {
  console.dir(this);
  console.log(`start ${this.name}`);
}
car1.start = start;
car2.start = start;
car1.start(); // Output: start car1
car2.start(); // Output: start car2
