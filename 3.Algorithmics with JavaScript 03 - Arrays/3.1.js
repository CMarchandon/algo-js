/* Write a program that will add all the elements of an array. */

let arr = [1, 2, 3, 4, 5];

let i = 0;

let resume = 0;

for (let each of arr) {
     resume = i += each;
  }

  console.log(resume);