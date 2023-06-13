/* In the code below, there is a prewritten class named: Animal.
From this class, create the two classes, Cat and Dog. They will each have two properties, 
name and greeting (the second property must be static).

    class Animal {
        sayHello() {
            return `${this.greeting}! I'm ${this.name}!`;
        }
    }

Test the class: Create an instance of the Dog class and an instance of the Cat class 
and display the return value of the sayHello method inside the console. */

//Class animal
class Animal {
    //Constructor with the variable of the pet race
    constructor (petName){
        //define the variable 
        this.petName = petName;
    }
        // define a static greeting for every "Animal"
        static greeting = "Hello";
    /**
     * @param {var}
     * @returns {Console.log}
     * Method of the class (function) to say "Hello! I'm <Animal>"
     * */
    sayHello() {
        return `${Animal.greeting}! I'm ${this.petName}!`;
        // "Animal.greeting" is easier to read but "this.constructor.greeting" is easier to maintain. 
    }
}

let humanBestFriend = new Animal("Dog");
let humanLord = new Animal("Cat");

console.log(humanBestFriend.sayHello());
console.log(humanLord.sayHello());