module.exports = (list) => {
  var found = Object.create(null); //empty object; does not inherit from protoype

  var i = 0;
  while (i < list.length) {
    if (found[list[i]]) list.splice(i, 1); //remove the element, next element will be at same index
    else found[list[i++]] = 1; //put value on found hash then increment the index to visit next element
  }

  return list;
}
