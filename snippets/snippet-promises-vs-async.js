import fetch from 'node-fetch';

async function fetchJsonViaAsync(url) {
  try {
    const request = await fetch(url); // async
    const text = await request.text(); // async
    return JSON.parse(text); // sync
  } catch (error) {
    console.error(error);
  }
}

function fetchJsonViaPromises(url) {
  return fetch(url) // async
    .then((request) => request.text()) // async
    .then((text) => JSON.parse(text)) // sync
    .catch((error) => {
      console.error(error);
    });
}

const url = 'https://5d0e3cd1eba6ef0014561072.mockapi.io/students';

const asyncResult = fetchJsonViaAsync(url).then(console.log);
console.log('-------');
const promisesResult = fetchJsonViaPromises(url).then(console.log);

console.log(asyncResult);
console.log(promisesResult);
