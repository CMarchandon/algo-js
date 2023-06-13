/* In the code below, there is a class defined, named: Cat. Copy-paste it in your js file.

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

Test the class: Display in the console two instances of the class Cat: Skitty, 9 years and Pixel, 6 years. */ 

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let Skitty = new Cat ("Skitty" , "9 years orld");
let Pixel = new Cat ("Pixel" , "6 years orld");
let myCat = new Cat ("Alice", "10 years old")

console.log({ Skitty, Pixel, myCat });