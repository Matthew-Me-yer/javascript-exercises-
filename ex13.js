/*
Given a number, "computeSummationToN" returns the sum of
sequential numbers leading up to the given number, beginning at 0.
*/

function computeSummationToN(n) {
  // your code here
  var Total=0;
  for(var x=1; x<n+1; x++){
    Total+=x;
  }
  return Total;
}

var output = computeSummationToN(6);
console.log(output); // --> 21
