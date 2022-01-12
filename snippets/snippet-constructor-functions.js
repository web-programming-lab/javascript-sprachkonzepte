function Student(name) {
  // this = {}; -> implizit
  this.name = name;
  // return this; -> implizit
}
let student = new Student('Patrick');
console.log(student.name);
