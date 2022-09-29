/*
** Template Literals
*/

var name = "Bouchra";
var gender = "f";

var oldWay = "Hello EveryBody Its me " + (gender == "m" ? "Mr" : "Mrs") + " " + name + "\n" +
"I am from Morocco \n" +
"I love you All.";

let newWay = `Hello EveryBody Its me ${gender == "m" ? "Mr" : "Mrs"} ${name}
Iam from Morocoo
I love you All`;

console.log(oldWay);
console.log(newWay);



let username = "Pipas",
    age = 21;

var myOldMarkup = '<div class="card">\n\t' + "<h2>" + username + "</h2>\n\t<span>" + age + "</span>\n</div>"; 

const myHTMLMarkup = `
<div class="card">
  <h2>${username}</h2>
  <span>${age}</span>
</div>
`;

console.log(myHTMLMarkup);
document.body.innerHTML = myHTMLMarkup;

console.log(myOldMarkup);
document.body.innerHTML += myOldMarkup;