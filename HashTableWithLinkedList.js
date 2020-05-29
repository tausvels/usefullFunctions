class LinkedList {
  constructor(){this.head = null};
  // ---- methods -------------------------- //
  isEmpty(){
    if (this.head) {return false}
    return true
  };
  lastNode() {
    let tempNode = this.head;
    while(tempNode.getNextNode()) {
      tempNode = tempNode.getNextNode();
    }
    return tempNode;
  }
  insertNode(key, value) {
    const node = new LinkNode(key, value);
    if (!this.head) {this.head = node;}
    else {this.lastNode().insertNextNode(node)}
  }
  find(key){
    let tempNode = this.head;
    while(tempNode) {
      if (tempNode.getKey() === key) {
        return tempNode.value
      }
      tempNode = tempNode.getNextNode();
    }
    return `No Value with such ${key} found`;
  }
  display(){
    let tempNode = this.head;
    while(tempNode) {
      console.log(tempNode)
      tempNode = tempNode.getNextNode();
    };
  }
}
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null
  };
  // ---- Defining the class methods -------------//
  getNextNode(){return this.nextNode}
  getKey(){return this.key}
  insertNextNode(node) {this.nextNode = node}
  value(){return this.value}
}