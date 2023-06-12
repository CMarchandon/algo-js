/* Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

Write a documentation for the rand10() function.

You will have to search on Google how to generate random numbers in JavaScript for this exercise. */

//Function to have a random number between 1 and 10
function rand10(){

/*Maths floor (built in function) is for giving integer numbers; math random is for givin a random number (built-in fucntion).
Math random will multiply 1 by a random numbers between 1 and 10. 
*/
    let x = Math.ceil(Math.random()*10);
   console.log(x)
}

rand10();

