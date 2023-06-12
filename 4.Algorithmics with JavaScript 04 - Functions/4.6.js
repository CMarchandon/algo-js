/* Create a function factorial(a) that returns the factorial of a number.

That function must be recursive. */ 

/* const readlineSync = require("readline-sync");
let x = readlineSync.questionInt("Please give me a number: ");

function factorial(x) {
  let result = 1;
  for (let y = 1; y <= x; y++) {
    result *= y;
  }
  return result;
}

console.log(factorial(x)); */

const readlineSync = require("readline-sync");
let x = readlineSync.questionInt("Please give me a number: ");

function factorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

console.log(factorial(x));
