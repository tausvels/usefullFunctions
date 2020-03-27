const suggestedProducts = (products, searchWord) => {
  products = products.sort(); // sorting lexographically
  const tracking = {Match: {}, ProductArr: []}; // initialized the tracking object
  for (let item of products) {
    let N = tracking;
    for (let char of item) { 
      if (!N.Match[char]) { // if the Match[char]===undefined, initialize with the same keys
        N.Match[char] = {Match: {}, ProductArr: []};
      }
      N = N.Match[char]; //console.log(N)
      if (N.ProductArr.length < 3) {
        N.ProductArr.push(item)
      };
    };
  };
  const output = [];
  let N = tracking;
  for (let char of searchWord) {
    N = N && N.Match[char];
    if (!N) {
      output.push([]);
    } else {
      output.push(N.ProductArr);
    }
  }
  return output;
};

// --- TEST CASE -------------------------------------------------- //
/*
const product = ["mobile","mouse","moneypot","monitor","mousepad"];
const searchWord = 'mouse';
console.log(suggestedProducts(product, searchWord));
*/
