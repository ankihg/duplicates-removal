# Duplicates removal

## Runtime analysis
This implementation of removal of duplicates achieves O(n).

### A quest for linear time complexity

An initial, naive approach to this algorithm could keep an array of found addresses, iterating over it for each element of the input. Best case this would achieve O(n) (not accounting for the removal process), where there are no duplicates. Worst case would be O(n^2) where all elements are duplicated. Could an alternate data structure with more efficient look ups be introduced to track found addresses?

#### Enter hashing

Taking advantage of the fact that input is email addresses (a String), I use a JavaScript key/value object as a hash. Hashing achieves an O(1) lookup, sparing the expense of iterating through all found elements for each input element.

#### Enter linked list

Now it is time to account for the removal process. Removal from an array is expensive; worst case O(n) when being removed from the front of the array. Linked lists achieve constant time removal by setting a node's `.next` property to `.next.next`.

### Arrival at linear time complexity


## Design considerations

Since no design specifications conflict with doing so, the removal of duplicates is handled on the front-end to simplify architecture. This could be a useful task to run on the client side before sending data to the server to reduce data transmission and save server resources. With an O(n) runtime complexity, it could handle a substantially large input size without sacrificing user experience. This task may be better performed on the back-end where the input size is very large or the client has other resource-intensive responsibilities to prioritize user experience.

One peculiarity of design is the use of linked-list for input and output to the duplicates removal function but arrays for the data display with Angular. With linked list's constant time removal, it is clearly an optimal choice for the duplicates removal problem but Angular's ng-repeat directive which can only be used on JavaScript Collections is the typical approach for iterating over elements with Angular. With more time, I would write an Angular directive to display linked lists. 


## Font-end architecture
