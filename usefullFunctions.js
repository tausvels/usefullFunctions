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

// ---- HASH TABLE CLASS-------------------------------------- //

// ---- THE HASH FUNCTION USED BY THE HASHTABLE CLASS -------- //
const hashStringToInt = (str, tableSize) => {
  let hash = 17;
  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize // Make the hash sizeable
  }
  return hash;
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

const HashTable = class HashTable {
  // HAVE LARGE TABLE SIZE IN ORDER TO AVOID COLLISION //
  table = new Array(3) // Defining the size of the array to be 100. Best to chose prime number
  
  // KEEP TRACK OF NUMBER OF ITEMS IN THE TABLE //
  numItems = 0;

  // RESIZE LOGIC
  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const ind = hashStringToInt(key, newTable.length);
          if (newTable[ind]) {
            newTable[ind].push([key, value])
          } else {
            newTable[ind] = [[key, value]]
          }
        })
      }
    })
    this.table = newTable;
  }
  
  setItem = (key, value) => {
    const ind = hashStringToInt(key, this.table.length);
    this.numItems++;
    // Loadfactor closer to 1, i.e- 100%, increase table size for performance.
    const loadFactor = this.numItems / this.table.length;
    
    // To Avoid Collision
    if (this.table[ind]) {
      this.table[ind].push([key, value])
    } else {
      this.table[ind] = [[key, value]];
      console.log(loadFactor)
      if (loadFactor > 0.8) {
        // RESIZE THE TABLE SIZE
        this.resize();
      }
    }
  }

  getItem = (key) => {
    const ind = hashStringToInt(key, this.table.length);
    // ERROR CHECKING (IF NOT ITEM)
    if (!this.table[ind]) {
      return null
    }
    return this.table[ind].find(el => el[0] === key)[1]; // [1] for value, [0] for key
  }
}

const myTable = new HashTable();
myTable.setItem("fname", 'Tausif');
myTable.setItem("lname", 'Khan');
myTable.setItem("age", 29)
myTable.setItem("profession", 'web dev')
myTable.setItem("Canadian", true)
console.log(myTable.table.length)


module.exports = {
  bsearch,
  arrFormatter,
  arrSorterAscToDsc,
  twoSum,
  HashTable
}