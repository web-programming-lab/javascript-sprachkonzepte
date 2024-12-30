const user = {};

console.log(user.mysuperduperproperty === undefined); // true

const myUser = {
  name: 'Patrick',
  age: 35,
};

// Properties prüfen
console.log('name' in myUser); // true
console.log('key' in myUser); // false
