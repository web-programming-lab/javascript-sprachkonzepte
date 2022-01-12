class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name}`);
  }
}
console.log(new Person('Patrick').sayHello());
