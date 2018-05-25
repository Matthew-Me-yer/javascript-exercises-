/*
Given a score, "convertScoreToGradeWithPlusAndMinus" 
returns a string representing the letter grade corresponding
to the given score.
*/
function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  var c = output
  if(score>=90 && score<=100) {
  c = "A";
  } if(score>=80 && score<=89) {
  c = "B";
  } if(score>=70 && score<=79) {
  c = "C";
  } if(score>=60 && score<=69) {
  c = "D";
  } if(score<=59) {
  c = "F"
  } if(score>=101) {
  c = "INVALID SCORE"
  } if(score<0) {
  c = "INVALID SCORE"
  } if(score==99||score==98) {
  c = "A+"
  } if(score==79||score==78) {
  c = "C+"
  } if(score==69||score==68) {
  c = "D+"
  } if(score==89||score==88) {
  c = "B+"
  } if(score==90||score==91||score==92) {
  c = "A-"
  } if(score==80||score==81||score==82) {
  c = "B-"
  } if(score==70||score==71||score==72) {
  c = "C-"
  } if(score==60||score==61||score==62) {
  c = "D-"
  }
  return c
}
var output = convertScoreToGradeWithPlusAndMinus(95);
console.log(output); // --> 'A-'
