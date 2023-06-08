/*Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6. */

const readlineSync = require("readline-sync");

// Asking a number 
let n = readlineSync.questionInt("Give me a number (btw his nickname will be 'n') ");

//this is used for making the sum after
let x = 0;


//Asking a different number "n" times
for (let i = 0; i < n; i++){
    let num = readlineSync.questionInt("Give me another number ");

//Making the sum of the differents answer of the user with the base value of 0
    x+= num;
    }

//Giving the whole answer 
console.log("the sum is " + x )




