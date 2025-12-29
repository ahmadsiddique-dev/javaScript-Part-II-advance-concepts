
// console.log(0b100111101); // Binary number that is followed by 0b

// console.log(0o73); // Octal number system that is followed by the 0o

// console.log(049);  

// we can also writ 

let numberRepresented = 1_000_000_000

// console.log(numberRepresented);

let largestPositive = Number.POSITIVE_INFINITY - Number.NEGATIVE_INFINITY; // Infinity
// console.log(largestPositive);

let newExponent = numberRepresented.toExponential();

// console.log(newExponent);

// console.log(Math.sin(1.5707963267948966));


let date = new Date();

// console.log(date);


const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year 






