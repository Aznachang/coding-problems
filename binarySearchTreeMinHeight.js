// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimum height.

class Binary_Tree {

  constructor() {
    this.root = null;
  }

  createMinHeightBST(sortedArr) {

    var middle;
    if (sortedArr.length === 0) {
      return 0;
    } else if (sortedArr.length === 1) {
      middle = 0;
    } else {
      middle = Math.floor(sortedArr.length / 2);
    }
    // http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
    this.insertNode(sortedArr[middle]);

    var leftArr = sortedArr.slice(0, middle);
    var rightArr = sortedArr.slice(middle+1, sortedArr.length);

    this.createMinHeightBST(leftArr);
    this.createMinHeightBST(rightArr);
  };

  insertNode(val) {
   var node = {
      data: val,
      left: null,
      right: null
    };
   var currentNode;
   this.addToBST(currentNode,node);
  }

  addToBST(currentNode, node) {
    if (!this.root) {
    //case when the first node is beign created
      this.root = node;
      return;
    }
    if (!currentNode) {
    //current node always starts with the root node
      currentNode = this.root;
    }
    if (node.data < currentNode.data) {
    //value < currentNode.data: try to add to the left of the currentNode
    //  if current node already has a left node, set the left node as the new currentNode and
    //  continue to check recursively to add the value into the right location
        if (!currentNode.left) {
            currentNode.left = node;
        } else {
            currentNode = currentNode.left;
            this.addToBST(currentNode,node);
        }
    } else {
      //here we assume the value is unique, i.e. node.data<> currentNode.data
      //value > currentNode.data: try to add to the right of the currentNode
      //  if current node already has a right node, set the left node as the new currentNode and
      //  continue to check recursively to add the value into the right location
     if (!currentNode.right) {
          currentNode.right = node;
      } else {
          currentNode = currentNode.right;
          this.addToBST(currentNode,node);
      }
    }
  }
}
