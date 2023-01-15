/* eslint-disable no-unused-vars */

class Person {
  #age; // Private class fields
  _name = '';
  constructor(name, age) {
    this._name = name;
    this.#age = age;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get age() {
    return this.#age;
  }
}

const person = new Person('Patrick Roos', 35);
person.name = 'Andreas Schürmann';
console.log(person.name);

person.age = 34; // TypeError: Cannot set property age of #<Person> which has only a getter
