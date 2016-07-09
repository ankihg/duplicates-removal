var Node = require('./linked-list/node.js');

module.exports = function(n) {
  console.log('generate duplicates');
  var head = new Node(null);
  var currentNode = head;
  for (var i = 0; i < n; i++) {
    currentNode.next = new Node(Math.floor(Math.random()* (3*n/4)).toString());
    currentNode = currentNode.next;
  }
  return head;
}
