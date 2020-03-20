/* TRIE DATA STRUCTURE */

let Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  }; 
};

let Trie = function () {
  this.root = new Node();
  
  // DEFINING THE ADD FUNCTION; It is a recursive function
  // 2nd param is optional. If none, default is ROOT
  this.add = function (input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {  // if the node does not contain the first letter of the input, set the node to that char
      node.keys.set(input[0], new Node());
      // substr(1) = all the characters of input after the first char
      return this.add(input.substr(1), node.keys.get(input[0])); // DOING RECURSION
    } else {
      return this.add(input.substr(1), node.keys.get(input[0])); // DOING RECURSION
    };
  };

  // DEFINING THE isWord FUNCTION THAT RETURNS A BOOLEAN
  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) { // If the node does not contain the first letter, return false
        return false;
      } else {
        node = node.keys.get(word[0]); // Gets the node with word's 1st char
        word = word.substr(1) // sets the 'word' with rest of the char
      };
    };
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
  };

  // DEFINING THE PRINT FUNCTION; Returns all the words in the Trie
  this.print = function () {
    let words = new Array();
    let search = function (node, string) { // ALSO A RECURSIVE FUNC
      if (node.keys.size != 0) {
        for (let char of node.keys.keys()) {
          search(node.keys.get(char), string.concat(char));
        };
        if (node.isEnd()) {
          words.push(string)
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      };
    };
    search(this.root, new String());
    return words.length > 0 ? words : mo;
  };

};

// ---- TEST CASE -------------------------------------- //
myTrie = new Trie(); 
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.isWord('bat'));
console.log(myTrie.print())