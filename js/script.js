"use strict";

// function showFirstMessage(text) {
//     alert(text);
//     let num = 20;
// }

// showFirstMessage('Hello world!!!');
// console.log(num);

//function calc(a, b) {
// const calc = function (a, b) {    
//     return a + b;
// }

const calc = (a, b) => a + b; // то же самое, что и { return a + b }

//let calc2 = calc;

console.log(calc(5434, 47567567465763));
console.log(calc(5656565656565, 6666666666));
console.log(calc(23, 4556));

const logger = function() {
    console.log('Hello');
};

logger();

const cal = (a, b) => {
    console.log('1');
    return a + b;
};