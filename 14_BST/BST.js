class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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
      if (value === current.value) {
        return undefined;
      }
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

  find(value) {
    if (!this.root) return false;

    let current = this.root;
    while (true) {
      if (current.value === value) {
        return true;
      }

      if (value < current.value) {
        if (current.left === null) {
          return false;
        }
        current = current.left;
      } else {
        if (value > current.value) {
          if (current.right === null) {
            return false;
          }
          current = current.right;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(8);
bst.insert(9);
bst.insert(14);
bst.insert(18);
bst.insert(16);
bst.insert(7);
bst.insert(2);
console.log(bst);
