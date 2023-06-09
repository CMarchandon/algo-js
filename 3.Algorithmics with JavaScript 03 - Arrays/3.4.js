/* Write a program that will display the minimum and maximum elements of a given array. */ 

let givenArray = [1,2,3,4,5,6];

let maxValue = Math.max(...givenArray);
let minValue = Math.min(...givenArray);

console.log("The minimum value is " + minValue + " and the maximum Value is " + maxValue + ".");
