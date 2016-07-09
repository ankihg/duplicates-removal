# Duplicates removal

## Runtime analysis
This implementation of removal of duplicates achieves O(n).

A naive approach to this algorithm could keep an array of found addresses, iterating over it for each element of the input. Best case this would achieve O(n) (not accounting for the removal process), where there are no duplicates. Worst case would be O(n^2) where all elements are duplicated. A simpler runtime complexity can be achieved.

Taking advantage of the fact that input is email addresses (a String), I use a JavaScript key/value object as a hash (hence `Object.create(null)` to avoid collision from Object.prototype). Hashing achieves an O(1) lookup, sparing the expense of iterating through all found elements for each input element.
