// lets create some node
const input = [
  {name: 'Tausif', friends: ['Ruthba', 'Sakib', 'Monty']},
  {name: 'Sakib', friends: ['Ruthba', 'Tausif', 'Nazmul']},
  {name: 'Nazmul', friends: ['Ruthba', 'Tausif']},
  {name: 'Monty', friends: ['Angel', 'Nazmul', 'Ruthba']},
]
const myGraph = new Graph();
for (const obj of input) {
  let name = obj.name;
  let friends = obj.friends;
  let personNode = new Node(name)
  myGraph.addNode(personNode)
  for (let j = 0; j < friends.length; j++) {
    let friend = friends[j];
    let friendNode = myGraph.getNode(friend);
    if (friendNode === undefined) {
      friendNode = new Node(friend)
    }
    myGraph.addNode(friendNode)
    personNode.addEdges(friendNode)
  }
}

// console.log(myGraph.getNode('Tausif'))
// ---- BREADTH FIRST SEARCH ---------------------------------- //
const queue = [];
let start = myGraph.setStart('Ruthba'); 
let end = myGraph.setEnd('Angel');
// 1. flag the start as searched
start.searched = true;
// 2. push start node to the queue
queue.push(start);
// 3. search until the queue is empty or until connection is found
while(queue.length > 0) {
  let currentNode = queue.shift();
  if(currentNode === end) {
    console.log('Found ' + currentNode.value)
    break
  }; //console.log(currentNode)
  let edges = currentNode.edges;
  // 4. Search all the edges and flag them as searched and push to end of queue
  for (let i = 0; i < edges.length; i++) {
    let neighbour = edges[i];
    // if not searched //
    if (!neighbour.searched) {
      neighbour.searched = true;
      // indicate the parent of the neighbour
      neighbour.parent = currentNode;
      // push to the end of the queue
      queue.push(neighbour);
    }
  }
}
// ---- TRACE THE PATH ----------------------------- //
const path = [];
path.push(end);
let next = end.parent; console.log(next)
  while(next !== null) {
    path.push(next)
    next = next.parent;
  }
  // ---- DISPLAY THE RESULT IN CONSOLE LOG ----------- //
  let txt = '';
  for (let i = path.length - 1; i >= 0; i--) {
    let node = path[i];
    txt += (node.value)
    if (i !== 0) {
      txt += ' --> '
    }
  }

  console.log(txt)