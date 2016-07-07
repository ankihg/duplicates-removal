var Node = require('./linked-list/node.js');

module.exports = function(head) {
  var found = Object.create(null); //empty object; does not inherit from protoype

  //linked list for the win?

  var currentNode = head;
  while (currentNode.next) {
    if (found[currentNode.next.value]) currentNode.next = currentNode.next.next //skip next element
    else {
      found[currentNode.next.value] = 1; //put value on found hash
      currentNode = currentNode.next; //go to next element
    }
  }

}
