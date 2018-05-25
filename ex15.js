/*
Given a string input and a character,
"countCharacter" returns the number of
occurences of a given character in the given string.
*/

function countCharacter(str, char) {
  var letters = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == char) 
      {
      letters += 1;
      }
  }
  return letters;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
