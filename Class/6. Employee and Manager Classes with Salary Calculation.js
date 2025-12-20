// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee {

    constructor (name, salary) {
        this.name = name,
        this.salary = salary
    }

    anualSalary () {
        return this.salary * 12
    }
}

class Manager extends Employee {

    constructor (department, name, salary) {
        super(name, salary);
        this.department = department
    }

    anualSalary (bounus) {
        return super.anualSalary() + bounus;
    }

}


let Ali = new Employee("Ali", 300000);
console.log(Ali.anualSalary());
let Broom = new Manager("Testing", "Broom", "700000");
console.log(Broom.anualSalary(15000));