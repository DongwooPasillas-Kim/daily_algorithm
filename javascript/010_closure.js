"use strict";

// lexical environment
// Once code is run, variables and functions go on the lexical environment
// variables are not initialized, but functions are initialized. This means that functions can be run in the beginning of code

let one; // calling one does not cause error, but one is 'undefined'
one = 1; // now one has value

function addOne(num) {
  console.log(one + num);
}

addOne(5); // a new, regional (internal) lexical environment is created
// while function is being run, regional variables and args are active
// when a variable is called, the variable is first looked for within the internal scope, and later within the global scope

// for below case, function 'add3' remembers the external variable which belongs to the mother function
// This is called 'closure' (combination of function and the lexical environment)
// need to remember that this external variable cannot be modified in the internal function scope
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2));
