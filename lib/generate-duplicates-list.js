module.exports = function(n) {
  var list = [];
  for (var i=0; i < n; i++) {
    list.push(Math.floor(Math.random()* (n/2)).toString());
  }
  return list;
}
