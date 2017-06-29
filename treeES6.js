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

  filterDF(filter, node, depth, results) {
    result = results || [];
    depth = depth || 0;
    node = node || this._root;

    // base case - if filter cond. is met
    if (filter(node, depth)) {
      // push the value/data for this currNode
      results.push(node.data);
    }
    // traverse thru tree's children (leftmost -> rightmost)
    for (let i=0, len=node.children.length; i<len; i++) {
      let childNode = node.children[i];
      filterDF(filter, childNode, depth+1, results);
    }

    return results;
  }

  countLeaves(node, count) {
    node = node || this._root;
    count = count || 0;

    // base case - currNode has no children
    if (node.children.length === 0) {
      count = 1;
    } else {
      count = 0;
      for (let i=0, len=node.children.length; i<len; i++) {
        let childNode = node.children[i];
        count += this.countLeaves(childNode);
      }
    }
  }

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