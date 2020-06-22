/*
1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223
*/

let reverseNumber = number => number.split("").reduce((accumulator, value) => (accumulator.splice(0, value), accumulator), new Array()).join("");

console.log(reverseNumber(12345));
