//Aske prompt to the user
const readlineSync = require("readline-sync");

//Var for asking
let numberOne = readlineSync.question('Enter a integer number');
let numberTwo = readlineSync.question('Enter another integer  number  (we will display the rest")');

//final calc
let answer = numberOne%numberTwo;

//Answer displayed to the user
console.log("The answer is " + answer)