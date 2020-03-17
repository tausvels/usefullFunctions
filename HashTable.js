// ---- HASH TABLE CLASS-------------------------------------- //

// ---- THE HASH FUNCTION USED BY THE HASHTABLE CLASS -------- //
const hashStringToInt = (str, tableSize) => {
  let hash = 17;
  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize // Make the hash sizeable
  }
  return hash;
}
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

// const myTable = new HashTable();
// myTable.setItem("fname", 'Tausif');
// myTable.setItem("lname", 'Khan');
// myTable.setItem("age", 29)
// myTable.setItem("profession", 'web dev')
// myTable.setItem("Canadian", true)
// console.log(myTable.table.length)