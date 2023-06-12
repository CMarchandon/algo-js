/* Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. 
That function must return the distance between those two points.*/ 

const readlineSync = require("readline-sync");

/**
 * Calculates the distance between two points A and B in a 2D space.
 *
 * @param {number[]} pointA - The coordinates of point A as an array [x, y].
 * @param {number[]} pointB - The coordinates of point B as an array [x, y].
 * @returns {number} - The distance between the two points.
 */
function calcDistance(pointA, pointB) {
  let deltaX = pointB[0] - pointA[0];
  let deltaY = pointB[1] - pointA[1];
  let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  return distance;
}

console.log("Hi, we will calculate the distance between the coordinates of two different points A and B in a 2D space.");

let x1 = readlineSync.questionInt("Please give me x1: ");
let y1 = readlineSync.questionInt("Please give me y1: ");
let x2 = readlineSync.questionInt("Please give me x2: ");
let y2 = readlineSync.questionInt("Please give me y2: ");

let pointA = [x1, y1];
let pointB = [x2, y2];

let distance = calcDistance(pointA, pointB);
console.log(`The distance between Point A = [${pointA}] and Point B = [${pointB}] is ${distance.toFixed(2)}.`);

/* Still didn't understand all the math I've used for that, to be honest */
