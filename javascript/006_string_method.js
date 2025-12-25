'use strict';

let desc ='A Random String';
console.log(`Length: ${desc.length}`);
console.log(`Character at index 4: ${desc[4]}`);
console.log(`To capital letters: ${desc.toUpperCase()}`);
console.log(`To capital letters: ${desc.toLowerCase()}`);
console.log(`Index of 'Str': ${desc.indexOf('Str')}`);
console.log(`Slice, when given one arg, gives substring starting from the index.
When given two args, gives substring of [start, end).
For example, desc.slice(2)=${desc.slice(2)}, desc.slice(2,5)=${desc.slice(2,5)}`);
console.log(`Substring receives two args, and you may flip them, too.
For example, desc.slice(5,2)=${desc.substring(5, 2)}`);
console.log(`Trimming '${desc.substring(1, 9)}': ${desc.substring(1, 9).trim()}`);
console.log(`desc.repeat(3): ${desc.repeat(3)}`);

let list = [
    '01. Intro',
    '02. History of me',
    '03. Plans',
    '04. Conclusion'
];

let newList = [];

for (let i = 0; i < list.length; i++){
    newList.push(list[i].slice(4));
}
console.log(newList);

function hasCola(str){
    if (str.includes('cola')){
        return true;
    } else {return false;}
}
console.log(hasCola('cocacola'));