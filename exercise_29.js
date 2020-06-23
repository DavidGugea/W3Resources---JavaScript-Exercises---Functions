/*
29. Write a JavaScript function to get the function name. 
*/

let getFunctionName = f => f.name;

function testFunction(){
	console.log("Hello World!");
}

console.log(getFunctionName(testFunction));
