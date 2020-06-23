/*
16. Write a JavaScript function to extract unique characters from a string. Go to the editor
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

let extract_unique = string => string.split("").reduce((accumulator, value, valueIndex, defaultSplittedIndex) => (!accumulator.includes(value) ? accumulator.push(value) : undefined, accumulator ), new Array()).join("");

console.log(extract_unique("thequickbrownfoxjumpsoverthelazydog"));
