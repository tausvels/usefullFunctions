class LinkedList {
  head = null;
  isEmpty() {if (this.head) {return false}; return true;};
  lastNode(){
    let tempNode = this.head;
    while(tempNode.getNext()) {
      tempNode = tempNode.getNext()
    }
    return tempNode;
  };
  insertNode(key, value) {
    const node = new ListNode(key, value);
    if (!this.head) this.head = node;
    else this.lastNode().insertNextNode(node)
  };
  find(key) {
    let tempNode = this.head;
    while(tempNode) {
      if (tempNode.getKey() === key) {return tempNode.value()}
      tempNode = tempNode.getNext();
    }
    return false;
  }
  display(){
    let tempNode = this.head;
    while(tempNode) {
      console.log(tempNode);
      tempNode = tempNode.getNext();
    }
  }
}
class ListNode {
  constructor(key, value) {
    this.nextNode = null;
    this.key = key;
    this.value = value;
  }
  getNext(){return this.nextNode};
  getKey() {return this.key}
  insertNextNode(node){this.nextNode = node}
  value(){return this.value}
};

class HashTable {
  constructor(size){
    this.size = size;
    this.table = [];
    for (let i = 0; i < size; i++) {
      this.table[i] = new LinkedList();
    }
  };
  //---- Hashing function ----------------------------------------------- //
  hash(key){
    let id = 0;
    for (let i = 0; i < key.length; i++) {
      id += key.charCodeAt(i) * 100 - key.charCodeAt(i - 1 < 0 ? 0 : i - 1);
    }
    return (id % this.size);
  };
  //--------------------------------------------------------------------- //
  insert(key, value) {
    let id = this.hash(key);
    let bucket = this.table[id]
    bucket.insertNode(key, value)
  }
  get(key) {
    let id = this.hash(key);
    let item = this.table[id];
    if (item.head) return item; 
    else return 'Does not exist'
  }
  remove(key) {
    const id = this.hash(key);
    this.table[id] = new LinkedList()
  }
};

// ---- TEST CASE ------------------------- //
// const myHashTable = new HashTable(20); // size is 20
// myHashTable.insert('name', 'Tausif')
// // myHashTable.remove('name')
// console.log(myHashTable.get('name'))