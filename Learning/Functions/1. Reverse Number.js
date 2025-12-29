// Write a JavaScript function that reverses a number.

// Example x = 32243;

// Expected Output : 34223

// # First approach 

function sorted(n) {
    let res = n.toString().split("").reverse().join("");
    console.log(res);
};  

sorted(32243)