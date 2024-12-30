const myBigInt = 123n + 12n;
const comareInt = 9007199254740992 === 9007199254740993; // true
const comareBigInt = 9007199254740992n === 9007199254740993n; // false

console.log(myBigInt); // 135n
console.log(comareInt); //true
console.log(comareBigInt); // false
console.log(typeof myBigInt); //bigint
