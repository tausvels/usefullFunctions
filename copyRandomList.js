// OUTPUTS AN ARRAY OF LISTNODES WHERE POINTER IS AT RANDOM //
const copyRandomList = (head) => {
  let map = new Map ();

  const helper = (node) => {
    if (!node) {
      return null;
    }
    const copyNode = {...node};
    map.set(node, copyNode);
    copyNode.next = helper(copyNode.next);
    copyNode.random = map.get(copyNode.random);
    return copyNode;
  };

  let copy = helper(head);
  return copy;
}

// ---- TEST CASE ------------------------ //
// const head = [[3,null],[3,0],[3,null]];
// console.log(copyRandomList(head))
// --------------------------------------- //