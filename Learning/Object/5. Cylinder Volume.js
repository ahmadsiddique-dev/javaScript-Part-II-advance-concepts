// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.

// Volume of a cylinder : V = πr2h

// where r is the radius and h is the height of the cylinder

// const cylinde = {
//     height : 9,
//     radius : 3,
//     getVlm : function ()  {
//         return ((Math.PI ** 2) * this.height * this.radius);
//     }
// }

function Cylinder (hite, rad) {
    this.hite = hite,
    this.rad = rad,
    this.getVLM = function () {
        return Math.PI * (this.rad ** 2) * this.hite;
    }
}

let myCylinder = new Cylinder(9, 3);

console.log(myCylinder.getVLM().toFixed(3));
