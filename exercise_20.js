/*
20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

let generate_string_id = string_id_length => {
	let lowercase_alphabet = new Array();
	let uppercase_alphabet = new Array();
	let numbers = new Array();

	// Lowercase-Alphabet
	for(let charCode = "a".charCodeAt(0) ; charCode < "z".charCodeAt(0) ; charCode++){
		lowercase_alphabet.push(String.fromCharCode(charCode));
	}

	// Uppercase-Alphabet
	for(let charCode = "A".charCodeAt(0) ; charCode < "Z".charCodeAt(0) ; charCode++){
		uppercase_alphabet.push(String.fromCharCode(charCode));
	}

	// Numbers
	for(let i = 0 ; i < 10 ; i++){
		numbers.push(i);
	}

	let all = lowercase_alphabet.concat(uppercase_alphabet).concat(numbers);

	// Randomize string id
	let string_id = new String();
	for(let i = 0 ; i < string_id_length ; i++){
		string_id += all[Math.floor(Math.random() * all.length)];	
	}

	// Return the randomized string id
	return string_id;
};

console.log(generate_string_id(26));
