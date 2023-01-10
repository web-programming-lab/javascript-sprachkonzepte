/* eslint-disable no-undef */

const newMessage = 'test'; // globale Variable
function printSth() {
  // function declaration
  const myMessage = 'hello'; // lokale Variable
  console.log(myMessage);
  console.log(newMessage);
}
printSth();
console.log(myMessage); // error, da lokale Variable
console.log(newMessage); // Kein Fehler, da globale Variable
