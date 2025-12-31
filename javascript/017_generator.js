"use strict";

// generator is capable of pausing and resuming function
// below is an example structure

function* exFunc() {
  yield 1;
  yield 2;
  yield 3;
  return "End";
}

const a = exFunc();

console.log(a.next());
// the object yielded has two properties:
// (1) value and (2) done: if yielding is in progress (false)

// return method immediates marks doen as 'true'
console.log(a.return("early finish"));
console.log(a.next());

// throw method also marks as 'true'
// however by returning an error

const b = exFunc();
console.log(b.next());
// b.throw(new Error("err"));

// generator is an iterable

const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// iterables have Symbol.iterator property
// and this property itself is an 'iterator'
// iterators have next method

// generator can function as an input handler
function* fn() {
  const num1 = yield "Enter the 1st number";
  console.log(num1);

  const num2 = yield "Enter the 2st number";
  console.log(num2);

  return num1 + num2;
}

const c = fn();
console.log(c.next());
console.log(c.next(3));
console.log(c.next(2));

// generator's advantage is that it does not
// occupy memory space in advance
// things like infinite loop can run smooth
// using generators

function* gen1() {
  yield "W";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2() {
  yield "Hello";
  yield* gen1(); // yield* + any iterable to disintegrate
  yield "!";
}

console.log(...gen2());
