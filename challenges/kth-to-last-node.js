/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let currNode = head;
  let totalNodes = 0;
  let returnCount = 0;

  if (!currNode) return undefined;

  while (currNode) {
    totalNodes += 1;
    currNode = currNode.next;
  }
  
  currNode = head;
  while (returnCount !== totalNodes - k) {
    returnCount += 1;
    currNode = currNode.next
  }
  return currNode;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const result = kthToLastNode(3, a)
console.log(result);

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
