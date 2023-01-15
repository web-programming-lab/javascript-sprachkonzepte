/* eslint-disable no-unused-vars */

// Properties von einem Objekt kopieren

const myUser = {
  name: 'Patrick',
  age: 33,
};
const clone = {};
for (let key in myUser) {
  clone[key] = myUser[key];
}
clone.name = 'Andreas';
// Bevorzugte Alternative ggü. dem Loop
const clone2 = {
  ...clone,
};
const clone3 = Object.assign({}, clone);

//
// Deep Clone eines Objektes
// Blog-Post: https://www.workingsoftware.dev/how-to-deep-clone-in-javascript/
//

// Self-Made
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const myExampleObject = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  address: {
    street: 'Mainstreet 1',
    city: 'Berlin',
  },
};

const myExampleDeepClone = deepClone(myExampleObject);
const myExampleStructuredClone = structuredClone(myExampleObject);
const myExampleJsonParse = JSON.parse(JSON.stringify(myExampleObject));

const myExampleAssign = Object.assign({}, myExampleObject); // shallow copy !
const myExampleSpreadSyntax = { ...myExampleObject }; // shallow copy !

console.log('DeepClone', myExampleDeepClone === myExampleObject); // false
console.log(
  'DeepClone address',
  myExampleDeepClone.address === myExampleObject.address
); // false

console.log('StructuredClone', myExampleStructuredClone === myExampleObject); // false
console.log(
  'StructuredClone address',
  myExampleStructuredClone.address === myExampleObject.address
); // false

console.log(
  'JSON Parse / JSON stringify',
  myExampleJsonParse === myExampleObject
); // false

console.log(
  'JSON Parse / JSON stringify address',
  myExampleJsonParse.address === myExampleObject.address
); // false

console.log('Assign', myExampleAssign === myExampleObject); // false
console.log(
  'Assign address',
  myExampleAssign.address === myExampleObject.address
); // true (!)

console.log('Spread Syntax', myExampleSpreadSyntax === myExampleObject); // false
console.log(
  'Spread Syntax address',
  myExampleSpreadSyntax.address === myExampleObject.address
); // true (!)
