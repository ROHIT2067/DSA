// queue in data structures is a linear collection of elements that operates under the First In,
// First Out (FIFO) principle. This means that the first element added to the queue will be the first one removed.

//TYPES OF QUEUE
// 1. Simple Queue
// A simple queue operates on the FIFO (First In, First Out) principle, where elements are added to the rear and
//  removed from the front. It is the most basic form of a queue used for sequential data processing.

// 2. Circular Queue
// A circular queue is a more efficient version of the simple queue. It uses a circular structure to utilize memory
// optimally. In a circular queue, when the rear reaches the end of the array and there is space at the beginning,
// it can wrap around and use this space, thus maximizing the use of available memory.

// 3. Priority Queue
// In a priority queue, elements are not necessarily dequeued in the order they were enqueued. Instead, each element is
// associated with a priority, and the element with the highest priority is dequeued first. Priority queues are often
// implemented using heaps to allow for efficient priority-based retrieval.

// 4. Double-Ended Queue (Deque)
// A deque allows insertion and removal of elements from both the front and the rear of the queue. This flexibility
// makes it a handy tool for various applications where elements need to be processed from both ends.

//Queue
class queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue Underflow";
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) return "Queue Underflow";
    return this.queue[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.queue.length;
  }

  reverse() {
    const stack = [];
    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    }
    while (stack.length > 0) {
      this.enqueue(stack.pop());
    }
  }

  printQueue() {
    for (let i = 0; i < this.queue.length; i++) {
      console.log(this.queue[i]);
    }
  }
}

// const myq = new queue();
// myq.enqueue(5);
// myq.enqueue(4);
// myq.enqueue(3);
// myq.enqueue(2);
// myq.dequeue();
// myq.printQueue();

//Circular Queue
var circularQueue = function (size) {
  this.queue = [];
  this.size = size;
};
  circularQueue.prototype.enQueue = function (data) {
    if (this.size === this.queue.length) return "Queue Overflow";
    this.queue.push(data);
  };

  circularQueue.prototype.deQueue = function () {
    if (this.queue.length === 0) return "Queue Underflow";
    this.queue.shift();
  };

  circularQueue.prototype.front = function () {
    if (this.queue.length === 0) return "Queue Underflow";
    return this.queue[0];
  };

  circularQueue.prototype.rear = function () {
    if (this.queue.length === 0) return "Queue Underflow";
    return this.queue[this.queue.length - 1];
  };

  circularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0;
  };

  circularQueue.prototype.isFull = function () {
    return this.size === this.queue.length;
  };

//Queue using stacks
function queue() {
  this.stack1 = [];  //intake stack. Every new element lands here.
  this.stack2 = []; //output stack. Elements are served from here in queue order.
}

queue.prototype.enqueue = function (data) {
  this.stack1.push(data);
};

queue.prototype.dequeue = function () {
  if (this.isEmpty()) return "Queue Underflow";
  if (this.stack2.length === 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

queue.prototype.peek = function () {
  if (this.stack2.length == 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2[this.stack2.length - 1];
};

queue.prototype.isEmpty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

queue.prototype.size = function () {
  return this.stack1.length + this.stack2.length;
};

queue.prototype.rear = function () {
  if (this.isEmpty()) return "Queue Underflow";
  return this.stack1[this.stack1.length - 1];
};

//Queue using linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = next;
  }
}

class queueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enQueue(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  deQueue() {
    if (this.isEmpty()) return "Queue underflow";
    let removedNode = this.head;
    this.head = removedNode.next;
    if (!this.head) this.tail = null;
    this.size--;
    return removedNode;
  }

  front() {
    if (this.isEmpty()) return "Queue underflow";
    return this.head.data;
  }

  back() {
    if (this.isEmpty()) return "Queue underflow";
    return this.tail.data;
  }
  isEmpty() {
    return this.size === 0;
  }
}
