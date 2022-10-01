/*
** Symbol Iterator
** For Of Loop
*/

let str = "Pipas",
    arr = [1, 2, 3],
    num = 100,
    obj = {};

console.log(str[Symbol.iterator]);
console.log(arr[Symbol.iterator]);
console.log(num[Symbol.iterator]);
console.log(obj[Symbol.iterator]);

let strIterator = str[Symbol.iterator]();

console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());

for (let char of str) {
  console.log(str[char])
}

let arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())