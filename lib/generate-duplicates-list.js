var Node = require('./linked-list/node.js');

module.exports = function(n) {
  var head = new Node(null);
  var currentNode = head;
  for (var i = 0; i < n; i++) {
    currentNode.next = new Node(Math.floor(Math.random()* (n/2)).toString());
    currentNode = currentNode.next;
  }
  return head;
}
