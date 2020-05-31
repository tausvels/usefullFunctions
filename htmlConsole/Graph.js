function Graph (){
  this.nodes = [];
  this.graph = {};
  this.start = null;
  this.end = null;
}

Graph.prototype.addNode = function(n) {
  this.nodes.push(n);
  const value = n.value;
  this.graph[value] = n;
}
Graph.prototype.getNode = function (friend) {
  let result = this.graph[friend];
  return result;
}
Graph.prototype.setStart = function(friend) {
  this.start = this.graph[friend];
  return this.start;
}
Graph.prototype.setEnd = function(friend) {
  this.end = this.graph[friend]
  return this.end;
}
Graph.prototype.reset = function() {
  for (let i = 0; i < this.nodes.length; i++) {
    this.nodes[i].searched = false;
    this.nodes[i].parent = null
  }
}