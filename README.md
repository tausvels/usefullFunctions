# Contains usefull functions to be used in the code

## Functions include:

1. Binary Search - Outputs the Value searched for.(array and the userInput as params). 

2. Array Formatter - Outputs a STRING containing the array elements separated by a , except the last item. (array as the params)

3. arrSorterAscDes - Outputs a sorted asc to desc ARRAY of Objects based on the given object property. (array and object_property as params). Does not work for Boolean object_property.  

4. twoSum - Outputs an ARRAY of indices of the nums array whose sum is equal to target. (array of numbers and target value as params.) e.g - twoSum([1,2,3,4], 7) will give output [2, 3].

5. HashTable class - Creates a HashTable with given size. See code example.

6. lengthOfLongestSubstring - Outputs the length of the longest substring. (string as a paramer). See code example.

## ALGORITHMS [REFERENCE](https://blog.bitsrc.io/a-guide-to-javascript-algorithms-search-4d653be3dca2)

1. ### Breadth First - Used mainly in Graph which uses a QUEUE (FIFO) structure.
- Breadth first is an algorithm that is used to search for a node in a graph data structure. The algorithm starts at one node, then goes to its neighboring nodes. If the node we are searching for is not found, then it will go to the next node look at its neighbors. 
This algorithm also uses the queue data structure to make note of all the nodes that it has visited. This way, the algorithm will save time by skipping the already visited nodes.

- ![GRAPH](/screenshots/graph.png "GRAPH")
- usage: grpah.breadthFirst('c', node => {console.log(node.id)}) ====>> c, d, e, f

2. ### DEPTH FIRST SEARCH - USED mainly for Tree which uses a STACK (LIFO) structure.
- Depth first algorithm is a traversal algorithm that starts searching at one node, and then goes down the path of its neighboring nodes before it goes to the other paths.
- useage: graph.depthFirst('a', node => console.log(node.id)) =====>> a, c, d, e, f

3. ### BINARY SEARCH TREE
- A binary tree is a tree data structure where each node can only have upto two child nodes.
- IN-ORDER, PRE-ORDER, POST-ORDER
- ![BINARY](/screenshots/binaryTree.png)