/*
Given 2 integers, "computeSumBetween" 
returns the sum between the two given 
integers, beginning at num1, and 
excluding num2.
*/

function computeSumBetween(num1, num2) {
  // your code here
var sum = 0;
  if (num2 <= num1) {
    return 0;
    
    }
  for (var i = num1; i < num2; i++) {
      sum += i;
  }
  return sum;
}
var output = computeSumBetween(1, 4);
console.log(output); // --> 9
