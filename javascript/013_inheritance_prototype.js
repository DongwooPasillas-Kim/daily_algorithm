"use strict";

const user = {
  name: "Mike",
};

// hasOwnProperty checks if the obj has such property
console.log(user.hasOwnProperty("name"));
// the method 'hasOwnProperty' comes from __proto__
// it is looked for in __proto__ after being looked for in the newly created obj

// inheritance can be manually assigned

const car = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
  color: "gray",
};

const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw.wheels);
console.log(benz.color); // overrides parent's property

// inheritance can also be made using
// bmw, benz, and audi as parents
// This forms a 'prototype chain'

// you can also add prototype properties to a constructor function, out of the contructor function block
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log("drive...");
};
Bmw.prototype.navigation = 1;
// Why assign like this instead of Bmw.prototype = {...};
// it is because .constructor property works
// only when assigned individually like above
// or, you could do Bmw.prototype = {constructor: Bmw, ...}

const car1 = new Bmw("red");
car1.drive();

// you can check if an object is another object's instance by using 'instanceof'
console.log(car1 instanceof Bmw);
// if instance was made by a constructor,
console.log(car1.constructor === Bmw);
