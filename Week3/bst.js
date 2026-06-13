class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, data) {
    if (!root) return false;

    if (root.data === data) {
      return true;
    } else if (data < root.data) {
      return this.search(root.left, data);
    } else {
      return this.search(root.right, data);
    }
  }

  height(root) {
    if (!root) {
      return -1;
    } else {
      return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }

  min(root) {
    if (!root) return null;
    if (!root.left) return root.data;
    return this.min(root.left);
  }

  max(root) {
    if (!root) return null;
    if (!root.right) return root.data;
    return this.max(root.right);
  }
}

const t = new binarySearchTree();
t.insert(10);
t.insert(5);
t.insert(18);
console.log(t.search(t.root, 18));
console.log(t.max(t.root));
