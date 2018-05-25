/* Given 3 int values, a b c, return their 
sum. However, if one of the  values is the 
same as another of the values, it does not 
count towards  the sum. 
*/
function loneSum(a,b,c){
  if(a !== b && a !== c && b !== c){
    output = a+b+c
  }
  if(a == c && a !== b){
    output = b;
  }
  if(a == b && a !== c){
    output = c;
  }
  if(b == c && a !== b){
    output = a;
  }
  if(a == b && a == c){
    output = 0;
  }
  return output;
}
var output = loneSum(3,2,3);
console.log(output)
