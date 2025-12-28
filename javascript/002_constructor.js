"use strict";

function User(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this;
}

let myUser = new User("Jason", 51);
console.log(myUser);

// Computed property

let feature1 = "name";

const monster = {
  [feature1]: "Mike",
  age: 30,
};

console.log(monster);

