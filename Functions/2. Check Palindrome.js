// Write a JavaScript function that checks whether a passed string is a palindrome or not?

// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

(function checkPali(str) {
    let reversed = str.split("").reverse().join("");
    if (reversed === str) console.log("Palindrom");
    else console.log("Non-Palindrom");
}("maam"))