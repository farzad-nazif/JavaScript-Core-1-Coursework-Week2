/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number) {
  let timesResult = number*-1;
  if(timesResult>=0){
    return true;
  }
  else{
    return false;
  }
}
function isBetween5and10 (number){
  if(number>4&&number<11){
    return true;
  }
  else {
    return false;
  }
}
function isShortName (name){
  let nameLength = name.length;
  if(nameLength<7){
    return true;
  }
  else{
    return false;
  }
}
function startsWithD (name){
  let firstLetter = name[0];
  if (firstLetter==="D"){
    return true;
  }
  else if (firstLetter==="d") {
    return true;
  }
  else{
    return false;
  }
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
