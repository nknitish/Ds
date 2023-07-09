class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  //Breadth Fist Search
  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];
    //Adding Root to Queue
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
  //Depth First Search Pre Order
  DFSPreOrder() {
    let current = this.root;
    let data = [];

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    //Initial Node
    traverse(current);
    return data;
  }

  //Depth First Search Post Order
  DFSPostOrder() {
    let current = this.root;
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }

    traverse(current);
    return data;
  }

  //Depth First Search In Order

  DFSInOrder() {
    let current = this.root;
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

const bst = new BinaryTree();
bst.insert(10);
bst.insert(7);
bst.insert(8);
bst.insert(9);
bst.insert(2);
bst.insert(5);
bst.insert(11);
bst.insert(16);
bst.insert(12);
bst.insert(13);
bst.insert(17);

console.log(bst.BFS().map((e) => e.value));
console.log(bst.DFSPreOrder().map((e) => e.value));
console.log(bst.DFSPostOrder().map((e) => e.value));
console.log(bst.DFSInOrder().map((e) => e.value));
