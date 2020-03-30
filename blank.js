const gcd = (num, arr) => {
  // sort the array from lowest to highest
  arr.sort((a,b) => a-b);
  const lowest = arr[0]
  const factors = [];
  const size = num;
  if (!size) {
    return size = arr.length;
  }
  for (let i = 1; i <= lowest; i++) {
    if (lowest % i === 0) {
      factors.push(i);
    }
  }
  for (let j = 1; j < size; j++) {
    for (let k = 0; j < factors.length; k++) {
      if (arr[j] % factors[k] !== 0) {
        factors.splice(k, 1)
      }
    }
  }

  return factors[factors.length - 1];
}

const input = [12, 4, 6, 8, 10];
console.log(gcd(5, input))