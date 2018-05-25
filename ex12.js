/*
Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  //your code here
  var wordl = (word1.length+word2.length+word3.length) / 3;
  if (word1.length<wordl) {
    return word1.length;
  } else if (word2.length<wordl) {
    return word2.length;
  } else {
    return word3.length;
  }
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);
