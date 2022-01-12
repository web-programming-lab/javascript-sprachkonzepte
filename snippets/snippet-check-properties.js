const user = {};

console.log(user.mysuperduperproperty === undefined);

const myUser = {
  name: 'Patrick',
  age: 35,
};

// Properties prüfen
console.log('name' in myUser);
console.log('key' in myUser);
