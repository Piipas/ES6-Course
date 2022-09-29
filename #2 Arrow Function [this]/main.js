/*
  Arrow Function
  'this' Value
*/
function Person() {
  var that = this; //
  this.age = 0;
  setInterval(function() {
    that.age++; //
    console.log(that.age);
  }, 1000)
}

function User() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000)
}

let person = new Person();

// let user = User();