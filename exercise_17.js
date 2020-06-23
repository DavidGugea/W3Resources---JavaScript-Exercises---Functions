/*
17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
*/

let occ = string => string.split("").reduce((accumulator, value, valueIndex, defaultSplittedIndex) => (Object.keys(accumulator).includes(value) ? accumulator[value]++ : accumulator[value] = 1, accumulator), new Object());

console.log(occ("abbccc"));
