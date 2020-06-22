/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

let second_lowest_and_greatest = arr => {
	let sortedArr = arr.sort((a, b) => a - b);
	return `${sortedArr[1]}, ${sortedArr[sortedArr.length - 2]}`;
};

console.log(second_lowest_and_greatest([1, 2, 3, 4, 5]));
