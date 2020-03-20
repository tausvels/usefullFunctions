const insertionSort = (arr) => {
  if (arr.length < 2) {return arr}
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i]; console.log(temp)
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]; 
      j--;
    }
    arr[j+1] = temp
  }
  return arr
};

// Implement bucket sort
const bucketSort = (arr) => {
  if (arr.length === 0) {
    return arr;
  }

  // Declaring the variables first
  let i, minValue = arr[0], maxValue = arr[0];
  const bucketSize = 10;
  
  // Setting min and max values
  arr.forEach((currentVal) => {
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
  arr.forEach( (currentVal) => {
  	allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sorting buckets
  arr.length = 0;
  
  allBuckets.forEach((bucket) => {
  	insertionSort(bucket);
  	bucket.forEach((element) => {
  		arr.push(element);
  	});
  });

  return arr;
}

module.exports = {
  insertionSort,
  bucketSort
}