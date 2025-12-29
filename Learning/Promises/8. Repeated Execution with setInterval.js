// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function repeat() {
    let interval = 1
    let id = setInterval(() => {
        console.log("Interval no." + interval++)
    }, 2000);

    setTimeout(() => {
        clearInterval(id);
    }, 20000);
}

repeat();