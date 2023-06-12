/* By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. 
You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers. */

const readlineSync = require("readline-sync");

function rand10() {
  let x = Math.ceil(Math.random() * 10);
  return x;
}

function multiRand(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = rand10();
  }
  return arr;
}

let userInput = readlineSync.question("Please give me a number for an array: ");
let arr = multiRand(userInput);
console.log(arr);
