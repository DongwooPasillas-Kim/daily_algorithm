"use strict";

// Destructuring assignment:
// expression to disintegrate arrays or objects,
// and to assign the elements or the properties into variables.

// a simple example
let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;

console.log(`user1: ${user1}, user2: ${user2}, user3:${user3}`);

// combining with the split method before
[user1, user2, user3] = "John-Mary-Joseph".split("-");
console.log(`user1: ${user1}, user2: ${user2}, user3:${user3}`);

// below case results in 4 thrown away
let [a, b, c] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(c);

// below case results in f being 'undefined'
let [d, e, f] = [1, 2];
console.log(d);
console.log(e);
console.log(f);

// certain input values can be discarded
[d, , e] = ["apple", "banana", "kiwi"];
console.log(d);
console.log(e);

// default value can be set for such case
let [g = 3, h = 4, i = 5] = [1, 2];
console.log(g);
console.log(h);
console.log(i);

// swapping values of two variables can be done like this
let alpha = 3;
let beta = 5;
[alpha, beta] = [beta, alpha];
console.log(`alpha: ${alpha}, beta: ${beta}`);

let user = { name: "Mike", age: 30 };
// Below is the basic way to destructure an obj
let { name, age } = user;
// or you can rename
let { name: userName, age: userAge } = user;

console.log(`${name}, ${age}`);
console.log(`${userName}, ${userAge}`);

// defaulting works the same way for obj
user = { name2: "Mike", age2: 30 };
let { name2, age2, gender2 = "Male" } = user;
console.log(`name: ${name2}, age: ${age2}, gender:${gender2}`);
