/* 
Given a person's name and age, "checkAge" returns one of two messages:

"Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.
*/

function checkAge(name, age) {
  // your code here
  var c = output
  if(age>=21) {
    c = "Welcome, " + name+"!";
  } else {
    c = "Go home, "+ name+"!";
  }
  return c
  
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
