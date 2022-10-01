/*
** Array Methods
*/

// -1 Array.of();

let arr1 = Array(100); // This is going to create an array of 100 empty elements

console.log(arr1);
console.log(arr1.length);

let arr2 = Array.of(100); // This is going to create an array with an element value = 100

console.log(arr2);
console.log(arr2.length);

// -2 Array.from();
// Syntax: Array.from(Iterable, Map Function, This);

let str1 = "Pipas";

console.log(Array.from(str1));

let arr3 = [10, 19, 50, 87, 26];

console.log(Array.from(arr3, number => number - 10))

let arr4 = ["Pipas", "Splecter", "Xplay"];

console.log(Array.from(arr4, str => str+="l"));

// -3 Array.fill();
// Syntax: Array.fill(Value to Fill, Start = 0, End = Array.length);

let arr5 = [15, 30, 64, 82, 91];

console.log(arr5);
console.log(arr5.fill(10));

let arr6 = [15, 30, 64, 82, 91];

console.log(arr6);
console.log(arr6.fill(10, 1));

let arr7 = [15, 30, 64, 82, 91];

console.log(arr7);
console.log(arr7.fill(10, 1, 3));

// -4 Array.find()

let arr8 = [10, 19, 50, 87, 26];

console.log(arr8.find(el => el > 10))

// Array.findIndex();

let arr9 = [10, 19, 50, 87, 26];

console.log(arr9.findIndex(el => el > 10))

// Array.copyWithin();
// Syntax: Array.copyWithin(Target, Start = 0, End = Array.length);

let arr10 = ["A", "B", "C", "D", "E", "F", "G"];

arr10.copyWithin(0);
console.log(arr10);

arr10.copyWithin(0, 3, 6);
console.log(arr10);

let arr11 = ["A", "B", "C", "D", "E", "F", "G", "H"];

arr11.copyWithin(1, 5, 7);
console.log(arr11)