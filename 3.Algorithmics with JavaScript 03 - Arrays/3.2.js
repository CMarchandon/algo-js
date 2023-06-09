/*Write a program that will calculate the average value of a given array.*/
let arr = [100, 101, 102];

let i = 0;

let resume = 0;

for (let each of arr) {
     resume = i += each;
  }

let answer = resume / arr.length ; 

console.log(answer);