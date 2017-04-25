var Tree = function(value) {
  this.children = [];
  this.value = value;
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  // check if child is a descendant of the root parent
  if (!this.isDescendant(child)) {
    // push to [children]
    this.children.push(child);
  } else {
    throw new Error('This child is a descendant of root parent!');
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  // [path1], [path2]
  var path1 = this.getAncestorPath(child1);
  if (!path1) {return null;}
  var path2 = this.getAncestorPath(child2);
  if (!path2) {return null;}

  // both paths were found
  var len = Math.min(path1.length, path2.length);
  var closestAncestor = null;
  console.log(`Me path is: ${path1}`);
  console.log(`Uncle path is: ${path2}`);
  for (let i=0; i<len;i++) {
    if (path1[i] === path2[i]){
      closestAncestor = path1[i];
      return closestAncestor;
    }
  }
  return closestAncestor;
};

Tree.prototype.getAncestorPath = function(child, ancestors) {
  // closure
  var currAncestors = ancestors || [];

  // base case
  if (this === child) {
    return currAncestors.unshift(child.value);
    // return true;
  }

  // recursive case
  for (let i=0; this.children.length; i++) {
    // add the parent to beg. of [path]
    if (this.children[i].getAncestorPath(child, currAncestors)) {
      // this -> current ParentNode
      currAncestors.unshift(this.value);
      return currAncestors;
    }
  }

  // worst case - no Path Found!
  return null;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  // check all children one row level down
  if (this.children.indexOf(child) !== -1) {
    return true;
  }

  // recursive for-loop
  for (let i=0; i<this.children.length;i++) {
    if (this.children[i].isDescendant(child))
      return true;
  }

  return false;
};

/**
  * remove an immediate child
  */
Tree.prototype.removeAnyChild = function(child) {
  var index;

  index = this.children.indexOf(child);

  // base case
  if (index !== -1) {
    this.children.splice(index, 1);
    return true;
  }
  // recursive
  for (let i=0; i<this.children.length; i++) {
    if (this.children[i].removeAnyChild(child)) {
      // return each tree structure part back up to root tree node
      return this;
    }
  }

  return null;
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  if (this.children.length === 0) {
    return this;
  }

  var index = this.children.indexOf(child)

  if (index !== -1) {
    this.children.splice(index, 1);
  }

  return this;
};