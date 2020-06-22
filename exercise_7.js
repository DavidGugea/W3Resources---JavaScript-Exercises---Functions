/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/

let countVowels = string => string.split("").reduce((accumulator, value, valueIndex, splittedStringArray) => (['a', 'e', 'i', 'o', 'u'].includes(value) ? accumulator++ : null, accumulator), 0);

console.log(countVowels("The quick brown fox"));
