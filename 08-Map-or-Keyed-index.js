let saying = new Map();


saying.set("Ahmad", "middle");
saying.set("Hamid", "younger");
saying.set("Saif", "Elder");

console.log(saying, saying.size);


// console.log(saying.get("Ahmad"));

console.log(saying.has("Saif"));

console.log(saying.delete("Saif"));

console.log(saying.get("Saif"));

// saying.clear();

console.log(saying.get("Ahmad"));

saying.set(8, "number");

console.log(saying);

let obj = {
    name : "Ahmad",
    age : 89, 
    cast : "Baloch",
    3 : "adl"
}

console.log(typeof obj[3]);

console.log(obj);