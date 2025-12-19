// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

// Example string : 'Web Development Tutorial'

// Expected Output : 'Development'

let str = 'Web Development Tutorial';

let rslt = str.split(" ");

let res = "";
rslt.map((e) => {
    if (e.length > res.length) {
        res = e
    }
});

console.log(res);