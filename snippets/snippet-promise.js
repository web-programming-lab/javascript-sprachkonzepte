const promise = new Promise((resolve, reject) => {
  // der Code, der sobald ausgeführt
  // wird, wenn die Promise erstellt wird.
  // z.B.
  setTimeout(() => resolve('its done.'), 1000);
  //setTimeout(() => reject(new Error('ooops…')), 2000);
});

promise.then((result) => {
  console.log(promise);
  console.log(result); // It's done.
});
