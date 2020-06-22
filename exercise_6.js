/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

let longestSubstring = string => {
	let substringsAndLengthsOfThem = string.split(" ").reduce((accumulator, substring) => (accumulator[substring] = substring.length, accumulator), new Object());	

	let keys = Object.keys(substringsAndLengthsOfThem);
	let values = Object.values(substringsAndLengthsOfThem);

	return keys[values.indexOf(Math.max(...values))];
}

console.log(longestSubstring("Web Developlment Tutorial"));
