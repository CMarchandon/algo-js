const readlineSync = require("readline-sync");

function rand10() {
  let x = Math.ceil(Math.random() * 10);
  return x;
}

function multiRand(n) {
  let arr = [];
  arr.length = n;
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
  }
  return arr;
}

let userInput = readlineSync.questionInt("Please give me a number for an array: ");
let arr = multiRand(userInput);
