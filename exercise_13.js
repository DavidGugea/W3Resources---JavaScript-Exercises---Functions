/*
13. Write a JavaScript function to compute the factors of a positive integer.
*/

let computeFactors = number => {
	let factors = new Array();

	for(let i = 0 ; i <= number ; i++){
		number % i == 0 ? factors.push(i) : undefined;
	}

	return factors;
};

console.log(computeFactors(2));
console.log(computeFactors(15));
