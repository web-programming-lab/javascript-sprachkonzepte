/* eslint-disable no-redeclare */
/* eslint-disable no-constant-condition */

function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // gleiche Variable x, wird nach oben gueltig! Warning Duplicate declaration
    var y = 80;
    console.log(x); // 71
  }
  console.log(x); // 71
  console.log(y); // 80
}
varTest();
