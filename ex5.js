/*
Problem 1:

Create a  RegEx function for a username. The username must contain the first name, an underscore and the year they were born. 

(check that the first part is a string, then check for underscore and then numbers.)

Example:
George Martin  born in 1968.

TEST THIS:
george_68

Use the following function name.
function userName(str)


Problem 2:

Create a  RegEx function that searches for a price and outputs the data.

Example:
The raspberry pi cost $35 at the store.
*/


function userName(str){

output = /^[a-z]+_[0-9]{2}$/i.test(str);

return output;
}
var output = userName("george_68");
console.log(output);





function searchPrice(str){
  output = /\$[0-9]{1,}/.exec(str);
  return output[0];
}
var output = searchPrice("The raspberry pi cost $35 at the store.");
console.log(output);
