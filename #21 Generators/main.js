/*
** Generators
*/

function* generate() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let generator = generate();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); // undefined

console.log(`${"#".repeat(40)}`); // separator

let arr = [1, 2, 3, 4, 5];

function * generateNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

let numbersGenerator = generateNumbers(arr);

console.log(numbersGenerator.next().value);
console.log(numbersGenerator.next().value);
console.log(numbersGenerator.next().value);
console.log(numbersGenerator.next().value);
console.log(numbersGenerator.next().value);
console.log(numbersGenerator.next().value); // undefined

console.log(`${"#".repeat(40)}`); // separator

function *generateNums(array) {
  yield * array;
  yield 6;
}

let numsGenerator = generateNums(arr);

console.log(numsGenerator.next().value);
console.log(numsGenerator.next().value);
console.log(numsGenerator.next().value);
console.log(numsGenerator.next().value);
console.log(numsGenerator.next().value);
console.log(numsGenerator.next().value);
console.log(numsGenerator.next().value); // undefined

console.log(`${"#".repeat(40)}`); // separator

function *shopBook() { // In the regular function will execute once the page loaded, but here no;
  alert("You just ordered a Book!");
  console.log("You just ordered a Book!");

  alert("Book just added to the shopping bascket!");
  console.log("Book just added to the shopping bascket!");

  alert("Congrats! Your Book is on the Way!");
  console.log("Congrats! Your Book is on the Way!");
}

let shop = shopBook(); // Type in the console: shop.next();

console.log(`${"#".repeat(40)}`); // separator

function *sayNames() {
  yield "Pipas";
  yield "Splecter";
  return "Dragan";
  yield "XPlay"; // Unreachable Code Detected: nothing can be executed after the return;
}

let names = sayNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

for (let n of names) {
  console.log(n);
}

for (let n of sayNames()) {
  console.log(n);
}

console.log(`${"#".repeat(40)}`); // separator

function *infiniteGenerator() { // WARNING: DO NOT LOOP AT THIS.
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}

let infiniteIterator = infiniteGenerator();

console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());

for (let inf of infiniteIterator) {
  if (inf > 20) {
    break;
  }
  console.log(inf);
}

console.log(`${"#".repeat(40)}`); // separator

for (let inf of infiniteGenerator()) {
  if (inf > 20) {
    break;
  }
  console.log(inf);
}

console.log(`${"#".repeat(40)}`); // separator

function* generateCities () {
  yield "Los Angeles";
  yield "Cambridge";
  yield "Chicago";
}

function* generateStates() {
  yield "California";
  yield "Illinois";
  yield "Arizona";
}

function* generateAll() {
  yield * generateCities();
  yield * generateStates();
}

let genAll = generateAll();

console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
