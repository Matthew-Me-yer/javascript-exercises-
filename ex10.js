/*
You have a green lottery ticket, with  ints a, b, and c on it. 
If the numbers are all different from each  other, the result is 0. 
If all of the numbers are the same, the result  is 20. 
If two of the numbers are the same, the result is 10.
*/

function greenTicket(a,b,c){
  if(a !== c && a !== b){
    output = 0;
  }
    
  if(a == b || a == c || b == c){
    output = 10;
  }
  
  if(a == b && a == c){
    output = 20;
  }
  
  return output;
}
var output = greenTicket(2,2,2);
console.log(output);
