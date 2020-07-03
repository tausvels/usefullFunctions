function Tree(){
  this.root = null;
}
function Node(val){
  this.value = val;
  this.left = null,
  this.right = null;
}
Tree.prototype.addValue = function(val) {
  const node = new Node(val);
  if (this.root === null) {this.root = node}
  else {this.root.addNode(node)}
}
Tree.prototype.traverse = function(){
  return [this.root.visit()]; // root = node. So visit() is func of node
}
Tree.prototype.find = function (val){
  const found = this.root.search(val);
  return found;
}
Node.prototype.addNode = function(node) {
  if (node.value < this.value) { // this referes to the current node and node refers to the incoming node
    if (this.left === null) {
      this.left = node
    } else {
      this.left.addNode(node)
    }
  }
  else if (node.value > this.value){
    if (this.right === null) {
      this.right = node; 
    } else {
      this.right.addNode(node)
    }
  }
}
Node.prototype.visit = function() {
  // in order
  // move console log up and down to achieve preOrder and postOrder respectively.
  if (this.left !== null) {
    this.left.visit();
  }
  console.log(this.value) 
  if (this.right !== null) {
    this.right.visit()
  }
}
Node.prototype.search = function(val) {
  if (this.value === val) { 
    return this;
  }
  else if (val < this.value && this.left !== null) {return this.left.search(val)}
  else if (val > this.value && this.right !== null) {return this.right.search(val)
  } else {
    return null;
  }
    
}
// ------------------TEST CASE-------------------------------- //
// const input = [7,4,5,7,9,10, 20, 3, 5]
// const myTree = new Tree();
// for (num of input) {
//   myTree.addValue(num)
// }
// const sorted = myTree.traverse()
// console.log(myTree)

function sum(a, b) {
  return a + b;
}