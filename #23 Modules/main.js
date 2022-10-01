/*
** Modules
*/

import defaultArr, {a, sayHello} from './app.js'; // The Default export can be imported with any name;

console.log(a);

defaultArr.forEach(el => {
    console.log(el);
});

console.log(sayHello("Pipas"));