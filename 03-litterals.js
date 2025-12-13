let arr = ["colombia", "NYC", "California"]

// console.log(arr.length);

const fish = ["Lion", , "Angel"];

// Skips in map function but when we access as fish[0]
// it gives undefined btw it is not undefined it is <empty Item>

// console.log(fish);


// null, undefined, 0, "", false and NaN are the ---> are the falsy values and all other are truthy values

// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(1)); 


// console.log(023);
// console.log(0o10); 
// console.log(0xf);

const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};

// console.log(unusualPropertyNames[""]); // An empty string
// console.log(unusualPropertyNames["!"]); // Bang!


let obj = {
    good : "good",
    isGood : function () {
        return this.good = "bad"
    }
}


// console.log(`In JavaScript, template strings can run
//  over multiple lines, but double and single
//  quoted strings cannot.`)


 // Tagged Funcions

// function mine(first) {
    
//     return first;
// }

// console.log(mine(`Hello ${name}`));


// These are really confusing
function mine(string, ...value) {
    const first = value[0].toUpperCase();
    const second = value[1].toLowerCase();
}

let first = "Ahmad", second = "Saif";
mine`There are the value of ${first} ${second}`


// Another Expample

function tag(strings, ...values) {
  // console.log(strings);
  // console.log(values);
}

const name = "Ahmad";
const question = "How";
tag`Hello ${name}, welcome! ${question} are you`;

// if (!0) {
//   console.log("hello");
// }


var a = new Boolean(false);

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];




// Function gradeStudent(name, marks, extraCredit)

// name → string, cannot be empty → else throw "Invalid Name"

// marks → number 0–100 → else throw "Invalid Marks"

// extraCredit → optional number, if not provided assume 0, cannot be negative → else throw "Invalid Extra Credit"

// Total score = marks + extraCredit

// If total > 100 → throw "Total exceeds maximum score"

// Assign grade:

// 90–100 → "A+"

// 80–89 → "A"

// 70–79 → "B"

// 60–69 → "C"

// 50–59 → "D"

// <50 → "F"

// If any error occurs, catch it and return a message like "Error: …"



// function gradeStudent (name, marks, extraCredit = 0) {try {if (typeof name !== "string" || name.trim() === "") throw new Error("Name is invalid");if(typeof marks !== "number" || marks < 0 || marks > 100) throw new Error("Invalid marks input");if (typeof extraCredit !== "number" || extraCredit < 0 || extraCredit > 10 /* only 10 extra can be given */) throw new Error("Invalid extra credits");let total = marks + extraCredit;if (total >= 100) throw new Error("Total marks cannot be greater than 100");if (total >= 90) {return "A+";}else if (total >= 80) {return "A";}else if (total >= 70) {return "B";}else if (total >= 60) {return "C";}else if (total >= 50) {return "D";}else {return "F";}} catch(error) {return "Error: " + error;}};console.log(gradeStudent("Sara", 80, 5));

// console.log(typeof undefined , typeof null);


function tricky(input) {
    try {
        if(!input) throw "Input is falsy!";
        if(typeof input !== "string") throw "Not a string!";
        return input[0].toUpperCase();
    } catch(e) {
        return "Error: " + e;
    }
}

// console.log(tricky(0)); // Error: Input is falsy
// console.log(tricky(false)); // Error: Input is falsy
// console.log(tricky(null)); // Error : Input is falsy
// console.log(tricky("hello")); // HELLO
// console.log(tricky("")); // My mom(teacher but teacher is virtual mom in Islam) said if you are seeing that you are repeating samething three time in code then use loop always us loop and this is a "use strict" order 


// for (let a = 0; ; a++) {
//   console.log(`a = ${a}\n`);
// }

let isTrue = true;
let d = 4, b = 3;

thisIsLabel : while (isTrue) {
  d++;b++;
  // console.log(`d = ${d}, b = ${b}`);
  let c = 1;
  while (isTrue) {
    c++;
    // console.log(`c = ${c}`);

    if (c === 8) {
      break thisIsLabel;
    }
  }
}


const student = {
    name: "Ahmad",
    age: 18,
    course: "ICS"
};


for (const i in student) {  
  const element = student[i];

  // console.log(`${i} : ${element}`);
  
}


function MyCar(detail) {
  detail.company = "audi"
  return detail
}

const detail = {
  name: "gli",
  company: "toyota",
  hp: 3000,
  price: 1500000
}

console.log(detail);
console.log(MyCar(detail))
console.log(detail);