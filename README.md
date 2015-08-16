iterative-permutation
=====================
Fast, iterative implementation of Heap's Algorithm for JavaScript

Overview
--------
This is a non-recursive implementation of 
[Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm])
that can be used to generate permutations for very large sets of values.
Typically recursive solutions generate all sets of values and then return them
all at the end. For very large sets it becomes problematic to store all of
the permutations in memory. Instead this implementation returns permutations
one at a time so they can be processed and discarded if needed.

Installation
------------

    npm install iterative-permutation

Example
-------

    var Permutation = require('iterative-permutation');

    var generator = new Permutation([1, 2, 3]);
    while (generator.hasNext()) {
      console.log(generator.next());
    }

    console.log('finished');

Prints:

    [ 1, 2, 3 ]
    [ 2, 1, 3 ]
    [ 3, 1, 2 ]
    [ 1, 3, 2 ]
    [ 2, 3, 1 ]
    [ 3, 2, 1 ]
    finished

Implementation Notes
--------------------
This implementation keeps track of the algorithm stack in a variable called
`stack` and then updates it with the current index each time a new permutation
is calculated. It only uses for loops and simple function calls and has no
external dependencies, just regular ol' JavaScript. Why no ES6 generators? Some
people have found that generators are a
[little slow](https://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/)
and typically when you need a large number of permutations it's in a hot code
path. This implementation tries to be as fast as reasonably possible.

Author
------
Brian Card: [@bmcard](https://twitter.com/bmcard)

License
-------
MIT License - Copyright 2015 Brian Card
