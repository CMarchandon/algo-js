/* Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. 
That program must use the function you created.

Write a documentation for the calcSurface function. */
const readlineSync = require("readline-sync");

//ask for the lenth and the witdh of a triangle to the user
let a = readlineSync.questionInt("Give the lenght of your rectangle");
let b = readlineSync.questionInt("Give the width of your rectangle");

//Fuction than calculate the surface of the rectagle with te given value en display it
function calcSurface(a,b){
let surface= a*b;
console.log("The surface of your triangle is " + surface + " .")
}

// Calling the function
calcSurface(a,b);


