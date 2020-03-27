// BINARY SEARCH PATTERN
const searchMatrix = (matrix, target) => {
  let n = matrix.length; 
  let m = (matrix[0] || []).length - 1;  
  let y = 0; 
  let temp = 0;

  while(m >= 0 && y < n) {
    temp = matrix[y][m];
    if (target === temp) {
      return true;
    } else if (target > temp) {
      y++;
    } else {
      m--;
    }
  }
  return false;
}

// ---- TEST CASE ----------------------- //
/*
const input = 
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
console.log(searchMatrix(input, 1));
*/
// --------------------------------------- //