"use strict";

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

// Splice removes specified number of elements
// starting from specified index
console.log(arr);

arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200);

// Splice with 3rd (or more) arg
// the additional args are substituted
console.log(arr);

arr = ["I", "am", "Mark"];
arr.splice(2, 0, "the", "King,");

// Splice with 2nd arg being 0
// means only inserting elements
console.log(arr);

arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 2);

// splice returns the eliminated elements
console.log(result);

arr = [1, 2, 3, 4, 5];

// slice works the same way as in string
console.log(arr.slice(1, 4));

console.log(arr.slice()); // Whole array if no arg
console.log("string".slice()); // Same in string

arr = [1, 2];

// concat returns concatenated array
console.log(arr.concat([3, 4]));
console.log("hello".concat(", world")); // same in string
console.log(arr);

// concat can also take multiple arrays or elems as args
console.log(arr.concat([3, 4], [5, 6]));
console.log(arr.concat([3, 4], 5, 6));

let users = ["Mike", "Tom", "Jane"];

// forEach cycles through an array
// args in the paren can be used for expr in the braces
users.forEach((item, index, arr) => {
  console.log(`${item}:${index}:${arr}`);
});
