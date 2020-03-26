const Treenode = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const isSymetric = (root) => {
  if (root === null) {
    return true;
  }
  return isMIrror(root.left, root.right);
}
const isMIrror = (tree1, tree2) => {
  // ---- BASE CASE ----------------------------- //
  if (tree1 === null || tree2 === null) {
    return true
  } 
  if (tree1.val !== tree2.val) {
    return false
  }
  // -------------------------------------------- //
  return isMIrror(tree1.left, tree2.right) && isMIrror(tree1.right, tree2.left);
}

// ---- TEST CASES ------------------------------ // (WOULD FAIL IF THE TREE IS NOT MADE RIGHT)
/*
myTree = new Treenode();
myTree.val = 1;
myTree.left = new Treenode (2);
myTree.right = new Treenode (2);
myTree.left.left = 3;
myTree.left.right = 4;
myTree.right.left= 4;
myTree.right.right=3;

console.log(myTree)
console.log(isSymetric(myTree))
*/
module.exports = isSymetric;