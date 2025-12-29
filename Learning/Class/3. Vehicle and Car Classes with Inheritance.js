// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {

    constructor (make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    vehicleDetail () {
        return `${this.make} | ${this.model} | ${this.year}`
    }

}

class Car extends Vehicle {

    constructor (make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    vehicleDetail () {
        return `${super.vehicleDetail()} | ${this.doors}`
    }

}

let myVehicle = new Vehicle("Honda", "Civic", 2029);

console.log(myVehicle.vehicleDetail());

let myCar = new Car("Toyota", "Corolla", 2029, 4);

console.log(myCar.vehicleDetail());