var Permutator = require('../iterative-permutation');
var assert = require('assert-diff');
var _ = require('underscore');

describe('permutations', function () {
  
  function getPermutations(values) {
    var gen = new Permutator(values);
    var result = [];
    while(gen.hasNext()) {
      result.push(gen.next());
    }
    return result;
  }
  
  function contains(list, value) {
    var result = _.find(list, function(e) {
      if (e.length != value.length) return false;
      for (var i=0; i<value.length; i++) {
        if (e[i] !== value[i]) {
          return false;
        }
      }
      return true;
    });
    
    if (result) return true;
    return false;
  }
  
  it('should return same set if size is 1', function () {
    var perms = getPermutations([1]);
    assert.equal(1, perms.length);
    assert.equal(1, perms[0].length);
    assert.equal(1, perms[0][0]);
  });
  
  it('should calculate with set of size 2', function () {
    var perms = getPermutations([1, 2]);
    assert.equal(2, perms.length);
    assert.equal(2, perms[0].length);
    assert.deepEqual([1, 2], _.union.apply(this, perms));
  });
  
  
  it('should generate 6 pairs with 3 inputs', function () {
    var generator = new Permutator([1, 2, 3]);
    var result = [];
    while(generator.hasNext()) {
      result.push(generator.next());
    }
    
    assert.equal(6, result.length);
    checkContains([1, 2, 3]);
    checkContains([1, 3, 2]);
    checkContains([2, 1, 3]);
    checkContains([2, 3, 1]);
    checkContains([3, 2, 1]);
    checkContains([3, 1, 2]);
    
    function checkContains(perm) {
      assert.equal(true, contains(result, perm), 'missing '+perm+
      ' from:\n'+JSON.stringify(result, null, 0));
    }
  });
  
  it('should generate 720 pairs with 6 inputs', function () {
    var generator = new Permutator([1, 2, 3, 5, 4, 6]);
    var result = [];
    while(generator.hasNext()) {
      result.push(generator.next());
    }
    
    assert.equal(720, result.length);
    result = _.uniq(result, function (e) {return JSON.stringify(e); });
    assert.equal(720, result.length);
  });
  
});