/*
Problem 1:

Write a JavaScript function to count the number of vowels in a given string using a regular expression. DO NOT USE loops or if statements
(Hint: use exec or match and look at the modifiers on the website below)

use the name:
function countVowels

Problem 2:

Write a JavaScript function to test if the words: dog, cat, or chicken is in a string.

(Hint: you will need to use \b for a word boundary)

Simply put: \b allows you to perform a "whole words only" search using a regular expression in the form of \bword\b.  A "word character" is a character that can be used to form words. All  characters that are not "word characters" are "non-word characters" 

use the name:
function animalCount
*/

function countVowels(str){
output = str.match(/[aeiou]/gi);

return output.length;
}
var output = countVowels("This is a sentence with spaces");
console.log(output);

function animalCount(str){
output = /\bchicken\s|\bdog\s|\bcat\s/i.test(str);

return output;
}
var output = animalCount("catdog");
console.log(output);
