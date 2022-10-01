/*
** Set
** - Syntax: new Set(interable)
** - Set Elements Cannot be repeated.
** - Set Elements Cannot be accessed [undefined].
*/

let mySet1 = new Set([1, 2, 3, 4, 2]);

console.log(mySet1);

let myArray1 = [1, 2, 3, 4],
    mySet2 = new Set(myArray1);

console.log(mySet2);
console.log(...mySet2);

let mySet3 = new Set('Pipas');

console.log(mySet3);

// Set Methods

let mySet4 = new Set('Pipas');

// -1 .add();

mySet4.add('Splecter'); // Syntax 1.
mySet4.add('ToPo').add('Xplay'); // Syntax 2.

// -2 .delete

mySet4.delete('a');
mySet4.delete('p');

console.log(mySet4);

// -3 .has()

console.log(mySet4.has('ToPo')); // True

// -4 .size

console.log(mySet4.size);

// -5 .clear()

mySet4.clear();
console.log(mySet4);