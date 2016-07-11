# Duplicates removal

Please visit this project at [duplicates-removal-ankihg.herokuapp.com](https://duplicates-removal-ankihg.herokuapp.com/)

## Runtime analysis
This implementation of removal of duplicates is written in JavaScript and achieves O(n) time complexity.

### A quest for linear time complexity

A naive approach to this algorithm could keep an array of found addresses, iterating over it for each element of the input. Best case, this would achieve O(n) (not accounting for the removal process), where there are no duplicates, but would increase exponentially as the number of duplicates increases, arriving at a worst case of O(n^2) where all elements are duplicated. Could an alternate data structure with more efficient look ups be introduced to track found addresses?

#### Enter hashing

Taking advantage of the fact that input is email addresses (a String), I use a JavaScript key/value object as a hash. Hashing achieves an O(1) lookup, sparing the expense of iterating through all found elements for each input element.

#### Enter linked list

Now it is time to account for the removal process. Removal from an array is expensive; worst case O(n) when being removed from the front of the array. Linked lists achieve constant time removal by setting a node's `.next` property to `.next.next`. Let's see where these refactors have left us.

### Arrival at linear time complexity
```
function removeDuplicates(head) {

  var found = Object.create(null);              // empty object; does not inherit from protoype to avoid collision
  var currentNode = head;                       // tracks current node
  
  while (currentNode.next) {                    // iteration through n input elements
  
    if (found[currentNode.next.value])          // constant time lookup of found addresses
      currentNode.next = currentNode.next.next  // constant time removal of duplicates
      
    else {                                      // if it has not been found
      found[currentNode.next.value] = 1;        // put value on found hash
      currentNode = currentNode.next;           // go to next element
    }
  }
}
```

## Design considerations

Since no design specifications conflict with doing so, the removal of duplicates is handled on the front-end to simplify architecture. This could be a useful task to run on the client side before sending data to the server to reduce data transmission and save server resources. With an O(n) runtime complexity, it could handle a substantially large input size without sacrificing user experience. This task may be better performed on the back-end where the input size is very large or the client has other resource-intensive responsibilities to prioritize user experience.

One peculiarity of design is the use of linked-list for input and output to the duplicates removal function but arrays for the data display with Angular. With linked list's constant time removal, it is clearly an optimal choice for the duplicates removal problem but Angular's ng-repeat directive which can only be used on JavaScript Collections is the typical approach for iterating over elements with Angular. With more time, I would write an Angular directive to display linked lists. 


## Font-end architecture
