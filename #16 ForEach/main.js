/*
** ForEach;
** ForEach skip undefined elements, while For doesn't.
** ForEach For Array: forEach(currentValue, index, array);
** ForEach For Set: forEach(currentKey, currentValue, Set);
** ForEach For Map: forEach(Value, key, Map);
*/

let arr = ["A", "B", "C", "D", , "F"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("-".repeat(20)); // separator

arr.forEach( el => {
  console.log(`${el}`);
})

console.log("-".repeat(20)); // separator

arr.forEach( (el, i) => {
  console.log(`${i}: ${el}`);
});

/////////////////////////

console.log("-".repeat(20)); // separator

let set = new Set([1, 1, 1, 2, 5, 9, 9]);

set.forEach(k => {
  console.log(k);
});

console.log("-".repeat(20)); // separator

set.forEach( (k, v) => {
  console.log(`${k}: ${v}`);
});

/////////////////////////

console.log("-".repeat(20)); // separator

let map = new Map([ ["A", 1], ["B", 2], ["C", 3], ["D", {}] ]);

map.forEach(v => {
  console.log(v);
});

console.log("-".repeat(20)); // separator

map.forEach( (v, k) => {
  console.log(`${k}: ${v}`);
});