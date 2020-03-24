module.exports =  class HashMap  {
  constructor () {
    this.indexArr = [];
    this.valueArr = [];
  };

  put(key, value) {
    if (this.indexArr[key] === undefined) {
      this.valueArr.push(value);
      this.indexArr[key] = this.valueArr.length - 1;
    }
    this.valueArr[this.indexArr[key]] = value;  
  }

  get(key) {
    if (this.indexArr[key] === undefined) {
      return -1;
    } else {
      return this.valueArr[this.indexArr[key]];
    }
  }
  remove(key) {
    if (this.indexArr[key] !== undefined) {
      this.valueArr[this.indexArr[key]] = undefined;
      this.indexArr[key] = undefined;
    }
  }
};


const myMap = new HashMap();
myMap.put(1,1); 
myMap.put(3,8);
myMap.put(2,7); myMap.put(2,5);

console.log(myMap.get(1))

myMap.remove()

console.log(myMap)