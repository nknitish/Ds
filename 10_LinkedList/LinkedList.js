//===============================================================================
// LinkedList

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

  //push
  push(value) {
    let newNode = new Node(value);

    //If linked list is empty
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length += 1;
    return this;
  }

  //Pop
  pop() {
    // if linkedlist is empty
    if (!this.head) return;

    let temp = this.head;
    let prev = null;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    //pointing tail to last node
    this.tail = prev;

    if (this.length === 1) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
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

  shift() {
    // if linkedlist is empty
    if (!this.head) return;

    //Get currentNode
    let currentNode = this.head;

    //point head to next node of list
    this.head = this.head.next;
    this.length -= 1;

    //If there is no node in list
    if (!this.length) this.tail = null;

    //clear next value from current node
    currentNode.next = null;
    return currentNode;
  }

  // adding element in the begining of list
  unshift(value) {
    //creating new node
    let newNode = new Node(value);
    newNode.next = this.head;

    //pointing head to new Node
    this.head = newNode;
    this.length += 1;

    //If length is now 1 then assing same value to tail
    if (this.length == 1) this.tail = newNode;

    return this;
  }

  //get by index
  get(index) {
    //handle edge cases
    if (index < 0 || index >= this.length || index === undefined) return;

    let currentNode = this.head;

    //running loop till index
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  //set by index // replace value
  set(index, value) {
    //find the record
    let foundRecord = this.get(index);

    //if there is record on index then update it with value
    if (foundRecord) {
      foundRecord.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length || index === undefined) return;
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);

    // new node
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;

    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length || index === undefined) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let currentNode = prevNode.next;

    //Assing previous node with next node;
    prevNode.next = currentNode.next;

    //Clearing node's next element
    currentNode.next = null;

    this.length--;
    return currentNode;
  }
  //Reverse means reverse the node, which means a->b->c then a<-b<-c. Value remain same, pointer change.
  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      //geting next value
      let next = current.next;
      //Changing the pointer of current node to previous node
      current.next = prev;
      //Storing prevous node
      prev = current;
      //pointing current to next node
      current = next;
    }

    return prev;
  }
}

const list = new LinkedList();
list.push(10);
list.push(11);
list.push(12);
list.push(13);
list.push(14);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.unshift(5));
// console.log(list.unshift(4));
// console.log(list.unshift(3));

// console.log(list.set(1, "Four"));
// console.log(list.insert(2, "One"));
// console.log(list.insert(2, "One"));

// console.log(list.reverse());

// console.log(list);
//===============================================================================
