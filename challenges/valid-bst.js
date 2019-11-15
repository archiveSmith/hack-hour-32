/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  if (this.value.right) {
    if (this.value < this.value.right) return false;
    else this.value = this.value.right;
  }
  if (this.value.left) {
    if (this.value > this.value.left) return false;
    else this.value = this.value.left;
  }
  return true;
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
