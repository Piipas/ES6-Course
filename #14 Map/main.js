/*
** Map
** - Map Is Like Regular Object
** - Map Keys allow all data types
*/

let myObj = {
  "10": "string",
  10: "number",
};

// Output: {"10": "string"} Because object keys always converted to string, So the last element overwrite the first one;

console.log(myObj);

let myMap = new Map();

myMap.set("10", "string");
myMap.set(10, "number")
  .set(false, "boolean")
  .set([1, 2, 3], "array")
  .set({a: 1, b: 2}, "object");

console.log(myMap);

// Map Methods
// -1 .set()

// -2 .get()

console.log(myMap.get(false));

// -3 .has()

console.log(myMap.has(false)) // True

// -4 .delete();

myMap.delete(10);
console.log(myMap);

// -5 .clear()

myMap.clear();
console.log(myMap)

