/* eslint-disable no-unused-vars */

class Person {
  #age; // Private class fields
  constructor(name, age) {
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
}

const person = new Person('Patrick Roos', 35);
console.log(person.age);

person.age = 34; // TypeError: Cannot set property age of #<Person> which has only a getter
