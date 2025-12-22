
async function one() {
    await setTimeout(() => {
        return "One";
    }, 7000);
}

function two() {
    return "two";
}

function three() {
    return "three";
}



// [two, one, three]
// .reduce((p, f) => p.then(f), Promise.resolve("Hello"))
// .then((res) => {
//     console.log("Response : ", res);
// })


// const applyAsync = (acc, val) => acc.then(val);
// const funcs = [one, two, three];

// const composeAsync = 
// (...funcs) => 
// (x) => 
//     funcs.reduce(applyAsync, Promise.resolve(x))



// console.log("start");

// Promise.resolve().then(() => {
//   console.log("promise");
// });

// console.log("end");


// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");


// Promise.resolve()
//   .then(() => {
//     console.log("1");
//     return Promise.resolve("2");
//   })
//   .then(res => {
//     console.log(res);
//   });

// console.log("3");


Promise.resolve()
  .then(() => {
    console.log("A");
    return "B";
  })
  .then(res => {
    console.log(res);
    return Promise.reject("C");
  })
  .then(() => {
    console.log("D");
  })
  .catch(err => {
    console.log(err);
  });

