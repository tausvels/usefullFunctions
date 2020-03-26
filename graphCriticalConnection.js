/*
const buildAdjList = (n, connections) => {
  const r = Array(n).fill().map(() => []);
  for (let c of connections) {
    let [a , b] = c;
    // console.log('c is ==>>', c, ' a -->> ', a, ' b ==>>> ', b)
    r[a].push(b);
    r[b].push(a);
  }
  // console.log('r now is ==> ', r)
  return r;
}

const criticalConnection = (n, connections) => {
  const adjList = buildAdjList(n, connections);
  let orderList = Array(n).fill();
  let lowLinkList = Array(n).fill();
  
  let order = 0;
  const cycles = [];
  const critical = [];

  const strongConnection = (i, p) => {
    orderList[i] = order++;
    lowLinkList[i] = orderList[i];

    for (const j of adjList[i]) {
      if (j === p) { // p = i which is the index of the adjList
        console.log('j is --> ', j, ' p is --> ', p)
        continue
      }
      if (orderList[j] === undefined) {
        strongConnection(j, i)
      }

      lowLinkList[i] = Math.min(lowLinkList[i], lowLinkList[j]);
      if (lowLinkList[j] > orderList[i]) {
        critical.push([i, j])
      }
    };
  };
  for (const i in adjList) {
    if (orderList[+i] !== undefined) {
      continue;
    }
    strongConnection(+i)
  }
  return critical
};
*/

// ---- TEST CASE ------------------------------------------- //
/*
const connections = [[0,1],[1,2],[2,0],[1,3]]
const n = 4;
console.log(criticalConnection(n, connections));
*/

// ----- SECOND METHOD (WHICHEVER IS EASIER TO UNDERSTAND) --- //
const criticalConnections = function(n, connections) {
  const graph = createGraph(n, connections);
  const visited = {};
  const low = {};
  return helper(graph, 0, null, 0, visited, low);
};

// u = node 1 and v = node 2, low = lowest rank a node can reach
// If they are in the same circle, low[v] === visited[u].
// If they are not in the same circle, low[v] > visited[u].
// pre is used to hold place for the second node
function helper(graph, u, pre, rank, visited, low, output = []) {
  // BASE CASE //
  if (u in visited) {
    return output;
  }
  visited[u] = rank; // starts off with rank = 0
  low[u] = rank; // starts off with rank = 0

  for (const v of graph[u]) {
    if (v === pre) continue;
    helper(graph, v, u, rank + 1, visited, low, output);
    low[u] = Math.min(low[u], low[v]);
    if (low[v] > visited[u]) { // only happens of a node is outside the cycle
      output.push([u, v]);
    }
  }
  return output;
}

function createGraph(n, connections) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}

const connections = [[0,1],[1,2],[2,0],[1,3]]
const n = 4;
console.log(criticalConnections(n, connections));