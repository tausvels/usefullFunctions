/* Heaps */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

const MinHeap = function () {

  let heap = [null];

  this.insert = function(val) {
    heap.push(val);
    if (heap.length > 2) {
      let indx = heap.length - 1;
      //heap[indx] is the node that we just inserted
      while (heap[indx] < heap[Math.floor(indx/2)]) { //current val < parent node val
        if (indx >= 1) { // indx is not the root node val which 1
          [heap[Math.floor(indx/2)], heap[indx]] = [heap[indx], heap[Math.floor(indx/2)]]; // swap their position using arr destruct
          if (Math.floor(indx/2 > 1)) { // if the parent node is NOT the root node
            indx = Math.floor(indx/2) // parent node index and is = to the number passed in due to SWAPPING
          } else {
            break;
          };
        };
      };
    };
  };

  this.remove = function(){
    let smallest = heap[1]; // the first item in the heap array
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]; // first item = last item
      heap.splice(heap.length - 1); // removes one item from the array
      if (heap.length === 3) {// only 2 nodes in the array, just swap them
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        };
        return smallest;
      };
      let i = 1; // the root node index
      let left = i * 2;
      let right = i * 2 + 1;
      while(heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i; // sets the index to the left node
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        };
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) { // very bottom of the tree, break out of the while loop
          break;
        };
      };
    } else if (heap.length === 2) { // only one element in the array
      heap.splice(1, 1);
    } else { // there is 0 element in the array to begin with
      return null;
    };
    return smallest;
  };

  this.sort = function() {
    let result = new Array();
    while(heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  };

  this.print = () => heap;
};

const MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};

// ---- TEST CASE --------------------------------------------------- //
/**
const myHeap = new MinHeap();
myHeap.insert(5); myHeap.insert(1); myHeap.insert(4); myHeap.insert(3); 
myHeap.insert(9), myHeap.insert(7)

console.log(myHeap.print());
 */
// ------------------------------------------------------------------ //
module.exports = {
  MinHeap,
  MaxHeap
}