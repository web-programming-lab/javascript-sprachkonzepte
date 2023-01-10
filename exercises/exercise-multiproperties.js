import { strict as assert } from 'assert';

// Vor dem Funktionsaufruf
let menu = { width: 200, height: 300, title: 'Titel' };

// Erster Lauf
multiProperties(menu);

//if(menu.width === 400 && menu.height === 600 && menu.title == 'Titel') {
//    console.log('first run ✓');

// Assert erster Lauf
assert.deepEqual(menu, {
  width: 400,
  height: 600,
  title: 'Titel',
});
//}

// Neues Property hinzugefügt
menu.newProperty = 10;

// Neues Property hinzugefügt
menu.justAnotherProperty = 'Hallo';

// Second run
multiProperties(menu);

// Assert zweiter Lauf
assert.deepEqual(menu, {
  width: 800,
  height: 1200,
  title: 'Titel',
  newProperty: 20,
  justAnotherProperty: 'Hallo',
});

// Nach dem 1. Funktionsaufruf
//menu = { width: 400, height: 600, title: "Titel" };
// Nach deem 2. Funktionsaufruf
//menu = { width: 800, height: 1200, newProperty = 20, title: "Titel", justAnotherProperty: "Hallo" };

// TBD implement me...
// eslint-disable-next-line no-unused-vars
function multiProperties(menu) {
  console.error('Implement me... 👩‍💻');
}
