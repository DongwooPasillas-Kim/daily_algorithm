"use strict";

let num = 10;
console.log(`10 in decimal number is ${num.toString()}.`);
console.log(`10 in binary number is ${num.toString(2)}.`);

let num2 = 255;
console.log(`255 in hexadecimal number is ${num2.toString(16)}.`);

console.log(
  `There are some useful constants like pi (${Math.PI.toFixed(4)})` +
    ` or e (${Math.E.toFixed(4)}).`,
);

let num3 = 8.49;
console.log(
  `Ceil, floor, round of ${num3} are: ${Math.ceil(num3)}, ` +
    `${Math.floor(num3)}, ${Math.round(num3)}.`,
);
console.log(
  `If you were to round to the first decimal place, ` +
    `you need to use some tricks (Math.round(num3*10)/10) ` +
    `-> ${Math.round(num3 * 10) / 10}.`,
);

let num4 = Number("x");
console.log(
  `num4 is NaN (${num4}). With neither == nor ===, this can be checked. ` +
    `== (${num4 == NaN}), === (${num4 === NaN}). ` +
    `isNaN is the only way to figure. (${isNaN(num4)})`,
);

let num5 = "123...just kidding this is a string";
console.log(
  `parseInt reads the input upto number part and returns integer. ` +
    `num5 (${num5}) -> parseInt(num5) (${parseInt(num5)}).`,
);
console.log(
  `Second arg can specify number system. (FF -> ${parseInt("ff", 16)})`,
);

let num6 = "123.4567..just kidding this is a string";
console.log(
  `parseFloat works similarly. ` +
    `num6 (${num6}) -> parseFloat(num6) (${parseFloat(num6)}).`,
);

console.log(
  `Math.random returns a random value between 0 and 1. ` +
    `Here is a random number [0,99]: ${Math.floor(Math.random() * 100)}`,
);

console.log(
  `max, min, pow, abs, sqrt are useful, too. ` +
    `max([1,4,-1]): ${Math.max(1, 4, -1)}, ` +
    `min([1,4,-1]): ${Math.min(1, 4, -1)}, ` +
    `2^3: ${Math.pow(2, 3)}, ` +
    `abs(-8): ${Math.abs(-8)}, ` +
    `sqrt(16): ${Math.sqrt(16)}`,
);

