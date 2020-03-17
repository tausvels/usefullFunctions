queueCreator = () => {
  const queue = [];
  return {

    // ADDS A NODE TO THE QUEUE
    add(x) {
      queue.unshift(x)
    },

    // REMOVES A NODE FROM THE QUEUE
    remove() {
      if (queue.length === 0) {return undefined;}
      return queue.pop();
    },

    // MOVES TO THE NEXT NODE
    next() {
      if (queue.length === 0) {return undefined;}
      return queue[queue.length - 1];
    },

    get length() {
      return queue.length
    },

    // RETURNS A BOOLEN FOR WHEN THE QUEUE IS EMPTY OR NOT
    empty() {
      return queue.length === 0;
    }
  };
};

// NODE CREATOR FUNCTION //
nodeCreator = (id) => {
  const neighbours = [];
  return {
    id,
    neighbours,
    addNeighbours(node) {neighbours.push(node)}
  };
};

// GRAPH CREATOR FUNCTION //
graphCreator = (uni = false) => {
  const nodes = [];
  const edges = [];
  return {
    uni,
    nodes,
    edges,
    addNode(id) {
      nodes.push(nodeCreator(id))
    },
    searchNode(id) {
      return nodes.find(node => node.id === id)
    },
    addEdge(nodeId1, nodeId2) { // nodeId1 ==> Parent node, nodeId2 ==> branch node
      const a = this.searchNode(nodeId1);
      const b = this.searchNode(nodeId2);
      a.addNeighbours(b)
      if (!uni) {b.addNeighbours(a)}
      edges.push(`${nodeId1}${nodeId2}`)
    },
    display() {
      return nodes.map(({neighbours, id}) => {
        let output = `${id}`;
        if (neighbours.length) {
          output += ` => ${neighbours.map(node => node.id).join(' ')}`
        }
        return output
      }).join('\n')
    },

    // THE BREADTH FIRST SEARCH ALGORITHM WHERE THE 2nd ARGUMENT IS A CALLBACK FUNC
    breadthFirst(startingNode, neighbourVisit) {
      const firstNode = this.searchNode(startingNode);
      const visitedNode = nodes.reduce((sum, node) => {
        sum[node.id] = false; // setting the initial value of all the ndoes visited to FALSE
        return sum;
      }, {});
      const queue = queueCreator();
      queue.add(firstNode);
      while(!queue.empty()) {
        const temp = queue.remove() // CONTAINS THE FIRST NODE THAT WAS PUSHED
        if (!visitedNode[temp.id]) {
          neighbourVisit(temp)
          visitedNode[temp.id] = true; // SETS THE NODE ID TO BE TRUE AFTER THE VISIT
        };
        temp.neighbours.forEach(node => {
          if (!visitedNode[node.id]) { // IF THE NODE HAS NOT BEEN VISITED, IT WILL BE FALSE AND HENCE ADDED TO QUEUE
            queue.add(node);
          }
        })
      };
    }

  };
};

// ----- USE CASE ----------------------------------------------------------------------------------------------------------
/*
const graph = graphCreator(true);
graph.addNode('a'); graph.addNode('b'); graph.addNode('c'); graph.addNode('d'); graph.addNode('e'); graph.addNode('f');
graph.addEdge('a', 'c'); graph.addEdge('a', 'e'); graph.addEdge('b', 'a'); graph.addEdge('b', 'c'); 
graph.addEdge('c', 'd'); graph.addEdge('c', 'e'); graph.addEdge('d', 'e'); graph.addEdge('e', 'f'); graph.addEdge('f', 'e');

graph.breadthFirst('c', node => console.log(node.id))

*/
// -------------------------------------------------------------------------------------------------------------------------