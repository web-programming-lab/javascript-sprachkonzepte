let add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})(); // IIFE (Immediately Invoked Function Expression) or Self-Executing Anonymous Function
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
