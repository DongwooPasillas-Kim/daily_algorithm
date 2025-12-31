"use strict";

// promise has below format
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
    reject(new Error("err..."));
  }, 3000); // promise is resolved in 3sec
});
// 'resolve' runs when succeeded,
// 'reject' runs when failed
// this kind of function is called 'callback'

// when 'new Promise', state is 'pending' with result being 'undefined'
// when resolved, state is 'fulfilled' with result being 'value'
// when rejected, state is 'rejected' with result being an Error instance

// below is a way to decide what to do,
// based on the promise's result

// pr.then(
//   function (result) {}, // when resolved
//   function (err) {}, // when rejected
// );

// but it is more recommended to use catch
// pr.then(function (result) {
//   console.log(result);
//   ("use strict");
//
//   // promise has below format
//   const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 3000); // promise is resolved in 3sec
//   });
// 'resolve' runs when succeeded,
// 'reject' runs when failed
// this kind of function is called 'callback'

// when 'new Promise', state is 'pending' with result being 'undefined'
// when resolved, state is 'fulfilled' with result being 'value'
// when rejected, state is 'rejected' with result being an Error instance

// below is a way to decide what to do,
// based on the promise's result

// pr.then(
//   function (result) {}, // when resolved
//   function (err) {}, // when rejected
// );

// but it is more recommended to use catch
pr.then(function (result) {
  console.log(result);
})
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("End");
  });

// promise chaining
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

// Promise.all runs all promises simultaneously
console.time("Time");
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("Time");
});
// negative side is that once an uncaught error occurs,
// all info is lost, in contrast to the prev. method

// Promise.race, as opposed to all,
// once any job is completed, action is taken
