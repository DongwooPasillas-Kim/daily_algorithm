"use strict";

var1 = "this is called hoisting";
var var1;

// "Temporal Dead Zone"
// var2 = "no hoisting for 'let' variables"
// var3 = "no hoisting for 'const' variables, too"

let var2 = "this is a temporary value, too";
const var3 = "needs to be declared and initialized at the same time";

var2 = "this is a 'let' variable";
// var3 = "this causes an error"

console.log(`var1 : ${var1}`);
console.log(`var2 : ${var2}`);
console.log(`var3 : ${var3}`);

// A variable is created following the three steps :
// Declaration, initialization, and allocation
// 'var' works within 'function scope,'
// whereas 'let' and 'const' work within 'block scope.'

if (true) {
  let var4 = "let cannot escape a block";
  const var5 = "const also cannot escape a block";
  var var6 = "var can escape a block!";
}

// console.log(`var4 : ${var4}`);
// console.log(`var5 : ${var5}`);
console.log(`var6 : ${var6}`);

function myFunction() {
  var7 = "except for functions..";
}
// console.log(`var7 : ${var7}`);

