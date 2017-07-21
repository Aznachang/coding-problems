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
}