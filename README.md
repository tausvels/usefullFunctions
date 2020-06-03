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

13. suggestedProducts - Outputs 3 suggesed products from a given array of products given a search word.

14. searchMatrix - Outputs true/false if target value is found in a (n * m) matrix. Uses Binary Search Algo. 

15. spiralOrder - Outputs an array spirally from the given input of n * m matrix. 

16. mostCommonWord - Outputs the most common word in a string. Filters words/characters in BANNED variable. banned = ['hit'].

17. gcd - Outputs the Greatest Common Divisor of a given list of integers. Takes in 2 arguments where 1st Arg--> [list of numbers], 2nd Arg(optional) --> Total number of items in the list.

18. reorderLogFile - Outputs an array of reordered log file lines from lowest to highest.

19. fibonacci(n) - Outputs the the nth element of the fibonacci sequence. [Reference](https://www.youtube.com/watch?v=B0NtAFf4bvU&list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H&index=6)

20. numberOfJumps - Outputs the total number of jumps required to reach the finish line. Takes arg1 = feet (e.g.- 6 feet) and arg2 = jumpLength (e.g- 1 feet)

21. maxSubArr - Outputs the largest sum of contiguous integers in the array.

22. shuffleArr - Modifies the given array by swapping the position of each item randomly.

23. missingNumer - Outputs the first missing number of the array. e.g- missingNumber([1,2,4,5,6]) would output --> 3

24. appearTwice - Outputs the number that appears twice in a sorted array. e.g - appearTwice([1,2, 3,3, 3,4,5,6]) --> 3
## CLASS

1. ### HashSet - A class that creates a HashSet storing number values in appropriate index
2. ### HashMap - A class that creates a HashMap for mappig values in specific index and replaces them with updated value
3. ### BETTER BINARY SEARCH TREE CLASS [REFERENCE](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
- See code (also contains Inorder, PreOrder and PostOrder Algo)
- Added <strong>isSymetric method</strong> that outputs true/false if a tree is symetric.
- Added <strong>isSubtree method</strong> that outputs true/false if a given tree is a subTree of another tree.
4. ### HEAPSORT- A class that creates a Binary tree and performs two forms of sorting (Min --> Max and Max --> Min)
- See code for example use case
5. HashTableWithLinkedList - A class that creates a Hash Table which are arrays of Linked Lists to avoid collision. Contains a 'hash' function.

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
- QuickSort: Outputs a sorted array.TC: O(nlogn) WORST CASE: (n^2); SC: O(n)
- HeapSort: Outputs a sorted array. TC: O(nlogn) WORST CASE: O(nlogn) SC: 1 (Reference)[https://www.geeksforgeeks.org/heap-sort/]

6. ### ADDED A GRAPH CRITICAL CONNECTION ALGO
- Outputs the most critical connection in pair of nodes in a graph. Performs DFS.

## NODE FUNCTIONS
- Added a promise function that can resolve an array of promises both parallely & sequentially. Uses setTimeout to mimic a promise response.