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
  }

  addEachFromArray(arr) {
    if (!Array.isArray(arr)) {return null;}

    arr.forEach((item) => {
      this.addToTail(item);
    });
    return this.head;
  }

  addToTail(value) {
    let newNode = new Node(value);

    if (head===null) {
      this.head = newNode;
    } else {
      // assign newNode at curr. tail's pointer
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  // check for a node value
  contains(target) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }

  reverseLinkedList() {
    // a --> b --> c --> d
    // null <-- a b-->c-->d

    let prevNode = null,
        currNode = this.head,
        nextNode;

    // continue until there is no Node
    while (currNode) {
      // currNode's pointer
      nextNode = currNode.next;
      // change currNode backwards <--
      currNode.next = prevNode;
      // move prevNode to the current Node
      prevNode = currNode;
      // move currNode to the next Node in line
      currNode = nextNode;
    }
    // prevNode will be the last Node
    return prevNode;
  };

  removeKthNode(k, i=1) {
    let curr = this.head,
        prev = this.head;

    if (this.head === null) {
      return null;
    } else {
      while (curr) {
        if (i===k) {
          prev  = curr.next;
          curr.next = null;
        }
        prev = curr;
        curr = curr.next;
      }
    }
    return this.head;
  };
}