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
  this.max = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.index] = val;
  this.index += 1;

  if (val > this.max) {
    this.max = val;
  }

  return this.index;
}

Stack.prototype.pop = function() {
  const temp = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return temp;
}

Stack.prototype.getMax = function() {
  if (this.index === 0) {
    return undefined;
  }
  return this.max
}

module.exports = Stack;
