/* Create a function named randomizeCast(tvSerie) 
that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) 
and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie. */ 
const readlineSync = require("readline-sync");

/**
 * Prompts the user to enter details about a TV series and returns the series object.
 *
 * @returns {Object} - The series object containing the serieName, productionYear, and castMembers.
 */
function askTvSerie() {
    // Prompt the user to enter the TV series name
    let userInputSerieName = readlineSync.question("What's your favorite TV serie? ");
    
    // Prompt the user to enter the year of production
    let userInputProductionYear = readlineSync.question("What's the year of production? ");

    // Create an empty array to store the cast members
    let castMembers = [];
    let userInputCastMembers;

    // Prompt the user to enter cast members until they enter "q"
    do {
        // Prompt the user to enter a cast member
        userInputCastMembers = readlineSync.question('Enter one or multiple cast members, enter "q" when you\'re done: ');

        // If the user did not enter "q", add the cast member to the array
        if (userInputCastMembers !== "q") {
            castMembers.push(userInputCastMembers);
        }
    } while (userInputCastMembers !== "q");

    // Create a series object with the entered information
    let serie = {
        serieName: userInputSerieName,
        productionYear: userInputProductionYear,
        castMembers: castMembers
    };

    // Return the series object
    return serie;
}

// Call the askTvSerie function to get the user's input
let userAnswer = askTvSerie();


/**
 * Randomizes the order of elements in the cast array.
 *
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} - The shuffled array.
 */
function randomizeCast(cast) {
    const shuffledCast = cast.sort(() => Math.random() - 0.5);   
    console.log("We will use this cast for our next series: " + shuffledCast);
}

// Call the randomizeCast function with the cast members array
randomizeCast(userAnswer.castMembers);
