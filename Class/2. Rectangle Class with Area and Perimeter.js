// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
     
    constructor (height, width) {
        this.height = height,
        this.width = width
    }

    Area () {
        return this.height * this.width;
    }

    Perimeter () {
        return 2 * (this.width + this.height);
    }
}


let first = new Rectangle(34, 23);

console.log(first.Area()); 

// Try perimeter by yourself (Todo);