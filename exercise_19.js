/*
19. Write a JavaScript function that returns array elements larger than a number. 
*/

let largerThan = (arr, limit) => {
	return arr.reduce((accumulator, value, valueIndex, array) => {
		if(value > limit){
			accumulator.push(value);
		};

		return accumulator;
	}, new Array());
};

console.log(largerThan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
