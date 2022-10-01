/*
** Custom iterable Object
*/

function fun() {
  
}

let obj = {
  name: "Pipas",
  age: 21,
  country: "Morocco",
  favSkill: "C++",
  [Symbol.iterator] () {
    let step = 0;
    let properties = Object.keys(this);
    return {
      next() {
        return {
          value: obj[properties[step]],
          done: step++ === properties.length
        }
      }
    }
  }
}

console.log(obj);

console.log(obj[Symbol.iterator]().next());

for (let val of obj) {
  console.log(val);
}