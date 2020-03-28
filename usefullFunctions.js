// ---- BINARY SEARCH FUNCTION ---------- //
function bsearch (arr,value){
  let start  = 0, end = arr.length -1, mid ;      
  while (start <= end){
      mid = Math.floor((start + end) / 2);     
      if (arr[mid] === value) {
        return arr[mid];
      } else if (arr[mid] < value) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }          
  }
  return `Value not found!` ;
}

// ----- SEPARATES AN ARRAY OF ITEMS WITH , ----- //
function arrFormatter (arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return arr.join(', ')
  }
};

// ---- SORTS AN ARRAY OF OBJECTS ACCORDING THEIR PROP VALUE 
//----- (DOES NOT WORK FOR BOOLEAN) --------------------- //
function arrSorterAscToDsc (arr, objProp) {
  const compare = (a, b) => {
    const objA = a[objProp];
    const objB = b[objProp]
  
    let comparison = 0;
    if (objA > objB) {
      comparison = 1;
    } else if (objA < objB){
      comparison = -1
    }
  
    return comparison;
  }
    return arr.sort(compare)
  }

// ---- RETURNS THE INDEX OF THE TWO NUMBERS WHOSE RESULT EQUALS THE TARGET ---- //
// ---- USES HASHTABLE FOR LOOKUP ---------------------------------------------- //
const twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i < nums.length; i++){
      if(comp[ nums[i] ] >= 0){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};

// ---- RETURNS THE REVERSED NUMBER INPUT ------------------------------------- //
const reverseNum = (input) => {
  const limit = Math.pow(2, 31) - 1; // Limit is 2^31 (32 bit)
  const k = input > 0 ? 1 : -1; // k = constant to be multiplied with the abs value

  const numRev = Number( String( Math.abs(input)).split('').reverse().join(''));
  return numRev > limit ? 0 : numRev * k;
}
// ---- LENGTH OF THE LONGEST SUBSTRING -------------------------------------- //
/*
  Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/*
EXPLANATION:
The idea behind this code is to use hash maps to keep track of seen substrings.
Obviously if any string is less than two, the longest substring is equal to the length of that substring.
However, if not, then we would have to consider another approach.

Consider a string:
_ _ _ _ _ a _ _ _ _ _ f _ _ _ f _ _ _ a

Where _ means a distinct character from all the others.

As we transverse the string, we put a character into the hash table if it's not already in there where the key is the character and the value is the index. 
--> hash = {char: index}

If the character is already in the string, we have to update the index after we do the following procedures:

We have a curr that keeps track of the length of the substring that has not seen an already seen character. As we get to the second f, curr = 16. 
So, so far the max_len is going to be max(max_len = 0, curr = 16) [Since max_len has yet to be updated].

Now, we start our curr from the character after the first f. curr now becomes the distance between the first f and the second f, which is i - hash[s[i]]. 
We update the hash and continue.

The max_len is determined by the max of the current (max_len) and the (curr) value when it encounters a character already seen.

Finally, we have completely transversed the string and arrived at the max length of the substring that does not have any repeating characters.
 */

const lengthOfLongestSubstring = function(s) {
  let max_len = 0;
  let curr = 0;
  let hash = {}; 
  if(s.length < 2) {
      return s.length;
  }
  for(let i = 0; i < s.length;  i++) {
      if(hash[s[i]] == null) {console.log()
          curr += 1;
      } else {
          curr = Math.min(i - hash[s[i]], curr + 1);
      }
      max_len = Math.max(max_len, curr);
      hash[s[i]] = i; //save the index
  }console.log(hash)
  return max_len;
};

// ---- FIND ALL CONCATENATED WORDS IN AN ARRAY OF WORDS ---------- //
// const input =  ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"];

const findAllConcatenatedWordsInADict = (words) => {
  const set = new Set(words)
  const output = [];
  for (let i = 0; i < words.length; i++) {
    if (isConcatenated(words, set, words[i])) {
      output.push(words[i])
    }
  }
  return output;
}

const isConcatenated = (words, set, target) => {
  const dp = new Array(target.length).fill(-Infinity);
  for (let i = 0; i < target.length; i++) {
    for (let j = i; j >= 0; j--) {
      const pre = (j - 1 >= 0) ? dp[j - 1] : 0;
      const substr = target.substring(j, i + 1);
      if (pre >= 0 && set.has(substr)) {
        dp[i] = pre + 1;
      }
      if (dp[i] > 0) {
        break
      }
    }
  }
  return dp[target.length - 1] > 1
};

const commonCharacters = (string1, string2) => {
  const result = {};

  string1.split('').forEach( char => {
    if (string2.indexOf(char) >= 0 && char !== ' ') { // ignores empty space
      result[char] = char;
    }
  });
  return Object.keys(result).join('');
};

const translateRomanNumeral = (romanNumeral) => {

  const romanMap = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let result = 0;
  const input = romanNumeral.split('');

  for (let i = 0; i < input.length; i++) {
    let currentRomanNumeral = romanMap[input[i]];
    let nextRomanNumeral = romanMap[input[i+1]];
    
    if (currentRomanNumeral === undefined) {return 'null'}
    else {
      if (currentRomanNumeral < nextRomanNumeral) {
        result += nextRomanNumeral - currentRomanNumeral;
        i++; // skips the nextRomanNumeral
      } else {
        result += currentRomanNumeral;
      }
    }
  }
  return result;
};

// ---- MERGES TWO ARRAYS ------------------------------------------------ //
// num1 = [1,2,3,0,0,0]; nums2 = [2,5,6]; m = 3 and n = 3;
// OUTPUT = [1,2,2,5,6]
const merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    nums1[k--] = (i >= 0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
  }
  return nums1;
};

// ---- CHECK NUMBER PALINDROME ----------------------------------------- //
const isPalindrome = (x) => {
  let revNum = 0;
  let number = x;
  while (number > 0) {
    revNum = (revNum * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  if (x === revNum) {return true} 
  else {return false}
}

// ---- BALANCE ARRAYS BY SUGGESTING ELEMENTS TO MOVE BETWEEN THEM ----- //
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
// ---- TEST CASE ------------------------------------------------------- //
/*
  const A = [1, 2, 5], B = [2, 4]; // OUTPUT --> [5,4]. i.e- 1+2+4=7 and 2+5=7
  const A = [1, 2], B = [2, 3];    // OUTPUT --> [1,2]. i.e- 2+2=4 and 3+1=4
*/

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

// ---- SPIRAL MATRIX -------------------- //
// OUTPUTS AN ARRAY SPIRALLY FROM THE GIVEN INPUT n * m MATRIX
const spiralOrder = (matrix) => {
  let 
    n = matrix.length,
    m = (matrix[0] || []).length,
    res = [],
    x1 = 0,
    x2 = m - 1,
    y1 = 0,
    y2 = n - 1
  while (x1 <= x2 && y1 <= y2) {
    for (var x = x1; x <= x2; x++) res.push(matrix[y1][x]);
    for (var y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
    if (x1 < x2 && y1 < y2) {
      for (var x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
      for (var y = y2; y > y1; y--) res.push(matrix[y][x1]);
    }
    x1++;
    x2--;
    y1++;
    y2--;
  }
  return res;
};
// ---- TEST CASE ------------------------ //
/*
const Input = 
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];
console.log(spiralOrder(Input))
*/

// ---- MOST COMMON WORD FINDER (FILTERS WORDS IN THE BANNED ARRAY) ---- //
const mostCommonWord = (paragraph, banned) => {
  paragraph = paragraph.toLowerCase().trim().replace(/[^a-z]/g, 'punc').split('punc'); // replace all punctuations with punc 
  banned = banned.map(word => word = word.toLowerCase()); console.log(banned)
  const dict = {};

  for (word of paragraph) {
    if (banned.includes(word) || !word.length) {
      continue;
    }
    dict[word] = (++dict[word] || 1)
  }
  console.log(dict)
  return Object.keys(dict).reduce((key1,key2) => dict[key1] > dict[key2] ? key1 : key2)
}

// ---- TEST CASE -------------------------//
/** 
const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["Hit"];
console.log(mostCommonWord(paragraph, banned));
*/

module.exports = {
  bsearch,
  arrFormatter,
  arrSorterAscToDsc,
  twoSum,
  reverseNum,
  lengthOfLongestSubstring,
  findAllConcatenatedWordsInADict,
  commonCharacters,
  translateRomanNumeral,
  merge,
  candySwap,
  makeSquare,
  suggestedProducts,
  searchMatrix,
  spiralOrder,
  mostCommonWord
}