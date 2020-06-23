/*
26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
*/

let longest_noRepeat_Char = string => {
	let noRepeatStringArray = string.split("").reduce((accumulator, value, valueIndex, defaultSplittedIndex) => (!accumulator.includes(value) ? accumulator.push(value) : null, accumulator), new Array());

	console.log(noRepeatStringArray.join(""));

	let startIndex = string.length - noRepeatStringArray.length;
	console.log(startIndex);
	let endIndex = string.length - 1;
	
	let repeatingChars = new Array();
	string.substring(startIndex, string.length).split("").forEach(chr => {
		repeatingChars.includes(chr) ? endIndex-- : repeatingChars.push(chr);
	});

	return string.substring(startIndex, endIndex+1);
}

console.log(longest_noRepeat_Char("google.com"));
