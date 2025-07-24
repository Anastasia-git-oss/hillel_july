let bigNumber = 10369;

let num1 = bigNumber % 10;
num1 = bigNumber - num1;
let Sum = num1 / 10;

const digit5 = bigNumber % 10;

num1 = Sum % 10;
num1 = Sum - num1;
let Sum2 = num1 / 10;

const digit4 = Sum % 10;

num1 = Sum2 % 10;
num1 = Sum2 - num1;
let Sum3 = num1 / 10;

const digit3 = Sum2 % 10;

num1 = Sum3 % 10;
num1 = Sum3 - num1;
let Sum4 = num1 / 10;

const digit2 = Sum3 % 10;

const digit1 = Sum4 % 10;

console.log(digit1, digit2, digit3, digit4, digit5);
