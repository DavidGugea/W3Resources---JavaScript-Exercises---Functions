/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox 
*/

let convertFirstToUppercase = string => string.split(" ").map(value => value[0].toUpperCase() + value.substring(1, value.length)).join(" ");


console.log(convertFirstToUppercase("the quick brown fox"));
