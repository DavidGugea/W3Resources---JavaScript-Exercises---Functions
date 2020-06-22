/*
12. Write a JavaScript function which says whether a number is perfect. Go to the editor
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

let isPerfect = number => {
	let divisors = new Array();

	for(let i = 1 ; i < number ; i++){
		number % i == 0 ? divisors.push(i) : null;
	}

	let sum = divisors.reduce((accumulator, value, valueIndex, DefaultDivisorsArray) => (accumulator += value, accumulator), 0);

	let firstCheck = sum === number;
	let secondCheck = ( sum + number ) / 2 === number;

	return firstCheck && secondCheck;
}

console.log(isPerfect(8128));
