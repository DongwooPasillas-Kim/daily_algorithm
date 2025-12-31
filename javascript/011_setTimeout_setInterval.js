"use strict";

// setTimeout runs function after certain amount of time
// setInterval repeats function for every speicifed interval

function fn() {
  console.log(3);
}

// setTimeout(fn, 3000); // runs after 3 seconds

function fn2(name) {
  console.log(name);
}

// setTimeout(fn2, 3000, "Mike");
// clearTimeout(tID); // clearTimeout unsets timeout action (which has tID)

// setInterval(fn2, 3000, "Mike");

// clearInterval(tId) with setInterval method
// assigned to tId will stop the repetition

// note: setting the delay param as 0 does not make
// it start immediately
// scheduling functions run after rest of the script is run
// for example, below code prints 1 and then 2
setTimeout(function () {
  console.log(2);
}, 0);
console.log(1);

// below is an example of clearing scheduling func
let num = 0;

function showTime() {
  console.log(`Number of rep.: ${num++}`);
  if (num > 5) {
    clearInterval(tId);
  }
}

let tId = setInterval(showTime, 1000);
