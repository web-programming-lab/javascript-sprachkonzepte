/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function successCallback() {
  console.log('success');
}

function errorCallback() {
  console.log('error');
}

// Pass callbacks to the function
function createFileAsync(content, success, error) {
  console.log('createFileAsync');
  setTimeout(() => {
    if (content) {
      success();
    } else {
      error();
    }
  }, 1000);
}

createFileAsync('content', successCallback, errorCallback);

// Return a promise
function createFileAsyncPromise(content) {
  return new Promise((resolve, reject) => {
    console.log('createFileAsyncPromise');
    setTimeout(() => {
      if (content) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

// Attach callbacks to the promise project via then
createFileAsyncPromise('content').then(successCallback, errorCallback);
