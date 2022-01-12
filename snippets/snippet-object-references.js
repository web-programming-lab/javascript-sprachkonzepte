const myUser = {
  name: 'Patrick',
  age: 33,
};

const myUser2 = myUser; // Zuweisen der Referenz
myUser2.name = 'Andreas';
console.log(myUser.name); // Andreas
