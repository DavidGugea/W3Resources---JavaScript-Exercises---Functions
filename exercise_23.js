/*
23. Write a JavaScript function to find the first not repeated character. Go to the editor
Sample arguments : 'abacddbec'
Expected output : 'e'
*/

let first_noRepeatChar = string => {
	let chars = string.split("").reduce((accumulator, value, valueIndex, defaultSplittedString) => (Object.keys(accumulator).includes(value) ? accumulator[value] += 1 : accumulator[value] = 1, accumulator), new Object());

	let keys = Object.keys(chars);
	for(let i = 0 ; i < keys.length ; i++){
		if(chars[keys[i]] == 1){
			return keys[i];
		};
	};

	return null;
}

console.log(first_noRepeatChar('abacddbec'));
