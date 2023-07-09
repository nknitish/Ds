class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  remove() {}

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (element <= parentValue) break;

      if (parentValue < element) {
        this.values[parentIndex] = element;
        this.values[idx] = parentValue;
      }
      idx = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(10);
heap.insert(40);
heap.insert(60);
heap.insert(30);
heap.insert(25);
heap.insert(45);
console.log(heap.values);
