/* Create a class named person. 
It will have two properties, firstname and lastname, as well as a getter name, 
which will return "[firstname] [lastname]", 
and a setter name, which will divide the full name on the basis of a space: 
the first element will be the firstname, the second the lastname.

Test the class: Create an instance of the person class and display the value of the name inside the console, 
then assigns a new value to it and displays the state of the instance inside the console at the end of the 
process. */

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(v) {
      const [firstName, lastName] = v.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  let boy = new Person("John", "Doe");
console.log(boy)

