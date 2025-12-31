"use strict";

// using call can specify 'this'
const mike = {
  name: "Mike",
};

function showThisName() {
  console.log(this.name);
}

// showThisName(); // shows nothing for chrome
// actually causes error for nodejs
showThisName.call(mike);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1950, "singer");
// first arg the object to regard as 'this'
// the rest the args for the func
console.log(mike);

// apply iterates through an array arg
// for example, below code give NaN
const nums = [3, 10, 1, 6, 4];
console.log(Math.min(nums));

// this can be fixed by iterating using appy
console.log(Math.min.apply(null, nums));
// first arg is 'this', and in this case irrelevant

// 'bind' can change 'this' permanently
const updateMike = update.bind(mike);
updateMike(1980, "dancer");
console.log(mike);
