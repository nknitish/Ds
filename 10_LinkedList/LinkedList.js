// Node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Push
  push(value) {
    let newNode = new Node(value);

    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;

    return this;
  }

  //POP
  pop() {
    //If No Length
    if (!this.length) return undefined;

    // If there is only One Node
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = this.head;
      this.length--;
      return temp;
    }

    let temp = this.head;
    let previous;

    while (temp.next) {
      previous = temp;
      temp = temp.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    return temp;
  }

  //Traverse
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  //shift()

  shift() {
    if (!this.head) return undefined;

    let currentNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return currentNode;
  }

  // unshift()

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length || index === undefined) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, value) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let newNode = new Node(value);

    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;

    previousNode.next = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    // //First Approch
    // let mid = parseInt(this.length / 2);
    // for (let i = 0; i < mid; i++) {
    //   let left = this.get(i);
    //   let right = this.get(this.length - i - 1);
    //   let temp = left.value;
    //   left.value = right.value;
    //   right.value = temp;
    // }
  }
}

const list = new LinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

// list.reverse();
list.traverse();
