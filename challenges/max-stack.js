/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return this.index;
};

Stack.prototype.pop = function() {
  if (this.index <= 0) return undefined;
  let popped = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return popped;
};

Stack.prototype.getMax = function() {
  return Math.max.apply(Math, Object.values(this.storage));
};

//TEST
let stack = new Stack();
console.log(stack.push(4));
console.log(stack.push(6));
console.log(stack.push(9));
console.log(stack.push(12));
console.log(stack.push(567));
console.log(stack.push(5410));
console.log(stack.pop(5410));

console.log(stack);

console.log(stack.getMax());

console.log(stack);

module.exports = Stack;
