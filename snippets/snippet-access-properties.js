const user = {
    name: 'patrick',
    age: 34
};
console.log(user.name); // Patrick
console.log(user['name']); // Patrick
// Computed Properties
let fruit = prompt('Which fruit?', 'apple');
let bag = {
    [fruit] : 5
};
console.log(bag.apple); // 5