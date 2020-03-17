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


module.exports = {
  bsearch,
  arrFormatter,
  arrSorterAscToDsc,
  twoSum,
  reverseNum,
  lengthOfLongestSubstring,
  findAllConcatenatedWordsInADict
}