class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  ifEmpty() {
    return this.root === null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(curr, newNode) {
    if (newNode.data === curr.data) return;
    if (curr.data < newNode.data) {
      if (curr.right === null) {
        curr.right = newNode;
      } else {
        this.insertNode(curr.right, newNode);
      }
    } else {
      if (curr.left === null) {
        curr.left = newNode;
      } else {
        this.insertNode(curr.left, newNode);
      }
    }
  }

  search(root, data) {
    if (root == null) return false;
    if (root.data == data) return true;

    if (root.data < data) {
      return this.search(root.right, data);
    } else {
      return this.search(root.left, data);
    }
  }

  preOrder(root) {
    if (!root) return;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  postOrder(root) {
    if (!root) return;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.data);
  }

  inOrder(root) {
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }

  bfs() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.data);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (root.left === null) return root.data;
    return this.min(root.left);
  }

  max(root) {
    if (root.right === null) return root.data;
    return this.max(root.right);
  }

  delete(data){
    this.root=this.deleteNode(this.root,data)
  }

  deleteNode(root,data){
    if(root==null)return root

    if(data<root.data){
      root.left=this.deleteNode(root.left,data)
    }else if(data>root.data){
      root.right=this.deleteNode(root.right,data)
    }else{
      if(!root.left && !root.right)return null
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.data=this.min(root.right)
      root.right=this.deleteNode(root.right,root.data)
    }
    return root
  }

  height(root){
    if(!root)return -1
    return 1+ Math.max(this.height(root.left),this.height(root.right))
  }

  isValidBst(root,min=-Infinity,max=Infinity){
    if(!root)return true
    if(root.data<=min || root.data>=max)return false
    return this.isValidBst(root.left,min,root.data) && this.isValidBst(root.right,root.data,max) 
  }

  kThSmalles(k){
    let count=0
    let rslt=null
    function inOrder(node){
      if(!node || rslt!==null)return
      inOrder(node.left)
      count++
      if(count===k){
        rslt=node.data
        return
      }
      inOrder(node.right)
    }
    inOrder(this.root)
    return rslt
  }

  kThLargest(root,k){
    let count=0
    let rslt=null

    function reverseInOrder(node){
      if(!node || rslt!==null)return
      reverseInOrder(node.right)
      count++
      if(count===k){
        rslt=node.data
        return
      }
      reverseInOrder(node.left)
    }
    reverseInOrder(this.root)
    return rslt

  }
}

const b = new bst();
b.insert(10);
b.insert(5);
b.insert(15);
b.insert(3);
// b.insert(7);
// b.insert(18)
// b.insert(8)
// console.log(b.search(b.root,18))
// console.log(b.search(b.root,8))
// console.log(b.search(b.root,1))
// b.preOrder(b.root) //10,5,3,7,15
// console.log("-------")
// b.inOrder(b.root) //3,5,7,10,15
// b.postOrder(b.root) //3,7,5,15,10
b.bfs()
console.log("-------")
b.delete(10)
b.bfs()
// console.log(b.max(b.root));