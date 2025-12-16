const val = 0;
val.x = 3;

// console.log(val.x); // Prints undefined.
// console.log(val); // Prints 0.

// But in strict mode it throws an error

function main() {
  "use strict";

  const val = 0;
  val.x = 3;

  // console.log(val.x); // Prints undefined.
  // console.log(val);
}

// console.log(main());


function example() {

  let a = b = c = 1;

}


function g() {
  return "age";
}

function f() {
  return 25;
}

let x = {
  name : "Ahmad"
}

x[g()] = f();

// console.log(x);

let y = {
  f() {
    console.log("Good Morning Sir!");
  }
}

// console.log(y["f"]());

// console.log(3/4);
// console.log(+false); 
// console.log(~3)

let var1, var2 = null;

// console.log(var1 ?? var2);




// delete firstObj.cast

// console.log(firstObj);



let firstObj = {
  name : "Ahmad",
  so : "Siddique",
  cast : "Shikrani"
}

function getName() {
  return (`${this.name} ${this.so}`);
}

firstObj.getName = getName();
firstObj.getName = getName;


// console.log(firstObj.getName());

// console.log([].toString() + [].toString());


