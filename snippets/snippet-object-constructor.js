const demoObject2 = new Object(); // Creation via new Object Constructor
demoObject2.property1 = 1;
demoObject2.myMethod = () => {
  return 2;
};
Object.defineProperty(demoObject2, 'myAccessor', {
  get() {
    return this.property1;
  },
  set(value) {
    this.property1 = value;
  },
});
// Accessing object
console.log(demoObject2.property1); // 1
console.log(demoObject2.myMethod()); // 2
console.log(demoObject2.myAccessor); // 1
demoObject2.myAccessor = 5;
console.log(demoObject2.myAccessor); // 5
