/*
** Arrow Function
*/

// Regular Function With No Parameters;
let regularTestOne = function() {
  return 2;
}

// Arrow Function With No Parameters;
let arrowTestOne = () => 2;
let arrowTestTwo = _ => 2;

console.log(regularTestOne());
console.log(arrowTestOne());
console.log(arrowTestTwo());

// Regular Function With One Parameter;
let regularTestTwo = function(param) {
  return param * 2;
}

// Arrow Function With One Parameter;
let ArrowTestThree = (param) => param * 2;
let ArrowTestFour = param => param * 2;

console.log(regularTestTwo(5));
console.log(ArrowTestThree(5));
console.log(ArrowTestFour(5));

// Regular Function With Multiple Parameters;
let RegularTestThree = function(param1, param2) {
  return param1 * param2;
}

// Arrow Function With Multiple Parameters;
let ArrowTestFive = (param1, param2) => param1 * param2;

console.log(RegularTestThree(3, 2));
console.log(ArrowTestFive(3, 2));