describe('permutations', function () {
  it('should generate 6 permutations', function () {
    var Permutation = require('../iterative-permutation');
    var generator = new Permutation([1, 2, 3]);
    while (generator.hasNext()) {
      console.log(generator.next());
    }
    console.log('finished');
  });
});