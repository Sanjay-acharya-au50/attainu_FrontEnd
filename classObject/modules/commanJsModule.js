/*
        MODULES
        1. CommanJS - runs only node
        2. ES-6 Module - runs in web browser 
        3. AMD - Async modul Defininition  // unless we have 30 yr code
        4. UMD - Universal Module Definition  // unless we have 30 yr code

        ES5 diddnt have module, developers build solution for it, thy implemented modules


        need of module
        * Maintainability
        * Reusability
        * Abstract (hide)

*/
// --------------------------------------------------------------



//  comman JS
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    draw(){
        console.log("this is a draw")
    }
}

class Rectangle {
    constructor(height,length){
        this.height = height;
        this.length = length;
    }
}


// console.log(module);
// module.exports = Circle // for one class
module.exports.Circle = Circle; // for multiple class
// console.log(c);
module.exports.Rectangle = Rectangle; // for multiple class



// --------------------------------------------------------------

