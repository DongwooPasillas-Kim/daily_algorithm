"use strict";

const user = {
  name: "Mike",
  age: 30,
};

let cloneUser = Object.assign({}, user);
console.log(`cloneUser : ${cloneUser}`);
console.log(`To get keys, use keys(): ${Object.keys(cloneUser)}`);
console.log(`To get values, use values(): ${Object.values(cloneUser)}`);
console.log(`To get all, use entries(): ${Object.entries(cloneUser)}`);

let arr = [
  ["Monday", "Pizza"],
  ["Tuesay", "Hamburger"],
];
let result = Object.fromEntries(arr);
console.log(result);

