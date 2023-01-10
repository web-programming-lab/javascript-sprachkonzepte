/* eslint-disable no-unused-vars */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
promise.then((result) => {
  console.log(result);
  return ++result;
});
promise.then((result) => {
  console.log(result);
  return ++result;
});
