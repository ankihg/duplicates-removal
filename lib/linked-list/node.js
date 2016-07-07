var Node = module.exports = function(value, next) {
  this.value = value;
  this.next = next || null;
}

Node.prototype.fromArr = function(arr) {
  if (!arr || !arr.length) return;
  this.next = new Node(arr.shift());
  this.next.fromArr(arr);
}


Node.prototype.toArr = function(arr) {
  arr = arr || [];

  arr.push(this.value);
  if (this.next) return this.next.toArr(arr);
  return arr;
}
