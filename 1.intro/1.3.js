const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Enter your first name');
console.log("Hello " + firstName);