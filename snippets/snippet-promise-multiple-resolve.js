/* eslint-disable no-unused-vars */

const myPromise = new Promise((resolve, reject) => {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
myPromise.then(console.log);
