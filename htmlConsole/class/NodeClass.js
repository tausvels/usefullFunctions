function Node(val){
  this.value = val;
  this.left = null;
  this.right = null
  this.parent = null;
  this.edges = [];
  this.searched = false;
}

Node.prototype.addEdges = function(neighbour) {
  this.edges.push(neighbour);
  // both ways
  neighbour.edges.push(this);
}