function error(error) {
  console.log(`Something failed: ${error}`);
}

function first() {
  console.log('first');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = 42;
      resolve(result);
    }, 1000);
  });
}

function second(result) {
  console.log('second');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newResult = result + 1;
      if (newResult) {
        resolve(newResult);
      } else {
        reject('Something went wrong (second)');
      }
    }, 1000);
  });
}

function third(result) {
  console.log('third');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finalResult = result + 2;
      if (finalResult) {
        resolve(finalResult);
      } else {
        reject('Something went wrong (third)');
      }
    }, 1000);
  });
}

first()
  .then(second)
  .then(third)
  .then((result) => console.log(`Got the final result ${result}`))
  .catch(error);
