// Return a given string num times. Return a empty string if num isn't positive.
// Examples:
// console.log("*", 3) = ***,
// console.log("abc", 2 ) = abcabc

// Using a While loop
function repeatStrings(str,num){
  // create a empty string to store the string.
  var repeatedString = "";
  while(num > 0){
    repeatedString += str;
    num--;
  }
  return repeatedString;
}
console.log(repeatStrings("*", 100));

// Using a conditional and recursion
function repeatStrings(str,num){
  if(num < 0){
    return "";
  }
  if(num === 1){
    return str;
  } else {
    return str + repeatStrings(str,num - 1);
  }
}
console.log(repeatStrings("abc", 3));
