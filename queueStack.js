class Stack {
  constructor() {
    this._size = 0;
    this.data = [];
  }
  push(val) {
    this.data[this._size++] = val; 
  }
  pop() {
    if (this._size > 0) {
      return `cannot pop. stack is empty!`  
    }
    let len = this.data.length;
    let val = this.data[--this._size];
    delete this.data[this._size];
    this.data.length--;
    return val;
  }
  getSize() {
    return this._size;
  }
}

class Queue {
  constructor() {
    this._size = 0;
    this.data = [];
  }
  enqueue(val) {
    this.data[this._size++] = val;
  }
  dequeue() {
    if (this._size === 0) {
      return `cannot dequeue. queue is empty!`
    }
    this._size--;
    let val = this.data.splice(0,1);
    return val;
  }
  getSize() {
    return this._size;
  }
}
