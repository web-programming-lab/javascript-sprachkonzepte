const demoOject = {
  // creating an object with object literal
  property1: 1,
  myMethod() {
    return 2;
  },
  get myAccessor() {
    return this.property1;
  },
  set myAccessor(value) {
    this.property1 = value;
  },
};
// Accessing object
console.log(demoOject.property1); // 1
console.log(demoOject.myMethod()); // 2
console.log(demoOject.myAccessor); // 1
demoOject.myAccessor = 5;
console.log(demoOject.myAccessor); // 5
