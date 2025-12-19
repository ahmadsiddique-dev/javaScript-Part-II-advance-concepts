// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

// Example string : 'the quick brown fox'

// Expected Output : 'The Quick Brown Fox '


function titleMaker(str) {
    let rslt = [];

    let res = str.split(" ")
    res.map((e) => {
        rslt.push(e[0].toUpperCase() + e.slice(1, e.length));
    })

    return rslt.join(" ").toString();
}

console.log(titleMaker("the quick brown fox"));