// Given a string, return true if the string is a palindrome or false if it is not.
// Palindromes are strings that form the same word if it is reveresed.
// palindrome("abba") === true
// palindrome("abcedge") === false

// 1. Using Built-in Functions
function palindrome(str){
  // This looks for any unwanted characters from the list to find a palindrome.
  var re = /[\W_]/g;
  // lower the string
  var lowRegStr = str.toString().toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split(" ").reverse().join("");
  // check to see if reverseStr is exactly equal to lowerStr and return a boolean.
  return reverseStr === lowRegStr;
}
console.log(palindrome("this is wo!1 omg"));

// 2. Using a FOR Loop
function palindrome(str){
  // This looks for any unwanted characters from the list to find a palindrome.
  var re = /[\W_]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  // Create a for loop to see if the characters match so it'll keep going.
  for(var i = 0; i < len/2; i++){
    if(str[i] !== str[len - 1 - i]){
      // When the characters dont match anymore it'll return false and stop the for loop.
      return false;
    }
  }
  return true;
}
console.log(palindrome("anna,anna"));
