"use strict";
class Rect {
    x;
    y;
    width;
    height;
    #area;
    #perimeter;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.#area = this.#perimeter = 0;
        this.calcArea();
        this.calcPerimeter();
    }
    calcArea() {
        this.#area = this.width * this.height;
    }
    calcPerimeter() {
        this.#perimeter = (this.width + this.height) * 2;
    }
}
let rect = new Rect(0, 0, 10, 10);
