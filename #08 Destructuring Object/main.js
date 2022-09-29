/*
  Destructuring Object
*/

let user = {
  "username": "Pipas",
  "age": 21,
  "gender": "male"
};

const {username, age, gender, theme = "Light"} = user;

console.log(`My name is ${username}, I am ${age} years old, and My gender is ${gender}, My current Theme is "${theme}"`);

////////////////////////////////

let model = "Renault",
    color = "red",
    engine = "v4",
    hp = 150;

let car = {
  "model": "ford",
  "color": "black",
  "engine": "v8",
  "hp": 300
};

({model, color, engine, hp} = car); // Because These variables are already declared;

console.log(`Car Information: 
  Model: ${model}
  Color: ${color}
  Engine: ${engine}
  HP: ${hp}
`);

////////////////////////////////

let university = {
  name: "harvard",
  type: "private research university",
  location: {
    country: "Untied States",
    state: "Massachusetts",
    city: "Cambridge",
  }
};

const {name: name1, type: type1, location: location1} = university;

console.log(`${name1} is a ${type1}, located in ${location1}`);

//---------

const {name: name2, type: type2, location: location2} = university;

console.log(`${name2} is a ${type2}, located in ${location2.country}, ${location2.state}, ${location2.city}`);

//---------

const {country, state, city} = university.location;

console.log(`${country}, ${state}, ${city}`);