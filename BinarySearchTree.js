class BinarySearchTree {

  constructor(val) {
    this.root = null;
  }

  makeNode(val) {
    let newNode = {
      value : val;
      left : null;
      right : null;
    };
  }

  // non-recursive way
  insertIterative(val) {
    let node = makeNode(val);
    let currentNode = this.root;

    if (!this.root) {
        this.root = node;
    } else {
      // check to see if a Node exists
      while (currentNode) {
        // val <= currentNode.val
        if (val <= currentNode.val) {
          // left-child branch is null!
          if (!currentNode.left) {
              currentNode.left = node;
              break; // get out of the while
          } else {
            // move down to the left-child
            currentNode = currentNode.left;
            }
        } else {
          // right-child branch is null!
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            // move down to the right-child
            currentNode = currentNode.right;
            }
          }
      }
    }
  }

  // recursive way
  insertRecurse(val) {
    let node = makeNode(val);
    let currentNode = this.root;

    // # to insert < currNode's value
    if (val <= currentNode.value) {
      // leftNode val does not exist
      if (currentNode.left === null) {
        this.left = node; // new BinarySearchTree(val)
      // if 'leftNode' val exists
      } else {
        // go to leftNode and check whether can insert to its left/right side
        this.left.insertRecurse(val);
      }
        // # to insert > currNode's value
    } else if (val > this.value) {
      // rightNode val does not exist
      if (this.right === null) {
        this.right = node; // new BinarySearchTree(val)
      // if 'leftNode' val exists
      } else {
        // go to rightNode and check whether can insert to its left/right side
        this.right.insertRecurse(val);
      }
    }
  };

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
};