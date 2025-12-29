// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


class Person {
    constructor(name, age, country) {
        this.name = name,
        this.age = age,
        this.country = country
    }

    showDetails() {
        return `
        ${this.name} age ${this.age} lives in ${this.country}.
        `
    }
}

let first = new Person("Ahmad Siddique", 19, "Germany");

console.log(first.showDetails());

