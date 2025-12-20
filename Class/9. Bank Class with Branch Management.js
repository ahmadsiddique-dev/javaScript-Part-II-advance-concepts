// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {

    constructor(name) {
        this.name = name
        this.branches = new Set();
    }

    addBranch (name) {
        this.branches.add(name)
        return "Done"
    }

    removeBranch (name) {
        this.branches.delete(name)
        return "Done"
    }

    displayBranch () {
        let arr = [...this.branches];
        arr.map((e, i) => {
            console.log(`${i+1}. ${e}`);
        })

        
    }
}


let myBank = new Bank("Alied");
console.log(myBank.addBranch("Gulgasht"));
console.log(myBank.addBranch("Kichehry"));
console.log(myBank.addBranch("Lalpur"));
console.log(myBank.addBranch("Chungi.09"));
myBank.displayBranch();
console.log(myBank.removeBranch("Gulgasht"));
myBank.displayBranch();






// Messy one code is under here.










// class Bank {

//   constructor() {
//     this.bankName = '';
//     this.branches = [];
//   }
  
//   addBranch(branch) {
//     this.branches.push(branch);
//     console.log(`${branch} added successfully.`);
//   }

//   removeBranch(branch) {
//     const index = this.branches.indexOf(branch);
//     if (index !== -1) {
//       this.branches.splice(index, 1);
//       console.log(`Branch ${branch} removed successfully.`);
//     } 
//     else {
//       console.log(`Branch "${branch}" does not exist.`);
//     }
//   }

//   displayBranches() {
//     if (this.branches.length === 0) {
//       console.log('No branches available.');
//     } else {
//       console.log('List of Bank Branches:');
//       this.branches.forEach((branch, index) => {
//         console.log(`${index + 1}. ${branch}`);
//       });
//     }
//   }
// }

// console.log("*********************************");

// const bank = new Bank();
// bank.addBranch('Gulgasht');
// bank.addBranch('Piran Gaeeb');
// bank.addBranch('Kichehry');
// bank.displayBranches();
// bank.removeBranch('Piran Gaeeb');
// bank.displayBranches();