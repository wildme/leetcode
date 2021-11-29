class MyCircularQueue {
  readonly queue: any[];
  protected head: number;
  protected tail: number;

  constructor(k: number) {
    this.queue = new Array(k);
    this.head = -1;
    this.tail = -1;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    if (this.isEmpty()) { 
      this.head = 0; 
      this.tail = 0;
    } else {
      this.tail++
    }
    if (this.tail === this.queue.length) this.tail = 0;
    this.queue[this.tail] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.head === this.queue.length - 1) { 
      delete this.queue[this.head];
      this.head = 0;
    } else {
      delete this.queue[this.head];
      this.head++;
    }
    return true;
  }

  isEmpty(): boolean {
    return this.queue.every(_ => _ === undefined);
  }

  isFull(): boolean {
    return this.queue.includes(undefined) ? false : true;
  }
  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.queue[this.tail];
  }
}
