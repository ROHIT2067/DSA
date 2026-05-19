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
    return this.size === 0;
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
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
// stack.peek()
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
