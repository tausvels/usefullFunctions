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


const input = [5,1,4,3,9];
console.log(bubbleSort(input, 'desc'))