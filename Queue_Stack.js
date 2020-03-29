// ---- QUEUE ------------------------------------------------ //
const Queue = function () {
  this.storage = {};
  this.count = 0;
  this.lowestCount = 0;
};

Queue.prototype.enqueue = function(val) {
  if (val) {
    this.storage[this.count] = val;
    this.count++
  }
};

Queue.prototype.dequeue = function() {
  if (this.count - this.storage[this.lowestCount] === 0) {
    return undefined;
  }
  let result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
};

Queue.prototype.size = function() {
  return this.count - this.lowestCount;
}

const Stack = function() {
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.count]  = val;
  this.count++;
}

Stack.prototype.pop = function() {
  // checks if stack is empty
  if (this.count === 0) {
    return undefined;
  }
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.size = function() {
  return this.count;
}

// ---- QUEUE TEST CASE -------------------------------------- //
/**
 * const test = new Queue();
test.enqueue(1); test.enqueue(4); test.enqueue(5); test.enqueue(9); 
test.enqueue(7); test.enqueue(9);
test.dequeue();
console.log(test.size())
console.log(test.storage)
 */
// ---------------------------------------------------------- //

// ---- STACK TEST CASE -------------------------------------- //
/**
const test = new Stack();
test.push(1); test.push(4); test.push(5); test.push(9); 
test.push(7); test.push(9);
test.pop();
console.log(test.size())
console.log(test.storage)
*/
// ---------------------------------------------------------- //

module.exports = {
  Queue,
  Stack
}