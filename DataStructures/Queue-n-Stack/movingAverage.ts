class MovingAverage {
  private head: number;
  private tail: number;
  private stream: number[] = [];
  private window: number;
  private res: number;
  private n: number;

  constructor(size: number) {
    this.window = size;
    this.head = 0;
    this.tail = 0;
    this.res = 0;
    this.n = 0;
  }
  next(val: number): number {
    this.res = 0;
    this.stream.push(val);
    this.n++;
    if (this.stream.length > this.window) {
      this.head++;
      this.n = this.window;
    }
    for (let i:number = this.head; i <= this.tail; i++) {
      this.res += this.stream[i];
    }
    this.tail++;
    return this.res / this.n;
  }
}

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // 1 / 1 = 1.0
console.log(movingAverage.next(10)); // (1 + 10) / 2 = 5.5
console.log(movingAverage.next(3)); // (1 + 10 + 3) / 3 = 4.6
console.log(movingAverage.next(5)); // (10 + 3 + 5) / 3 = 6.0
console.log(movingAverage.next(6)); // (3 + 5 + 6) / 3 = 4.6

