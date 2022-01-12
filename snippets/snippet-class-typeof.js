class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name}`);
  }
}
console.log(new Person('Patrick').sayHello());

console.log(typeof Person);
console.log(Person === Person.prototype.constructor);
console.log(Person.prototype.sayHello);
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getPrototypeOf(new Person()));
