import { strict as assert } from 'assert';

let calculator = {
  // TBD
};

// 1. Teil
calculator.read(1, 2);
assert.equal(calculator.sum(), 3, 'should sum two values');

calculator.read(2, 2);
assert.equal(calculator.mul(), 4, 'should mult two values');

// 2. Teil
calculator.read(1, 2, 3, 4);
assert.equal(calculator.sum(), 10, 'should sum more than two values');

calculator.read(1, 2, 3);
assert.equal(calculator.mul(), 6, 'should mult more than two values');

calculator.read(1, 2, '3');
assert.equal(calculator.mul(), 6, 'should handle strings and convert it');

calculator.read(1, '2', 4);
assert.equal(calculator.sum(), 7, 'should handle strings and convert it');

assert.throws(() => {
  calculator.read(1, 'adba', 4);
}, TypeError);
