
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



[two, one, three]
.reduce((p, f) => p.then(f), Promise.resolve("Hello"))
.then((res) => {
    console.log("Response : ", res);
})


// const applyAsync = (acc, val) => acc.then(val);
// const funcs = [one, two, three];

// const composeAsync = 
// (...funcs) => 
// (x) => 
//     funcs.reduce(applyAsync, Promise.resolve(x))
