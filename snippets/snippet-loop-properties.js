const myUser = {
  name: 'Patrick',
  age: 33,
};

// Properties durchloopen
for (const key in myUser) {
  console.log(key);
}
// Properties mit Werten durchloopen
for (const [key, value] of Object.entries(myUser)) {
  console.log(`${key}, ${value}`);
}
