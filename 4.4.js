/* Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. 
To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created. */

const readlineSync = require("readline-sync");

/**
 * Generates a random number between 1 and 10.
 *
 * @returns {number} The randomly generated number.
 */
function rand10() {
  let x = Math.ceil(Math.random() * 10);
  return x;
}

/**
 * Generates an array of random numbers between 1 and 10.
 *
 * @param {number} n The number of random numbers to generate.
 * @returns {number[]} The array of random numbers.
 */
function multiRand(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = rand10();
  }
  return arr;
}

let userInput = readlineSync.questionInt("Please give me a number for an array: ");
let arr = multiRand(userInput);

/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The average value of the numbers.
 */
function average(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  let avg = sum / arr.length;
  return avg;
}

/**
 * Finds the minimum element in an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The minimum value in the array.
 */
function min(arr) {
  let minValue = Math.min(...arr);
  return minValue;
}

/**
 * Finds the maximum element in an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The maximum value in the array.
 */
function max(arr) {
  let maxValue = Math.max(...arr);
  return maxValue;
}

let answer = average(arr);
let minValue = min(arr);
let maxValue = max(arr);

console.log("About your array: " + arr + ", the average number is: " + answer + ", the minimum number is: " + minValue + ", and the maximum number is: " + maxValue + ".");


