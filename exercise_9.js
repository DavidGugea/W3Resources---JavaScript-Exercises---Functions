/*
9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

let returnType = val => typeof(val);

console.log(returnType({"a" : 1, "b": 2, "c": 3}));
console.log(returnType(true), returnType(false));
console.log(returnType(function() { return "Hello" }), returnType(() => "World"));
console.log(returnType(12), returnType(12.5));
console.log(returnType("a"), returnType('b'));
console.log(returnType(undefined), returnType(null));
