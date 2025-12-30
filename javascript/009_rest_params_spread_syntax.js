"use strict";

// multiple values can be delivered to the function with one arg, however only the first one is accepted (as same name)
// using 'arguments', all args are accessible
// properties like length are available
// array methods (forEach, map) are not available
function showName(name) {
  console.log(name);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName("Mike", "John");

// Rest parameters are recommended for ES6+
function showName2(...names) {
  console.log(names);
}
showName2("Mike", "Tom");

// also, it handles zero parameter (does not return 'undefined')
showName2();

// for example, to write a function that sums indefinite number of numbers input
function sumAll(...numbers) {
  let sum = 0;
  numbers.forEach((val) => {
    sum += val;
  });
  return sum;
}
console.log(sumAll(1, 2, 3));

// example of a constructor method
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
let myUser = new User("John", 21, "Lockpicking", "Hunting");
console.log(myUser);

// similar syntax, but different use
// when the '...' is used, it is unpacked into elements
// this is called 'spread syntax'

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result);
