// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

let obj = {
  name: "Ahmad",
  sonOf: "Siddique",
  age: "23",
  sex: "Male",
};

function getLength(obj) {
  let len = 0;

  for (const i in obj) {
    if (!Object.hasOwn(obj, i)) continue;
    len++;
  }
  return len;
}

let length = getLength(obj);

let keys = Object.keys(obj);
let values = Object.values(obj);

let newObj = {};

for (let i = 0; i < length; i++) {
    newObj[values[i]] = keys[i]
}

console.log(newObj);