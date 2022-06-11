'use strict'

class circle {
    constructor(name, radius) {
        this.name = name;
        this.radius = radius;

    }

    get radius() {
        return this._radius;
      }

      set radius(value) {
        this._radius = value;
      }
    get diameter() {
        return this._radius * 2;
    } 
   area() {
        return 3.14 * this._radius * this._radius;
    }
    length() {
        return 2 * 3.14 * this._radius;
    }

};

let circleTest = new circle ('circle1', parseInt(prompt('Введіть радіус кола')) );
console.log(circleTest.radius);
console.log(circleTest.area());
console.log(circleTest.length());



console.log(circleTest);