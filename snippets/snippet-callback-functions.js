function display(result) {
  console.log(`Result: ${result}`);
}

function sum(num1, num2, callback) {
  const result = num1 + num2;
  callback(result);
}

sum(1, 2, display);
