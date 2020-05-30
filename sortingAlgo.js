const insertionSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    console.log(temp);
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

// ---- BUCKET SORT -------------------------------------------- //
const bucketSort = arr => {
  if (arr.length === 0) {
    return arr;
  }

  // Declaring the variables first
  let i,
    minValue = arr[0],
    maxValue = arr[0];
  const bucketSize = 10;

  // Setting min and max values
  arr.forEach(currentVal => {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Initializing buckets
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  arr.forEach(currentVal => {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
  });

  // Sorting buckets
  arr.length = 0;

  allBuckets.forEach(bucket => {
    insertionSort(bucket);
    bucket.forEach(element => {
      arr.push(element);
    });
  });

  return arr;
};

// ---- MERGE SORT -------------------------------------------------- //
// option = 'asc' or 'desc' or leave blank for default ascending order
const mergeSort = (arr, option) => {
  if (arr.length < 2) {
    return arr;
  }

  let midInd = Math.floor(arr.length / 2);
  let subLeft = mergeSort(arr.slice(0, midInd), option);
  let subRight = mergeSort(arr.slice(midInd), option);

  return merge(subLeft, subRight, option);
};

const merge = (subArr1, subArr2, option) => {
  const result = [];
  const conditionCheck = (subArr1, subArr2) => {
    if (option === "asc") {
      return subArr1[0] < subArr2[0];
    } else if (option === "desc") {
      return subArr1[0] > subArr2[0];
    } else {
      return subArr1[0] < subArr2[0];
    }
  };
  while (subArr1.length && subArr2.length) {
    result.push(
      conditionCheck(subArr1, subArr2) ? subArr1.shift() : subArr2.shift()
    );
  }
  return result.concat(subArr1.length ? subArr1 : subArr2);
};
// ---- TEST CASE FOR MERGE SORT --------------------------------------- //
// console.log(mergeSort(input, "desc"));
// --------------------------------------------------------------------- //

// ---- BUBBLE SORT ---------------------------------------------------- //
const bubbleSort = (arr, option) => {
  const arrCopy = arr.slice();
  const length = arrCopy.length - 1;
  const conditionCheck = (arrCopy) => {
    if (option === "asc") {
      return arrCopy[i] > arrCopy[i+1];
    } else if (option === "desc") {
      return arrCopy[i] < arrCopy[i+1];
    } else {
      return arrCopy[i] > arrCopy[i+1];
    }
  };
  do {
    var swapped = false;
    for(var i = 0; i < length; i++) {
      if (conditionCheck(arrCopy)) {
        let temp = arrCopy[i];
        arrCopy[i] = arrCopy[i+1];
        arrCopy[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped === true);
  return arrCopy;
}
// console.log(bubbleSort(input, 'desc'));

// ---- QUICK SORT ------------------------ //
const quickSort = (arr) => {
  // BASE CASE //
  if (arr.length < 2) {
    return arr;
  }
  let [head, ...tail] = arr;
  return [
    ...quickSort(tail.filter(element => element < head)),
    head,
    ...quickSort(tail.filter(element => element > head))
  ];
}

// ---- HEAP SORT ------------------------- //
function heapSort(input) {
  // ---- HELPER FUNCTIONS ----------------------------------------- //
  function swap(input, index_A, index_B) {
    let temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
  }
  function heap_root(input, i) {
    let left = 2 * i + 1; // left child
    let right = 2 * i + 2; // right child
    let max = i; // parent node
  
    if (left < array_length && input[left] > input[max]) {max = left}
    if (right < array_length && input[right] > input[max]) {max = right}
    
    if (max !== i) {
      swap(input, i, max);
      heap_root(input, max)
    }
  }
  // ------------------------------------------------------------- //
  let array_length = input.length;
  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(input, i)
  }
  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    array_length--;
    heap_root(input, 0)
  }
}

// ---- TEST CASE ----------------------- //
// const input = [3,0,2,5,-1,4,1,3];
// heapSort(input)
// console.log(input)
// ---------------------------------------- //

module.exports = {
  insertionSort,
  bucketSort,
  mergeSort,
  bubbleSort,
  quickSort,
  heapSort
};

// const input = [1, 3, 5, 6, 7, 8, 4, 2, 0];