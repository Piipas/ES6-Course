/*
** Enhanced Object Literals
** -1 Property Name Shorthand
** -2 Methods Shorthand
** -3 Computed Object Property Name 
*/

const username = "Pipas",
      domaine = "pipas.ma";

const user = {
  username, // OldWay: username: username,
  domaine, // OldWay: domaine: domaine,
};

console.log(user);

///////////

const city = {
  name: "Rabat",
  showCityName() { // showCityName: function() { return this.name; }
    return this.name;
  }
};

console.log(city.showCityName());

///////////

const propName = "age";

const student = {
  name: "Pipas",
  [propName]: 21,
};

console.log(student);