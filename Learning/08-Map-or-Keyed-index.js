let saying = new Map();


saying.set("Ahmad", "middle");
saying.set("Hamid", "younger");
saying.set("Saif", "Elder");

// console.log(saying, saying.size);


// // console.log(saying.get("Ahmad"));

// console.log(saying.has("Saif"));

// console.log(saying.delete("Saif"));

// console.log(saying.get("Saif"));

// // saying.clear();

// console.log(saying.get("Ahmad"));

// saying.set(8, "number");

// console.log(saying);

let obje = {
    name : "Ahmad",
    age : 89, 
    cast : "Baloch",
    3 : "adl"
}

// console.log(typeof obj[3]);

// console.log(obj);





// const wm = new WeakMap();
// let obj = { name: 'Ahmad' };

// wm.set(obj, 'secret');

// console.log(wm.get(obj));

// obj = null;

// Can we access the value now? Why or why not?

const sete = new Set([1, 2, 2, 3, 3, 3]);
// console.log(set.size);
// console.log(set.has(2));
// console.log(set.has(4));


const map = new Map();
map.set({}, 'a');
map.set({}, 'b');

// console.log(map.size);

// console.log(map);

const wm = new WeakMap();
let obj1 = { a: 1 };
let obj2 = { a: 1 };

wm.set(obj1, 'first');
wm.set(obj2, 'second');

// console.log(wm.get(obj1));
// console.log(wm.get(obj2));
// console.log(wm.size); // What happens here?


const set = new Set([1, 2, 3]);
const arr = [...set];

// console.log(arr);
// console.log(typeof arr);



const obj11 = { a: 1 };
const obj21 = { a: 1 };
console.log(obj11 == obj21)


