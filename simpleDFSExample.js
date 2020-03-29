
function dfs(tree, val) {
  let stack = [];
  stack.push(tree[0]);
  while(stack.length) {
    let node = stack.pop();
    if (node.value === val) {
      return node;
    }
    if (node.left) {
      stack.push(tree[node.left])
    }
    if (node.right) {
      stack.push(tree[node.right])
    }
  }
  return null
}


var tree = [
  {value: 6, left: 1, right: 2},
  {value: 5, left: 3, right: 4},
  {value: 7, left: null, right: 5},
  {value: 3, left: 6, right: null},
  {value: 4, left: null, right: null},
  {value: 9, left: 7, right: 8},
  {value: 2, left: 9, right: null},
  {value: 8, left: null, right: null},
  {value: 10, left: null, right: null},
  {value: 1, left: null, right: null}
  ]

  const result = dfs(tree,5)
  console.log(result)
