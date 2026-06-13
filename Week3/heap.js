//MaxHeap
class maxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  push(data) {
    this.heap.push(data);
    this.heapifyUp();
  }

  swap(i1, i2) {
    let temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  heapifyUp() {
    let curr = this.heap.length - 1;
    while (this.heap[curr] > this.heap[this.getParentIndex(curr)]) {
      this.swap(curr, this.getParentIndex(curr));
      curr = this.getParentIndex(curr);
    }
  }

  peek() {
    return this.heap[0];
  }

  pull() {
    if(this.heap.length===0)return "Empty"
    if(this.heap.length===1)return this.heap.pop()
    let removed = this.heap[0]
    this.heap[0]=this.heap.pop()
    this.heapifyDown();
    return removed;
  }

  heapifyDown() {
    let curr = 0;

    while (this.heap[this.getLeftChildIndex(curr)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(curr);

      if (
        this.heap[this.getRightChildIndex(curr)] !== undefined &&
        this.heap[this.getRightChildIndex(curr)] >
          this.heap[this.getLeftChildIndex(curr)]
      ) {
        biggestChildIndex = this.getRightChildIndex(curr);
      }

      if (this.heap[curr] < this.heap[biggestChildIndex]) {
        this.swap(curr, biggestChildIndex);
        curr = biggestChildIndex;
      } else {
        return;
      }
    }
  }

  kthLargest(k){
        if(k<1 || k>this.heap.length)return "Invalid Input"
        return [...this.heap].sort((a,b)=>b-a)[k-1]
    }

    sort(){
      const clone=new maxHeap()
      clone.heap=[...this.heap]
      const rslt=[]
      while(clone.heap.length){
        rslt.push(clone.pull())
      }
      return rslt
    }
}

// const heap = new Heap();
// heap.push(5);
// heap.push(1);
// heap.push(10);
// heap.push(8);
// heap.push(11);
// heap.push(18);
// heap.push(100);
// console.log(heap.pull())
// console.log(heap.heap.join(","));

//MinHeap
class minHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  push(data) {
    this.heap.push(data);
    this.heapifyUp();
  }

  swap(i1, i2) {
    let temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  heapifyUp() {
    let curr = this.heap.length - 1;
    while (this.heap[curr] < this.heap[this.getParentIndex(curr)]) {
      this.swap(curr, this.getParentIndex(curr));
      curr = this.getParentIndex(curr);
    }
  }

  peek() {
    return this.heap[0];
  }

  pull() {
    if(this.heap.length===0)return "Empty"
    if(this.heap.length===1)return this.heap.pop()
    let removed = this.heap[0]
    this.heap[0]=this.heap.pop()
    this.heapifyDown();
    return removed;
  }

  heapifyDown() {
    let curr = 0;

    while (this.heap[this.getLeftChildIndex(curr)] !== undefined) {
      let smallestChildIndex = this.getLeftChildIndex(curr);

      if (
        this.heap[this.getRightChildIndex(curr)] !== undefined &&
        this.heap[this.getRightChildIndex(curr)] <
          this.heap[this.getLeftChildIndex(curr)]
      ) {
        smallestChildIndex = this.getRightChildIndex(curr);
      }

      if (this.heap[curr] > this.heap[smallestChildIndex]) {
        this.swap(curr, smallestChildIndex);
        curr = smallestChildIndex;
      } else {
        return;
      }
    }
  }

  kthSmallest(k){
        if(k<1 || k>this.heap.length)return "Invalid Input"
        return [...this.heap].sort((a,b)=>a-b)[k-1]
    }

    sort(){
      const clone=new minHeap()
      clone.heap=[...this.heap]
      const rslt=[]
      while(clone.heap.length){
        rslt.push(clone.pull())
      }
      return rslt
    }
}
const MinHeap=new minHeap()
MinHeap.push(10)
MinHeap.push(8)
MinHeap.push(11)
MinHeap.push(18)
console.log(MinHeap.heap.join(','))
// console.log(MinHeap.kthSmallest(5))
console.log(MinHeap.sort())
// console.log(MinHeap.pull())
// console.log(MinHeap.pull())
// console.log(MinHeap.pull())
// console.log(MinHeap.pull())
// console.log(MinHeap.pull())
// console.log(MinHeap.pull())
// console.log(MinHeap.pull())