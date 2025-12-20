// Write a JavaScript program to get the length of a JavaScript object.

// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 }

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }

console.log(student);

function getLength(obj) {
    let len = 0;

    for (const i in obj) {
        if (!Object.hasOwn(obj, i)) continue;
        
        len++;
        
        
    }

    return len;
}

let length = getLength(student);

console.log("Length : ", length);