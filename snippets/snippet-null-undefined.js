const myNullValue = null;
const myUndefinedValue = undefined;
console.log(myNullValue); // null
console.log(myUndefinedValue); // undefined

// Nullish coalescing operator (ES2020)
// Der Nullwert-Koaleszenz-Operator (??) ist ein logischer Operator, der seinen rechten Operanden zurückgibt, wenn sein linker Operand null oder undefined ist, und ansonsten seinen linken Operanden zurückgibt.
console.log(myNullValue ?? 'example-value'); // example-value
console.log(myUndefinedValue ?? 'example-value'); // example-value
