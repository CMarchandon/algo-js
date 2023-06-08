const readlineSync = require("readline-sync");

let minAge= readlineSync.question('Give me a age minimum');
let maxAge= readlineSync.question('Give me a age maximum');

if (minAge > maxAge) {
    console.log("Error: The minimum age cannot be greater than the maximum age.");
  } 
else {
    let currentAge = parseInt(readlineSync.question("Your current age: "));
  
    if (currentAge >= minAge && currentAge <= maxAge) {
      console.log("Congratulations, your current age is between the minimum and maximum age.");
    } else if (currentAge < minAge) {
      console.log("Sorry, you're too young.");
    } else if (currentAge > maxAge) {
      console.log("Sorry, you're too old.");
    }
  }
