# Contains usefull functions to be used in the code

## Functions include:

1. Binary Search - Outputs the Value searched for.(array and the userInput as params). 

2. Array Formatter - Outputs a STRING containing the array elements separated by a , except the last item. (array as the params)

3. arrSorterAscDes - Outputs a sorted asc to desc ARRAY of Objects based on the given object property. (array and object_property as params). Does not work for Boolean object_property.  

4. twoSum - Outputs an ARRAY of indices of the nums array whose sum is equal to target. (array of numbers and target value as params.) e.g - twoSum([1,2,3,4], 7) will give output [2, 3].

5. commonCharacters - Outputs a string of a common characters between 2 input strings

6. lengthOfLongestSubstring - Outputs the length of the longest substring. (string as a paramer). See code example.

7. reverseNum - Outputs the reversed version of the input number. Input must be below 32 bit (2^31) otherwise output = 0.

8. translateRomanNumeral - Outputs the input roman numeral string as number value. 

9. merge - Outputs a sorted merged array eliminating all 0 values inside it.

10. isPalindrome - Outputs true/false for an input NUMBER

11. candySwap - Ouputs a suggestive array of elements to move between arrays to balance them. I.e- sumOfArr1 = sumOfArr2

12. makeSquare - Outputs true/false for a given array by doing DFS to find out whether a square can be made using the all the elements in the array.

## CLASS

1. ### HashSet - A class that creates a HashSet storing number values in appropriate index
2. ### HashMap - A class that creates a HashMap for mappig values in specific index and replaces them with updated value

## ALGORITHMS [REFERENCE](https://blog.bitsrc.io/a-guide-to-javascript-algorithms-search-4d653be3dca2)

1. ### Breadth First - Used mainly in Graph which uses a QUEUE (FIFO) structure.
- Breadth first is an algorithm that is used to search for a node in a graph data structure. The algorithm starts at one node, then goes to its neighboring nodes. If the node we are searching for is not found, then it will go to the next node look at its neighbors. 
This algorithm also uses the queue data structure to make note of all the nodes that it has visited. This way, the algorithm will save time by skipping the already visited nodes.

- ![GRAPH](https://github.com/tausvels/usefullFunctions/blob/master/screenshots/graph.PNG "GRAPH")
- usage: grpah.breadthFirst('c', node => {console.log(node.id)}) ====>> c, d, e, f

2. ### DEPTH FIRST SEARCH - USED mainly for Tree which uses a STACK (LIFO) structure.
- Depth first algorithm is a traversal algorithm that starts searching at one node, and then goes down the path of its neighboring nodes before it goes to the other paths.
- useage: graph.depthFirst('a', node => console.log(node.id)) =====>> a, c, d, e, f

3. ### BINARY SEARCH TREE
- A binary tree is a tree data structure where each node can only have upto two child nodes.
- IN-ORDER, PRE-ORDER, POST-ORDER
- ![BINARY](https://github.com/tausvels/usefullFunctions/blob/master/screenshots/binaryTree.PNG)

4. ### TRIE 
- A search algo to find words that exist in a dictionary.
- ![TRIE](https://github.com/tausvels/usefullFunctions/blob/master/screenshots/Trie.PNG)

5. ### ALL SORTING ALGO
- BubbleSort: Outputs a sorted array (option to change order of sort using 'asc' or 'desc') TC: O(n^2); SC: O(1)
- BucketSort: Outputs a sorted array (smallest to largest). TC: O(n^2); SC: O(n+k)--> k = no. of buckets which is usally 10 for INT and 26 for alphabets.
- InsertionSort: Outputs a sorted array (smallest to largest). TC: O(n); SC: O(1)
- MergeSort: Outputs a sorted array (option to change order of sort using 'asc' or 'desc') TC: O(nlogn); SC: O(n)

6. ### BETTER BINARY SEARCH TREE CLASS [REFERENCE](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
- See code (also contains Inorder, PreOrder and PostOrder Algo)