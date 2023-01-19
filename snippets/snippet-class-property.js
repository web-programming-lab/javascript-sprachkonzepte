/* eslint-disable no-unused-vars */

class Person {
  _name = '';
  constructor(name, age) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

const person = new Person('Patrick Roos', 35);
person.name = 'Andreas Schürmann';
console.log(person.name);
