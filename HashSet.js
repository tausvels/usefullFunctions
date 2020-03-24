const HashSet = function (maxLength = 1000, set = []) {
  this.maxLength = maxLength;
  this.set = set;
};

// prevent duplicates from being added
// index = bucket name
HashSet.prototype.getIndex = function (key) {
  // console.log(key % this.maxLength);
  return key % this.maxLength;
}

// position = the index location of the bucket
HashSet.prototype.getPos = function (key, index) {
  bucket = this.set[index];
  // if bucket does not exist
  if (bucket === undefined) {
    return -1; 
  }
  return bucket.indexOf(key);
}

HashSet.prototype.add = function (key) {
  index = this.getIndex(key); // get bucket 'name'. i.e- number in this case
  pos = this.getPos(key, index); // get bucket index for given key

  if (pos < 0) {  // creates a bucket at the index if bucket doesn't exist
    if (this.set[index] === undefined) {
      this.set[index] = [];
    }
    this.set[index].push(key) // Adds the key into bucket located at index
  }
};

HashSet.prototype.remove = function (key) {
  index = this.getIndex(key);
  pos = this.getPos(key, index);
  
  // if bucket exists at the position
  if (pos > -1) {
    this.set[index].splice(pos, 1); // removes item from bucket at set[index]
  }
};

HashSet.prototype.contains = function (key) {
  index = this.getIndex(key);
  pos = this.getPos(key, index);

  console.log(index)
  return pos > -1; // returns true if item in bucket exists
}
module.exports = HashSet;

const myObj = new HashSet();
myObj.add(1);
myObj.add(2); 
myObj.add(5);
console.log(myObj.contains(5))
myObj.add(7);
myObj.add(10);
myObj.remove(5);
myObj.add(9)
myObj.add(5)
myObj.contains(5)
console.log(myObj) 

const hashSet = new HashSet();
hashSet.add(1);         
hashSet.add(2);         
hashSet.contains(1);    console.log(hashSet.contains(1))// returns true
hashSet.contains(3);    console.log(hashSet.contains(3))// returns false (not found)
hashSet.add(2);          
hashSet.contains(2);    console.log(hashSet.contains(2))// returns true
hashSet.remove(2);          
hashSet.contains(2);    console.log(hashSet.contains(2))