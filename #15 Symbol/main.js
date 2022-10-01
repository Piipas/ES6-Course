/*
** Symbol
*/

let x = Symbol();
let y = Symbol();
let z = Symbol("Test");
console.log(x == y); // False
console.log(z == x); // False

const mySymbol = Symbol();

const myObj = {
  username: "Pipas",
  website: "pipas.com",
  [mySymbol]: "This is Hidden From Iteration",
};

for (let val of Object.entries(myObj)) {
  console.log(val);
}

console.log(Object.getOwnPropertyNames(myObj));

console.log(JSON.stringify(myObj));

console.log(Object.getOwnPropertySymbols(myObj)); // Symbols can be accesses just with this method Object.getOwnPropertySymbols(objName)

//--------

let mySymbol2 = Symbol.for("One");
let mySymbol3 = Symbol.for("Two");
let mySymbol4 = Symbol.for("One");

console.log(mySymbol2 == mySymbol3);
console.log(mySymbol2 == mySymbol4);

//--------

console.log(Symbol.keyFor(mySymbol4));
console.log(mySymbol4.description);

new WeakMap()