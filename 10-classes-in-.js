
// class MyClass {
    
// }

// console.log(typeof undefined);


class Color {
    constructor (r, g, b) {
        this.values = [r, g, b]
    }

    getRed () {
        return this.values[0]
    }
}

const red = new Color(255, 3, 4);

console.log(red.getRed());


