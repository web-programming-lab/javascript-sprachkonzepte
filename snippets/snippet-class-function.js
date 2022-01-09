class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name}`);
  }
}
console.log(typeof Person);
console.dir(Person);
