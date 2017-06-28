class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
};

class Tree {
  constructor(data) {
    let node = new Node(data);
    this._root = node;
  }

  // for adding/removing a Node
  traverseDF(callback, found) {
    // Recursion - IIFE
    (function recurse(currNode) {
      // check if parentNode was found yet
      if (!found) {
        // step 2
        for (let i = 0, len = currNode.children.length; i < len; i++) {
          let childNode = currNode.children[i];
          // step 3
          recurse(childNode);
        }
        // step 4
        callback(currNode);
      }
      // step 1
    })(this._root);
  };

  contains(callback, traversal, found) {
    traversal.call(this, callback, found);
  };

  add(data, toData, traversal) {
    let child = new Node(data),
      parent = null,
      // apply callback to get full parentNode
      //  if it exists
      callback = function(node) {
        if (node.data === toData) {
            parent = node;
        }
      };

    this.contains(callback, traversal);

    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('Cannot add node to no parent.');
    }
  };

};