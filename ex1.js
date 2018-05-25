//JavaScript: Fahrenheit and Centigrade Temperatures:

function cToF(q) {
  // this is celsius to Fahrenheit
  var F = (q * 1.8) + 32;
  console.log(q+"\xB0C is "+F+"°F.")
}

function fToC(i) {
  // this is Fahrenheit to Celsius
 var C = (5/9) * (i - 32);
 console.log(i+"\xB0F is "+C+"°C.")
}

cToF(60);
fToC(45);
console.log()
