/*  */

const readlineSync = require("readline-sync");

let number = readlineSync.question("Give me a number between 1 and 7: ");

switch (number) {
  case "1":
    console.log("lundi");
    break;
  case "2":
    console.log("mardi");
    break;
  case "3":
    console.log("mercredi");
    break;
  case "4":
    console.log("jeudi");
    break;
  case "5":
    console.log("vendredi");
    break;
  case "6":
    console.log("samedi");
    break;
  case "7":
    console.log("dimanche");
    break;
  default:
    console.log("Invalid number");
    break;
}



