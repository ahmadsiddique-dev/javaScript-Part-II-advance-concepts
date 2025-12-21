// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function myFunc(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

let callback = () => {
    console.log("Callback!")
}

myFunc(callback);