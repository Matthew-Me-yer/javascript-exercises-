/*
Create a simple function named rightTriangle to test 3 numbers 
(a, b, c) to see if they create a right triangle or not. You can 
assume the first value is always a, second is b, and third is c. 
Look at the given equation below. If the equation is true, return 
true, otherwise return false.
*/
function rightTriangle(a,b,c){
  if(a*a + b*b == c*c){
    output = true;
    }else{
    output = false;  
    
  }
  return output;
  
}

var output = rightTriangle(3,4,5);
console.log(output);
