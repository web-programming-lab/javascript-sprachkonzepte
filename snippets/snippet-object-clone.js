/* eslint-disable no-unused-vars */
import { strict as assert } from 'assert';

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

  // eslint-disable-next-line no-shadow
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    // eslint-disable-next-line no-prototype-builtins
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

// Deep clone
assert.equal(myExampleDeepClone === myExampleObject, false);
assert.equal(myExampleDeepClone.address === myExampleObject.address, false);

assert.equal(myExampleStructuredClone === myExampleObject, false);
assert.equal(
  myExampleStructuredClone.address === myExampleObject.address,
  false,
);

assert.equal(myExampleJsonParse === myExampleObject, false);
assert.equal(myExampleJsonParse.address === myExampleObject.address, false);

// Referenzen werden kopiert (shallow copy)
assert.equal(myExampleSpreadSyntax === myExampleObject, false);
assert.equal(myExampleSpreadSyntax.address === myExampleObject.address, true); // (!)

assert.equal(myExampleAssign === myExampleObject, false);
assert.equal(myExampleAssign.address === myExampleObject.address, true); // (!)
