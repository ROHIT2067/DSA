class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    this.prev = null;
  }
}

class dlinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insertFirst
  insertFirst(data) {
    let newNode = new Node(data, this.head);
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.size++;
  }

  //insertEnd
  insertEnd(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
    this.size++;
  }

  //insert at any index
  insert(data, index) {
    index--;
    if (index < 0 || index >= this.size) return console.log("Invalid Index");

    if (index === 0) {
      let newNode = new Node(data, this.head);
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else {
      let current = this.head;
      let newNode = new Node(data);
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next.prev = newNode;
      newNode.prev = current;
      current.next = newNode;
    }
    this.size++;
  }

  //delete by index
  deleteByIndex(index) {
    let removedNode;
    index--;
    if (index < 0 || index >= this.size) return console.log("Invalid Index");

    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = removedNode.next;
      if (removedNode.next) {
        removedNode.next.prev = current;
      }
    }
    this.size--;
    console.log(`${removedNode.data} has been removed`);
  }

  //delete by value
  deleteByValue(data) {
    if (!this.head) return console.log("List is empty");
    let removedNode;
    if (this.head.data === data) {
      removedNode = this.head;
      this.head = removedNode.next;
      if (this.head) {
        this.head.prev = null;
      }
      this.size--;
    } else {
      let current = this.head;
      for (let i = 0; i < this.size; i++) {
        if (current.next && current.next.data === data) {
          removedNode = current.next;
          current.next = removedNode.next;
          if (removedNode.next) {
            removedNode.next.prev = current;
          }
          this.size--;
          break;
        }
        current = current.next;
      }
    }
    if (removedNode) {
      return console.log(`${removedNode.data} has been removed`);
    } else {
      return console.log("Invalid Input");
    }
  }

  //search
  search(data) {
    if (!this.head) return console.log("Empty List");
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.data === data) {
        return console.log(`${data} found at ${i + 1} index`);
      }
      current = current.next;
    }
    return console.log(`${data} not found`);
  }

  //findMiddle
  middle() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return console.log(slow.data);
  }

  //deleteMiddle
  deleteMiddle() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    slow.prev.next = slow.next;
    slow.next.prev = slow.prev;
  }

  //reverse
  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }
  }

  //print
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const dlist = new dlinkedList();
// dlist.insertFirst(3)
// dlist.insertFirst(2)
// dlist.insertFirst(1)
dlist.insertEnd(2);
dlist.insertFirst(1);
dlist.insertEnd(3);
// dlist.insert(18,4)
// dlist.deleteByIndex(3);
// dlist.deleteByValue(4)
// dlist.search(4)
// dlist.middle()
dlist.insertEnd(4);
dlist.insertEnd(5);
dlist.insertEnd(6);
// dlist.insertEnd(7);
// dlist.deleteMiddle()
dlist.reverse()
dlist.print();
