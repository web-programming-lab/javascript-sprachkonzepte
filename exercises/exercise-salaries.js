import { strict as assert } from 'assert';

const salaries = {
  patrick: 100000,
  andreas: 110000,
  gwendolin: 91000,
  nayoona: 45000,
};

// eslint-disable-next-line no-unused-vars, no-shadow
function sumSalaries(salaries) {
  // TBD
}

assert.equal(346000, sumSalaries(salaries));
