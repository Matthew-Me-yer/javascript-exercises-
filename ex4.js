/*
Complete the following and name your functions accordingly:

1. create a Regular Expression to test whether a 5 digit zipcode is valid or not. (check that it's numbers only)

function zipCode(str)

2. create a Regular Expression to check if there's a whitespace in a string

function whiteSpace(str)

3. Check if a social security number is valid. The format for a SSN is  
XXX-XX-XXXX

function socialSecurityNumber(str)
*/

function zipCode(str){

output = /^[0-9]{5}$/.test(str);

return output;
}
var output = zipCode("13440");
console.log(output);

function whiteSpace(str){
output = /\s/.test(str);
return output;
}
var output = whiteSpace("jj jjij jn j FE g");
console.log(output);

function socialSecurityNumber(str){
output = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/.test(str);
return output;
}
var output = socialSecurityNumber("123-02-1234");
console.log(output);

