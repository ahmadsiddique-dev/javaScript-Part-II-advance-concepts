// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

function one() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 1');
      resolve();
    }, 2000);
  });
}

function two() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 2');
      resolve();
    }, 2000);
  });
}


function three() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 3');
      resolve();
    }, 2000);
  });
}


async function results() {
    try {
        await one();
        await two();
        await three();
    } catch (error) {
        console.log(error);
    }
}


results();