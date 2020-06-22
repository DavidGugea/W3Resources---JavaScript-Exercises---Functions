/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

let isPrimeNumber = number => {
	let counter = 1;

	for(let i = 1 ; i < Math.ceil(Math.sqrt(number))+1 ; i++){
		if(number % i == 0){
			counter++;
		}

		continue;
	};

	return counter <= 2 ? true : false; 
};

console.log(isPrimeNumber(193874508135));
