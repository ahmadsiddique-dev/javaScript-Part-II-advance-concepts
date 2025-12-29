// There are theree ways to create an Array

// First

let arr1 = new Array('ahmad', 'hamdi', 'saif', 'siddique');

let arr2 = Array('name', 'dob', 'cast');

let arr3 = ['i', 'am', 'ahmad'];

// console.log(arr1, arr2, arr3);

let testingArr = [43];

let anotherArr = Array(23)

// console.log(anotherArr[4]);

// console.log(Array(2.3)); // Invalid Array length

let firstdo = Array.of(3.534);

// console.log(firstdo);

// console.log(anotherArr["length"]);

let arr = [];

arr[2.4] = "foo";

// console.log(Object.hasOwn(arr, 2.4));

const broom = [];

broom[30] = ["hello dear"];
broom[21] = [undefined]

// console.log(broom[28]);

let b = broom[28];

// console.log("NaN" + 3);

// for (let i = 0; i < b+1; i ++) {
//     console.log("hello");
// }



// broom.forEach(element => {
//     console.log(element)
// });


const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {
  // console.log(element);
});

function checking(value) {
    if (value === ",") return "";
}

let answee = nonsparseArray.join(",").match(",", () => {
    return;
});

// console.log(answee);


let a = ['ahmad', 'hamid'];

let newo = ['rabia', 'rifat', 'saif']

// let ans = a.push(...newo);

let ab = a.reverse();

// a.flat(1);//

// console.log(ab);/


// differnce in inserting in array with loop and inserting without llop


let chck = [1, 5,2, 3, 4,  6, 7];

// chck.unshift(6, 7, 8)

// for (let i = 6; i < 9; i++) {
//   chck.unshift(i)
// }

// console.log(chck); // so yo use the differnce

// console.log(chck.indexOf(9));/

// let dec = chck.splice(1, 4, "Hello", "World");

// console.log("Returned : ", dec, "arrray: ", chck);

// let resu = chck.find((val, i) => val === 5 && i);

// console.log(resu);


let abd = new Array(5);
abd[4] = "Ahmad";

console.log(abd);

// for (const element of abd) {
//   console.log(element);
// }

for(let i = 0; i < abd.length; i++) {
  console.log(abd[i]);
}