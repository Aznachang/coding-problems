class Stack {
  constructor() {
    this._size = 0;
    this.values = [];
  }

  push(value) {
    this.values[this._size++] = value;
  }

  pop() {
    if (this._size > 0) {
      let val = this.values[--this.size];
      delete this.values[this.size];
      this.values.length--;
    }

    return this.values[--this._size];
  }

  getSize() {
    return this._size;
  }

};

const balancedParens = input => {
  let newStr = new Stack();
  let pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  let len = input.length;

  for (let i=0; i<len; i++) {
    var curr = input[i];
    if (pairs[curr]) {
      newStr.push();
    } else if (curr === '}' || curr === ']' || curr === ')') {
      if (newStr.pop() !== curr) {
        return false;
      }
    }
  }

  return true;
};