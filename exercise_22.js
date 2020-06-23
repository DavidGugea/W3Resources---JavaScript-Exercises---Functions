/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/

let count_occ = (string, chr) => string.split("").reduce((accumulator, value, valueIndex, splittedString) => (value == chr ? accumulator += 1 : null, accumulator) , 0); 

console.log(count_occ('w3resource.com', 'o'));
