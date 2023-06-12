/* Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. 
To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created. */

const readlineSync = require("readline-sync");

**function rand10() {
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
let userInput = readlineSync.questionInt("Please give me a number for an array: ");
let arr = multiRand(userInput);

function average(arr){
    let i = 0;
    let resume = 0;
    for (let each of arr) {
        resume = i += each;
    }
    let answer = resume / arr.length ; 
    return answer;
}

function min(arr) {
    let minValue = Math.min(...arr);
    return minValue;
}

function max(arr) {
    let maxValue = Math.max(...arr);
    return maxValue;
}

let answer = average(arr);
let minValue = min(arr);
let maxValue = max(arr);


console.log("About your array : " + arr + " the averrage numbers are : " + answer + ", the minimum number is : " + minValue + " the maximum number is : " + maxValue + " .");
