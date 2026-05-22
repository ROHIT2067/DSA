//Stack
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  pop() {
    if (this.isEmpty()) return console.log("stack is empty");
    const val = this.stack.pop();
    return console.log(`${val} has been removed`);
  }

  peek() {
    if (this.isEmpty()) return console.log("stack is empty");
    return console.log(`${this.stack[this.size() - 1]} is the value`);
  }

  printStack() {
    if (this.isEmpty()) return "The stack is empty";
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }

  reverseStack() {
    let newStack = [];
    while (this.stack.length) newStack.push(this.stack.pop());
    this.stack = newStack;
    // return newStack
  }
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
// stack.reverseStack()
// stack.printStack()

//Reverse String using stack
function reverseString(str) {
  let split = str.split(" ");
  let stack = [];
  for (let n of split) {
    stack.push(n);
  }
  let rslt = "";
  while (stack.length) {
    let current = stack.pop();
    if (current) {
      rslt += " " + current;
    }
  }
  return rslt.trim();
}
// console.log(reverseString("kappi love thambi"))

//Valid parentheses
function isValid(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0) {
        return false;
      }
      let top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// console.log(isValid("([{}])"));

//Palindrome
function isPalindrome(str) {
  let s = str.toLowerCase();
  let stack = [];
  for (let n of s) stack.push(n);
  let Reverse = "";
  while (stack.length) Reverse += stack.pop();
  return s === Reverse;
}
// console.log(isPalindrome("tahmbi"))

//Stack using linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedStack {
  constructor() {
    this.tHead = null;
  }

  push(data) {
    this.tHead = new Node(data, this.tHead);
  }

  pop() {
    if (this.tHead == null) return "Stack UnderFlow";
    const tHead = this.tHead;
    this.tHead = this.tHead.next;
    return tHead.data;
  }

  peek() {
    if (this.tHead == null) return "Stack UnderFlow";
    return this.tHead.data;
  }

  print() {
    if (this.tHead == null) return "Stack Underflow";
    let current = this.tHead;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedStackk = new LinkedStack();
linkedStackk.push(5);
linkedStackk.push(4);
linkedStackk.push(3);
linkedStackk.push(2);
linkedStackk.push(1);

//MinStack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // tracks minimums
  }

  push(val) {
    this.stack.push(val);
    const min = this.minStack.length === 0 ? val : Math.min(val, this.getMin());
    this.minStack.push(min);
  }

  pop() {
    if (this.stack.length === 0) return "Stack Underflow";
    this.minStack.pop();
    return this.stack.pop();
  }

  peek() {
    if (this.stack.length === 0) return "Stack Underflow";
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) return "Stack Underflow";
    return this.minStack[this.minStack.length - 1];
  }

  printMin() {
    for (let i = 0; i < this.minStack.length; i++) {
      console.log(this.minStack[i]);
    }
  }
}
const min = new MinStack();

//Undo-redo using Stack
class undoRedo {
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }

  execute(action) {
    this.undoStack.push(action);
    this.redoStack = []; //Clear redo history on new action
    console.log(`Executed : ${action}`);
  }

  undo() {
    if (this.undoStack.length === 0) return "Nothing to undo";
    const action = this.undoStack.pop();
    this.redoStack.push(action);
    console.log(`Undone : ${action}`);
  }

  redo() {
    if (this.redoStack.length === 0) return "Nothing to redo";
    const action = this.redoStack.pop();
    this.undoStack.push(action);
    console.log(`Redone : ${action}`);
  }

  getState() {
    console.log("Undo Stack = ", this.undoStack);
    console.log("Redo Stack = ", this.redoStack);
  }
}

//Stack using queue
class stackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(data) {
    this.queue2.push(data);
    while (this.queue1.length) {
      this.queue2.push(this.queue1.shift());
    }
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  pop() {
    if (this.isEmpty()) return "Stack Underflow";
    return this.queue1.shift();
  }

  peek() {
    if (this.isEmpty()) return "Stack Underflow";
    return this.queue1[0];
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  size() {
    return this.queue1.length;
  }

  printStack() {
    if (this.isEmpty()) return console.log("Stack is empty");
    for (let i = 0; i < this.queue1.length; i++) {
      console.log(this.queue1[i]);
    }
  }
}
