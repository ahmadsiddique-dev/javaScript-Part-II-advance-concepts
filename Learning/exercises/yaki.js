

let obj = {
    name : "Ahmad",
    age : 23,
    status : "single",
    sex : "male",
}

Object.defineProperty(obj, "lives", {
    value : "Multan",
    enumerable : true,
    writable : true
})

console.log(obj);

// for (const element in obj) {
//     console.log(element);
// }
