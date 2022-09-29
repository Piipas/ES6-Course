/*
  Destructuring Array
*/

let food = ["Burger", "Pizza", "Chicken", "Meat", "Rice"];

const [fo1, fo2, fo3, fo4, fo5, fo6 = "Default"] = food;

console.log(`${fo1}, ${fo1}, ${fo2}, ${fo3}, ${fo4}, ${fo5}`);

//------------

let games = ["Fortnite", "PUBG", "Valorant", "League of Legends", "Free Fire", "Call of Duty"];

const [gameOne, , gamethree, gameFour] = games; // skipping array elements

console.log(`${gameOne}, ${gamethree}, ${gameFour}`);

/////////////////////

let states = ["California", "Arizona", "Utah", "Illinois", ["San Fransisco", "Los Angeles", "New York", "Washinton"]];

const [st1, st2, st3, st4, [c1, , c3, c4]] = states;

console.log(`${st1}, ${st2}, ${st3}, ${st4}\n${c1}, ${c3}, ${c4}`);

//------------

let companies = ["Microsoft", "Meta", "Alphabet", "SpaceX", "LinkedIn", "Fiverr"];

const [co1, co2, ...otherCompanies] = companies;

console.log(`${co1}, ${co2}, ${otherCompanies}`);

/////////////////////

let book = 'Video',
    video = 'Book';

console.log(`Video is ${video}, Book is ${book}.`);

[book, video] = [video, book];

console.log(`Video is ${video}, Book is ${book}.`);

//------------

let a = 12,
    b = 5,
    c = a + b;

console.log(`${a}, ${b}, ${c}`);

[a, b, c] = [b, c, a];

console.log(`${a}, ${b}, ${c}`);