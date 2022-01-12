class Person {
  constructor(name) {
    this.name = name;
  }
}
class Admin extends Person {
  doAdminTasks() {
    console.log(`${this.name} doing admin tasks`);
  }
}
const myAdmin = new Admin('Patrick');
myAdmin.doAdminTasks();
