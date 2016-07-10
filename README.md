# Duplicates removal

## Runtime analysis
This implementation of removal of duplicates achieves O(n).

A naive approach to this algorithm could keep an array of found addresses, iterating over it for each element of the input. Best case this would achieve O(n) (not accounting for the removal process), where there are no duplicates. Worst case would be O(n^2) where all elements are duplicated. I will pursue a simple runtime complexity.

Taking advantage of the fact that input is email addresses (a String), I use a JavaScript key/value object as a hash. Hashing achieves an O(1) lookup, sparing the expense of iterating through all found elements for each input element.

Now it is time to account for the removal process. Removal from an array is expensive; worst case O(n) when being removed from the front of the array. Linked lists achieve constant time removal by setting a node's `.next` property to `.next.next`.

## Design considerations



## Font-end architecture
