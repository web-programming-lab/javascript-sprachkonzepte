/* eslint-disable no-unused-vars */

new Promise(function (resolve, reject) {
  // producer
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    // then 1
    console.log(result);
    return ++result;
  })
  .then(function (result) {
    // then 2
    console.log(result);
  });
