const suggestedProducts = (arr, search) => {
  arr = arr.sort();
  const tracking = {Match: {}, Arr: []};

  for (let item of arr) {
    let N = tracking;
    for (let char of item) {
      if (!N.Match[char]) {
        N.Match[char] = {Match: {}, Arr: []};
      }
      N = N.Match[char];
      if (N.Arr.length < 3) {
        N.Arr.push(item);
      }
    }
  }
  const output = [];
  let N = tracking;
  for (let char of search) {
    N = N && N.Match[char];
    if (!N) {
      output.push([]);
    } else {
      output.push(N.Arr);
    }
  };
  return output;
};

const product = ["mobile","mouse","moneypot","monitor","mousepad"];
const searchWord = 'mouse';
console.log(suggestedProducts(product, searchWord));