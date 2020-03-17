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

    // THE DEPTH FIRST SEARCH ALGORITHM WHERE THE 2nd ARGUMENT IS A CALLBACK FUNC
    depthFirst(startingNode, neighbourVisit) {
      const firstNode = this.searchNode(startingNode);
      const visitedNode = nodes.reduce((sum, node) => {
        sum[node.id] = false;
        return sum;
      }, {});
      
      // ALGORITHM WILL FIRST TRAVEL DOWN IF THERE EXIST A DEEPER LEVEL
      travel = (node) => {
        if (visitedNode[node.id]) {
          return 
        }
        neighbourVisit(node)
        visitedNode[node.id] = true

        node.neighbours.forEach(neighbour => {
          travel(neighbour)
        })
      }
      travel(firstNode);
    }

  };

};

// ----- USE CASE ----------------------------------------------------------------------------------------------------------
/*
const graph = graphCreator(true);
graph.addNode('a'); graph.addNode('b'); graph.addNode('c'); graph.addNode('d'); graph.addNode('e'); graph.addNode('f');
graph.addEdge('a', 'c'); graph.addEdge('a', 'e'); graph.addEdge('b', 'a'); graph.addEdge('b', 'c'); 
graph.addEdge('c', 'd'); graph.addEdge('c', 'e'); graph.addEdge('d', 'e'); graph.addEdge('e', 'f'); graph.addEdge('f', 'e');


graph.depthFirst('a', node => console.log(node.id))
*/
// -------------------------------------------------------------------------------------------------------------------------