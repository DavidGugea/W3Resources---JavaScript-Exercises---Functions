/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
*/

let partial_application = f => g => x => f(g(x));

let add = x => y => x + y;
let multiply = x => y => x * y;

let addWith3_MultiplyWith4 = partial_application(multiply(4))(add(3));
console.log(addWith3_MultiplyWith4(5));
