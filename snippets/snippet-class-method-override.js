class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name}`);
  }
}
class Admin extends Person {
  doAdminTasks() {
    console.log('doing admin tasks');
  }
  sayHello() {
    super.sayHello();
    console.log('hello from admin');
  }
}
let myAdmin = new Admin('Patrick');
myAdmin.sayHello();
