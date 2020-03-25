const makeSquare = (arr) => {
  const arrSum = arr.reduce((t,c) => t+c, 0);
  if (arrSum === 0 || arrSum % 4 !== 0) {
    return false;
  }

  const nodeSeen = new Array(arr.length);
  // ---- DEFINING THE RECURSIVE FUNCTION -------------- //
  const canPartition = (start, blocks, sum, target) => {
    // ---- BASE CASE ---------------------------------- //
    if (blocks === 1) {
      return true;
    }
    // ------------------------------------------------- //
    if (sum === target) {
      return canPartition(0, blocks - 1, 0, target);
    } else if (sum > target) {
      return false;
    }
    // ---- DEPTH FIRST SEARCH SECTION ----------------- //
    for (let i = start; i < arr.length; i++) {
      if (!nodeSeen[i]) { // when visting node for the first time, nodeSeen[i] = undefined
        nodeSeen[i] = true;
        if (canPartition(i+1, blocks, sum + arr[i], target)) {
          return true;
        }
        nodeSeen[i] = false;
      }
    }
    return false;
  }
  return canPartition(0, 4, 0, arrSum / 4);
}
// ---- TEST CASE -------------------------------------- //
// const ar = [3,1,1,2,3,1,1,1,2,2,2,1]
// console.log(makeSquare(ar));
// ---------------------------------------------------- //