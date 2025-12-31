"use strict";

// so far, constructor function has been used
// however, class (ES6+) can do similar things

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User("Tom", 19);

console.log(tom);
// const tom2 = User("tom2", 19);
// above, without new, error occurs
// (whereas using constructor func without new
// simply returns 'undefined')

for (let property in tom) {
  console.log(property);
} // name, age are shown. but showName is not shown
// this shows that constructor function and class
// behave differnetly sometimes.

// class inheritance uses 'extends' keyword

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("driving...");
  }
  stop() {
    console.log("stopping...");
  }
}

class Bmw extends Car {
  constructor(color) {
    super(color);
    this.color = color;
  }
  drive() {
    console.log("BMW special driving...");
    // method overriding
  }
  park() {
    console.log("parking...");
  } // new method
  stop() {
    super.stop(); // inheritance
    console.log("BMW stopping...");
  }
}

const myCar1 = new Bmw("red");
myCar1.drive();
myCar1.park();
myCar1.stop();
console.log(myCar1.wheels);
