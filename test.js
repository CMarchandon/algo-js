//import the library
const readlineSync = require("readline-sync");
//Say it's working
console.log("It works !!!");
//ask you for a username and display it after
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
