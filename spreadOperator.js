/*
** Spread Operator ...
*/

let arrayOne = [1, 2, 3];
console.log(...arrayOne);

let arrayTwo = [1, 2, 3];
    arrayThree = arrayTwo;
    arrayFour = [...arrayTwo];

arrayThree.push(4);

console.log(arrayTwo);
console.log(arrayThree);
console.log(arrayFour);

let arrayFive = [1, 2, 3, 8, 9, -10, 0, -15];
console.log(Math.min(...arrayFive));

let objOne = {
    "first_name": "Ismail",
    "last_name": "Baalouk"
};
let objTwo = {
    ...objOne,
    "username": "Pipas",
    "email": "ismailpipas@gmail.com",
    "age": 21
};
console.log({...objTwo});