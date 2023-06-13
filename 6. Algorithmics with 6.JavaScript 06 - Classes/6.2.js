/* Create a Person class. 
It will have two properties, firstname and lastname, and method sayHello, which will return "Hello, [firstname] [lastname]!".

Test the class: Create an instance of the Person class and return the value of the sayHello 
method inside the console. */ 
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log("Hello, " + this.firstName);
    }
}

let personOne = new Person("John", "Doe");

personOne.sayHello();

