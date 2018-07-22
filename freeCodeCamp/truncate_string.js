// Truncate a string if it is longer than the given max string length. Return the string with a ... ending.
// If given max string is less than or equal to 3, then the addition of the 2 dots does not add to the
// string length in determined the truncated string.

function truncateString(str, num){
  if(str.length > num && num > 3){
    return str.slice(0,(num - 3)) + "...";
  } else if(str.length > num && num <= 3){
    return str.slice(0,num) + "...";
  } else {
    return str;
  }
}
console.log(truncateString("A-tisket a-tisket A green and yellow basket", 1));
