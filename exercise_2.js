/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

let isPalindrome = string => string.replace(" ", "") === string.split("").reverse().join("").replace(" ", "");

console.log(isPalindrome("abcd"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));
