/* eslint-disable no-undef */

const user = {
  name: 'patrick',
  age: 34,
};

console.log(user.name); // Patrick
console.log(user['name']); // Patrick

const { name, age } = user; // Destructuring assignment
console.log(name, age); // Patrick 34

// Computed Properties
let fruit = 'apple';
let bag = {
  [fruit]: 5,
};
console.log(bag.apple); // 5
