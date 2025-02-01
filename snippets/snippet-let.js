/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

function letTest() {
  let x = 31;
  let y = 42;

  if (true) {
    let x = 71; // andere Variable
    let z = 80;
    console.log(x); // 71
    console.log(y); // 42
    console.log(z); // 80
  }

  console.log(x); // 31
  console.log(y); // 42
  console.log(z); // Error
}
letTest();
