// Node

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Push
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //POP
  pop() {
    if (!this.head) return false;

    let lastNode = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return lastNode;
  }

  //Traverse
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  //shift()
  shift() {
    if (!this.head) return null;

    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    removedNode.next = null;
    return removedNode;
  }

  // unshift()
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //Get
  get(index) {
    if (index < 0 || index >= this.length) return false;

    if (index <= this.length / 2) {
      let count = 0;
      let currentNode = this.head;

      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    } else {
      let count = this.length - 1;
      let currentNode = this.tail;

      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
      return currentNode;
    }
  }

  //Set
  set(index, value) {
    let currentNode = this.get(index);

    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  //Insert
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return this;
  }

  //Remove
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let currentNode = prevNode.next;
    let nextNode = currentNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    return currentNode;
  }

  //Reverse
  reverse() {}
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);

list.unshift("Zero");
list.unshift("One");
list.unshift("Two");
list.unshift("Three");

list.traverse();
