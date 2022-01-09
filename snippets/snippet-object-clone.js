const myUser = {
    name: 'Patrick', age: 33
};
const clone = {};
for (let key in myUser) {
    clone[key] = myUser[key];
}
clone.name = 'Andreas';
// Bevorzugte Alternative ggü. dem Loop
const clone2 = {
    ...clone
};
const clone3 = Object.assign({}, clone);