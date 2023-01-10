import { strict as assert } from 'assert';

//
// TBD implement Ladder here
/* eslint-disable no-undef */
//

let ladder = new Ladder();
ladder.up();
assert.equal(ladder.currentStep(), 1, 'should go one step up');

console.log('current step: %s', ladder.step);

ladder.down();
assert.equal(ladder.currentStep(), 0, 'should go one step down');

assert.equal(
  new Ladder().up().up().up().down().currentStep(),
  2,
  'should go three steps up and one step down (in a chain)'
);
