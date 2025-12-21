// Write a JavaScript program that converts a callback-based function to a Promise-based function.


function resultantFunction(arg1, arg2, callback) {

    setTimeout(() => {
        const result = arg1 + arg2;
        if (result > 10) {
            callback(null, 9)
        }
        else {
            callback(new Error("he is error"), null);
        }
    }, 2000);
}

function promisedFunc(arg1, arg2) {
    return new Promise((resolve, resject) => {
        resultantFunction(arg1, arg2, (error, reslut) => {
            if (error) {
                resject(error);
            }
            else {
                resolve(reslut);
            }
        })
    })
}

promisedFunc(2, 4)
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
