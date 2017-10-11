/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */
function isPalindrome(string) {
  const stringArray = Array.from(string);
  return stringArray.slice(0).reverse().every(function(element, index) {
    return element === stringArray[index];
  });
}

describe('isPalindrome', function() {
  const assert = require("chai").assert;

  it('works for empty string', function() {
    assert.isOk(isPalindrome(''));
  });

  it('works for single characters', function() {
    assert.isOk(isPalindrome('x'));
    assert.isOk(isPalindrome('c'));
  });

  it('works for double characters', function() {
    assert.isOk(isPalindrome('xx'));
    assert.isOk(isPalindrome('gg'));
    assert.isNotOk(isPalindrome('af'));
    assert.isNotOk(isPalindrome('yt'));
  });

  it('works for words', function() {
    assert.isOk(isPalindrome('racecar'));
    assert.isNotOk(isPalindrome('potato'));
  });
});