// Write a JavaScript function that generates all combinations of a string.

// Example string : 'dog'

// Expected Output : d,do,dog,o,og,g


function main(str) {
    let res = [];

    if (typeof str !== "string" || str.trim() === "") return "Invalid input";

    if (str.length === 1) return str;

    for(let i = 0; i < str.length; i++) { // We got first digit like d
        res.push(str[i]);
        for (let j = i + 1; j < str.length; j++) { // we got o, then g here 
            res.push(str.substring(i, j+1));
        }
    }
    return res.toString();
}

console.log(main("dog"));