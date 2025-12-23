'use strict';

const a = Symbol();
const b = Symbol();

// Symbol is a primitive type and a unique identifier
console.log(`a==b : ${a==b}`);

const id = Symbol('id');
const user = {
	name : 'Jane',
	age : 35,
	[id] : '01178'
}

console.log(`Object.keys(user) does not show symbols : ${Object.keys(user)}`);

// Symbol.for method generates a symbol and then shares it via key

const id1 = Symbol.for('key');
const id2 = Symbol.for('key');
console.log(`id1==id2 : ${id1==id2}`);

// There are ways to view the Symbols inside an object

console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));

