class Rect {
  static calcArea(width: number, height: number): number {
    return width * height;
  }
  static calcPerimeter(width: number, height: number): number {
    return (width + height) * 2;
  }
  x: number;
  y: number;
  #width: number;
  #height: number;
  #area: number;
  #perimeter: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.#width = width;
    this.#height = height;
    this.#area = Rect.calcArea(this.#width, this.#height);
    this.#perimeter = Rect.calcPerimeter(this.#width, this.#height);
  }
  get area(): number {
    return this.#area;
  }
  get width(): number {
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
  get height(): number {
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
  // calcArea(): void {
  //   this.#area = this.width * this.height;
  // }
  // calcPerimeter(): void {
  //   this.#perimeter = (this.width + this.height) * 2;
  // }
}

let rect = new Rect(0, 0, 10, 10);
console.log(rect.area);
rect.height = 5;

// rect.area = 50;
