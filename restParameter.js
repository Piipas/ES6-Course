/*
** Rest Parameter
*/

function fun(a, b, c, ...params) {
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    console.log(`C: ${c}`);
    console.log(params);

    return 0;
}

fun("One", "Two", "Three", "Four", "Five", "Six", "Seven");

///////////////

function sum(...nums) {
    let sum = 0;
    for (let num of nums) sum += num;
    return sum;
}

console.log(sum(1));
console.log(sum(1, 5, 9, 15));