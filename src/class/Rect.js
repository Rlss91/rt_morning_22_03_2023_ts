"use strict";
class Rect {
    static calcArea(width, height) {
        return width * height;
    }
    static calcPerimeter(width, height) {
        return (width + height) * 2;
    }
    x;
    y;
    #width;
    #height;
    #area;
    #perimeter;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.#width = width;
        this.#height = height;
        this.#area = Rect.calcArea(this.#width, this.#height);
        this.#perimeter = Rect.calcPerimeter(this.#width, this.#height);
    }
    get area() {
        return this.#area;
    }
    get width() {
        return this.#width;
    }
    set width(value) {
        if (value < 0) {
            return;
        }
        this.#width = value;
        this.#area = Rect.calcArea(this.#width, this.#height);
        this.#perimeter = Rect.calcPerimeter(this.#width, this.#height);
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        if (value < 0) {
            return;
        }
        this.#height = value;
        this.#area = Rect.calcArea(this.#width, this.#height);
        this.#perimeter = Rect.calcPerimeter(this.#width, this.#height);
    }
}
let rect = new Rect(0, 0, 10, 10);
console.log(rect.area);
rect.height = 5;
