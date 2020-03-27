// ---- FOR A TREE & SUBTREELIKE ----- //
//          3           4 
//         /  \        /  \  
//        4    5      1    2
//       / \    
//      1   2    
// ---- FUNCTION OUTPUTS TRUE -------  //

const isSubtree = (subtree, tree) => {
  // BASE CASE //
  if (!subtree || !tree) {
    return !subtree && !tree;
  }
  // RECURSIVE CASE
  if (subtree.val === tree.val && isEqual(subtree, tree)) {
    return true;
  }

  return isSubtree(subtree.left, tree) || isSubtree(subtree.right, tree);
}

const isEqual = (tree1, tree2) => {
  // BASE CASE //
  if (!tree1 || !tree2) {
    return tree1 === tree2;
  }
  // RECURSIVE CASE //
  if (tree1.val === tree2.val) {
    return (isEqual(tree1.left, tree2.left) && isEqual(tree1.right, tree2.right));
  }
  return false;
}