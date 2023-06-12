/* Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

    Name
    Production year
    Names of the cast members (there can be as much as the user want)

That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format. */

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

// Display the information about the series
console.log("Information about your serie:", userAnswer);
