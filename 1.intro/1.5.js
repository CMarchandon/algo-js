//Aske prompt to the user
const readlineSync = require("readline-sync");

//Var for asking
let numberOne = readlineSync.question('Enter a number with a decimal');
let numberTwo = readlineSync.question('Enter another number with a decimal (we will multiply them")');

//var for keeping only the integer
let integrerOne = (Math.trunc(numberOne));

//final calc
let answer = integrerOne*numberTwo;

//Answer displayed to the user
console.log("The answer is " + answer)