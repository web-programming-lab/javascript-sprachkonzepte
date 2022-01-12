const myArray2 = ['a', 'b', 'c']; // Array literal
for (const [index, value] of myArray2.entries()) {
  console.log(index, value);
}
// Output
// 0 a
// 1 b
// 2 c
const myArray3 = myArray2.slice(1, 2);
console.log(myArray3); // ['b']
const myArray4 = myArray2.map((item) => item + 'x');
console.log(myArray4); // ['ax', 'bx', 'cx']
const myArray5 = myArray4.filter((item) => item === 'bx');
console.log(myArray5); // ['bx']
