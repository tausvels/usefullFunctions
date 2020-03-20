let givenArr = [9, 8, 7, 6, 5, 4, 3, 1, 2, 0];

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
}
console.log(insertionSort(givenArr))

module.exports = {
  insertionSort
}