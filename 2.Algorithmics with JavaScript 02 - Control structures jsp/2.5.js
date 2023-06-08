const readlineSync = require("readline-sync");

let number = readlineSync.question("What's your favorite number? ");

while (number != 42) {
  console.log("Are you sure?");
  number = readlineSync.question("What's your favorite number? ");
}

if (number == 42) {
  console.log("Great.");
}

