# Duplicates removal

## Runtime analysis
This implementation of removal of duplicates achieves O(n).

A naive implementation of this algorithm would hold an array of found addresses, iterating over it for each element of the input. Best case this would achieve O(n) (not accounting for the removal process), where there are no duplicates. Worst case would be O(n^2) where all elements are duplicated. A simpler runtime complexity can be achieved.

We can take advantage of the fact that input is email addresses (a String) and use a JavaScript key/value object as a hash (hence `Object.create(null)` so we won't get collision from Object.prototype). Hashing will give us an O(1) lookup, sparing us from iterating through all found elements for each input element.
