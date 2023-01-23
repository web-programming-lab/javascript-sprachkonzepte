function failureCallback(error) {
  console.log(`Something failed: ${error}`);
}

function first(callback, errorCallback) {
  console.log('first');
  setTimeout(() => {
    const result = 42;
    if (result) {
      callback(result);
    } else {
      errorCallback('Something went wrong');
    }
  }, 1000);
}

function second(result, callback, errorCallback) {
  console.log('second');
  setTimeout(() => {
    const newResult = result + 1;
    if (newResult) {
      callback(newResult);
    } else {
      errorCallback('Something went wrong');
    }
  }, 1000);
}

function third(result, callback, errorCallback) {
  console.log('third');
  setTimeout(() => {
    const finalResult = result + 2;
    if (finalResult) {
      callback(finalResult);
    } else {
      errorCallback('Something went wrong');
    }
  }, 1000);
}

first(function (result) {
  second(
    result,
    function (newResult) {
      third(
        newResult,
        function (finalResult) {
          console.log(`Got the final result: ${finalResult}`);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
