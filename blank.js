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