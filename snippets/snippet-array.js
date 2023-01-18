const myArray = ['a', 'b', 'c']; // Array literal
console.log(myArray[0]); // 'a'
myArray[0] = 'x';
console.log(myArray[0]); // 'x'
console.log(myArray.length); // 3
myArray.length = 1;
console.log(myArray); // ['x']
myArray.push('y');
console.log(myArray); // ['x', 'y'];
myArray.push(...['z', '1']);
console.log(myArray); // ['x', 'y', 'z', '1'];
console.log(typeof myArray); // object

let a, bc;
[a, ...bc] = myArray;
console.log(a, bc); // 'a' ['b', 'c']
