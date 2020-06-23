/*
25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/

let Longest_Country_Name_oneLine = arr => arr.reduce((accumulator, value, valueIndex, countryArray) => (accumulator[value.length] = value, accumulator) , new Object())[Math.max(...arr.map(country => country.length))];

let Longest_Country_Name = arr => {
	let longest;
	let trackLength;

	arr.forEach(country => {
		if(!trackLength || country.length > trackLength){
			longest = country;
		}
	});


	return longest;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
