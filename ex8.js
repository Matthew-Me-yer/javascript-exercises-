/*
Write a function called "calculateBillTotal".

Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
*/

function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  var tip = preTaxAndTipAmount * 0.15
  var tax = preTaxAndTipAmount * 0.095
  
  
  return tip+tax+preTaxAndTipAmount
  
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
