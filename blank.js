const candySwap = (A, B) => {
  const sum = (arr) => arr.reduce((t,c) => t+c);
  const sumA = sum(A);
  const sumB = sum(B);
  const diff = (sumA - sumB) >> 1; // >> = /2 and << = *2

  // using SET to utilize the '.has' property
  const setA = new Set(A);
  for (const candy of B) {
    if (setA.has(candy + diff)) {
      return [(candy + diff), candy];
    }
  }
}
const A = [1, 2, 5], B = [2, 4];

// const A = [1, 2], B = [2, 3];
console.log(candySwap(A, B))