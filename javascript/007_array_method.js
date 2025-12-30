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

// find index by element value
// using indexOf and lastIndexOf
arr = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(arr.indexOf(3));
// When two args are given, 2nd arg indicates starting position
console.log(arr.indexOf(3, 3));
// To search from the end, use lastIndexOf
console.log(arr.lastIndexOf(3));

// includes works same as in string
console.log(arr.includes(6));

// find works similarly,
// however a function can be delivered as arg
// to find the first element that returns true to the func
arr = [1, 2, 3, 4, 5];
const result2 = arr.find((item) => {
  return item % 2 === 0;
});
console.log(result2);

// to find the 'index' of the element, use findIndex
const result3 = arr.findIndex((item) => {
  return item % 2 === 0;
});
console.log(result3);

// filter returns all elements that satify condition
const result4 = arr.filter((item) => {
  return item % 2 === 0;
});
console.log(result4);

// reverse returns a reverse array
console.log(arr.reverse());
console.log(arr); // it changes the original, too!

// map returns a new array, with argfunc applied
let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];
console.log(
  userList.map((user) => {
    if (user.age > 18) {
      return Object.assign({}, user, { status: "adult" });
    } else {
      return Object.assign({}, user, { status: "minor" });
    }
  }),
);

// join concatenates array elements to a string
// In this case, number array is joined to.. string
console.log(arr.join());
console.log(arr.join().length);
console.log(typeof arr.join());

// split does the other way around
console.log("Jone, 31, Male".split(","));
console.log("Jone, 31, Male".split(""));

// Array.isArray(arr) checks if is array
arr = ["apple", "banana", "orange"];
let myObj = {
  name: "Some Object",
  type: "Some Type",
};
console.log(Array.isArray(arr));
console.log(Array.isArray(myObj));

// 'sort' for sorting arrays
// however, without proper sorting funcs, it may result in an unintended way of sorting
arr = ["e", "c", "b", "d", "a"];
arr.sort();
console.log(arr); // this works fine
arr = [27, 8, 5, 13];
arr.sort();
console.log(arr); // this one is weird

function sortNumber(a, b) {
  return a - b;
}
arr.sort(sortNumber);
console.log(arr);
// to minimize inconvenience, lodash is used often

// let's try to get sum of all elems in arr
arr = [1, 2, 3, 4, 5];
result = 0;
arr.forEach((num) => {
  result += num;
});
console.log(result);

// this time using for
result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);

// this time using for of
result = 0;
for (let num of arr) {
  result += num;
}
console.log(result);

// this time using reduce
// if the initial value arg is not specified,
// the first prev becomes the first element
result = arr.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(result);

// let's try extracting adults out of an arr of userObjs
let userList3 = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

result = userList3.reduce((prev, curr) => {
  if (curr.age > 18) {
    return prev.concat(curr.name);
  }
  return prev;
}, []);
console.log(result);
