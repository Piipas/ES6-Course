/*
** WeakSet
** 
*/

let weakSet = new WeakSet([ {A: 1}, {B: 2}, {C: 3} ]);

// set.forEach(v => {
//   console.log(v);
// }) Error: set.foEach is not a function.

console.log(weakSet);

let obj = {D: 4};

weakSet.add(obj); // Can add a new element

console.log(weakSet);

console.log(weakSet.has(obj)); // Can check the existence of an element [boolean output]

weakSet.delete(obj); // Can delete a specific element

console.log(weakSet);

// weakSet.clear(); // Error: weakSet.clear is not a function.