"use strict";

// async

async function getName() {
  // return Promise.resolve("Tom");
  throw new Error("err..");
} // async function always returns a Promise

// getName()
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// await

function getName2(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName2("Mike");
  console.log(result);
} // await Promise -> waits until Promise is res/rej
// await can only be used within an async func

// showName();

// this is how promise chaining can be revised using
// async/await

const f1 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("No.1 ordered");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("No.2 ordered");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("No.3 ordered");
    }, 2000);
  });
};

// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("End"));

async function order() {
  const result1 = await f1();
  const result2 = await f2(result1);
  const result3 = await f3(result2);
  console.log(result3);
}

// when using async-await, error can be caught
// using try-catch block
// below is an example of that plus Promise.all

async function order2() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("End");
}

order2();
