
// Object initialize 

let obj = {
    a : "my name",
    ok : "no man"
}


function Car(make, name, price, owner) {
    this.make = make,
    this.name = name,
    this.price = price,
    this.owner = owner,
    this.showCar = function () {
        return (`A Beautiful ${this.price}$ ${this.name} car, bought by ${this.owner.name}`);
    }
}

Car.prototype.color = "red";

function Person(name, cast) {
    this.name = name,
    this.cast = cast
}


const ahmad = new Person("Ahmad Siddique", "Shikrani")
const myCar = new Car("Honda", "City", 30_000_000, ahmad);
const hamid = new Person("Hamid", "Shikrani")
const yourCar = new Car("Honda", "Civic", 70_000_000, hamid);

console.log(yourCar);
// console.log(myCar.owner.name);

console.log(myCar.showCar());


// console.log(myCar.owner.country);

// for (const i in myCar) {
//     console.log(myCar[i]);    
// }

// console.log(Object.getOwnPropertyNames(myCar));

// delete myCar.owner.name

// console.log(myCar.owner);

// console.log("country" in myCar.owner);

