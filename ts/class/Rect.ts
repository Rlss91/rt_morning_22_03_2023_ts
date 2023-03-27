class Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  #area: number;
  #perimeter: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.#area = this.#perimeter = 0;
    this.calcArea();
    this.calcPerimeter();
  }
  calcArea(): void {
    this.#area = this.width * this.height;
  }
  calcPerimeter(): void {
    this.#perimeter = (this.width + this.height) * 2;
  }
}

let rect = new Rect(0, 0, 10, 10);
// rect.area = 50;
