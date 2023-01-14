import { strict as assert } from 'assert';

// eslint-disable-next-line no-unused-vars
function findNumber(a, b, c) {
  //TBD
}

// Aufgabe 1
assert.equal(2, findNumber(1, 1, 2));
assert.equal(1, findNumber(1, 1, 1));
assert.equal('Not any numbers are equal', findNumber(1, 2, 3));
assert.equal(3, findNumber(2, 3, 2));

// Aufgabe 2
assert.equal(findNumber('2', '2', 1), null); // Strings als Parameter nicht erlaubt
assert.equal(findNumber(1.2, 1.2, 3), null);
