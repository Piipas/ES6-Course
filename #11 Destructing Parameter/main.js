/*
** Destructing Parameter
*/

let user = {
  username: "pipas",
  city: "Rabat",
  skills: {
    html: "80%",
    css: "70%",
    js: {
      f1: "VueJs",
      f2: "React",
      f3: "Angular",
    },
  },
};

function showInfo({username, city, skills: { html, css, js: { f1: one, f2: two, f3: three } }}) {
  console.log(`My name is ${username}, and I live in ${city}.`);
  console.log(`My Html Skills Progress is ${html}, and Css is ${css}.`);
  console.log(`I have knowledge in Js Frameworks like ${one}, ${two}, ${three}`)

}

showInfo(user);