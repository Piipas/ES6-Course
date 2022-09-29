/*
** New String Methods
** startsWith( Search String, Position = 0 ) - endsWith( Search String, End Position = string.length );
** includes( Search String, Position = 0 ) - repeat(count);
*/

let str = "Hello World";

console.log(str.startsWith("He")); // True
console.log(str.startsWith("ll", 2)); // True
console.log(str.startsWith("ll", 7)); // False

console.log(str.endsWith("ld", str.length)); // True
console.log(str.endsWith("Wo", str.length - 3)); // True

let x = "I love Everyone";

console.log(x.includes("love")); // True
console.log(x.includes("love", 6)); // False

console.log(x.repeat(4));