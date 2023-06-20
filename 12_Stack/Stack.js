//LIFO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (!this.first) return false;

    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  traverse() {
    let currentNode = this.first;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let stack = new Stack();

stack.push(10);
stack.push(9);
stack.push(8);
stack.push(7);
stack.push(6);
// stack.pop();
// stack.pop();
// stack.pop();
console.log("Poped", stack.pop());
console.log("Poped", stack.pop());
console.log("Poped", stack.pop());
// console.log("Poped", stack.pop());
// console.log("Poped", stack.pop());
// console.log("Poped", stack.pop());

stack.traverse();

console.log(stack);
