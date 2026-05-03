class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  //Insert First
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert End
  insertEnd(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }

  //Insert at any index
  insert(data,index){
    index--
    let newNode=new Node(data)
    if(index<0 || index>this.size)return console.log("Invalid Index")
        if(index===0){
            this.head=new Node(data,this.head)
        }else{
            let current=this.head

            for(let i=0;i<index-1;i++){
                current=current.next
            }
            newNode.next=current.next
            current.next=newNode
        }
        this.size++
  }

  //Delete by index
  delete(index){
    index--
    if(index<0 || index>=this.size)return console.log("Invalid Index")
        let current=this.head
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=current.next
        }else{
            for(let i=0;i<index-1;i++){
                current=current.next
            }
            removedNode=current.next
            current.next=removedNode.next
        }
        this.size--
        return console.log(`${removedNode.data} has been removed`)
  }

  //Delete by value
  deleteByValue(data){
      let removedNode
      if(!this.size)return console.log("Empty List")
        if(this.head.data===data){
            removedNode=this.head
            this.head=this.head.next
            this.size--
            return console.log(`${removedNode.data} has been removed`)
        }else{
            let current=this.head
            for(let i=0;i<this.size-1;i++){
                if(current.next.data===data){
                    removedNode=current.next
                    current.next=removedNode.next
                    this.size--
                    return console.log(`${removedNode.data} has been removed`)
                }
                current=current.next
            }
        }
        return console.log("Invalid Input")
    }
    
    //Search
    search(data){
        if(!this.size)return console.log("Empty List")
            let current=this.head
        for(let i=0;i<=this.size-1;i++){
            if(current.data===data){
                return console.log(`${current.data} has been found at ${i+1} index`)
            }
            current=current.next
        }
        return console.log("Invalid Input")
    }
  


  //Print Data
  printData() {
    let values = "";
    if (this.isEmpty()) return console.log("Empty List");
    let current = this.head;
    while (current) {
      values += `${current.data} `;
      current = current.next;
    }
    console.log(values);
  }
}

const list = new LinkedList();
list.insertFirst(3);
list.insertFirst(2);
list.insertFirst(1);
list.insertEnd(4);
list.insertEnd(5);
list.insertEnd(18);
// console.log(list.getSize())
// list.insertFirst(1)
// list.printData();
// list.delete(7)
// list.deleteByValue(18)
list.search(18)
list.printData();