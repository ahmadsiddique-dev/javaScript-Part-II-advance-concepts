// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
    #number;
    #balance;
    constructor (number, balance) {
        this.#number = number,
        this.#balance = balance
    }

    deposit (balance) {
        this.#balance += balance;
        return `Thanks for using service your current balance is ${this.#balance}`
    }

    withdraw (balance) {
        this.#balance -= balance;
        return `Thanks for using service your current balance is ${this.#balance}`
    }

    checkBalance () {
        return `Your balance is ${this.#balance}`
    }
}


let ahmadAccount = new BankAccount(12345678, 300_000_000);
console.log(ahmadAccount.deposit(400000));

console.log(ahmadAccount.checkBalance());

console.log(ahmadAccount.withdraw(30000));