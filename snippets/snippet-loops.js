const arr = [3, 5, 7];
arr.foo = 'hallo';
for (const i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
for (const i of arr) {
  console.log(i); // logs "3", "5", "7"
}
