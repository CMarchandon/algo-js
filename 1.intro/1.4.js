const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Enter your first name');
let lastName = readlineSync.question('Enter your last name');
let city = readlineSync.question('Enter your city');
console.log("Hello " + firstName + " " + lastName + " you live in " + city + ".");