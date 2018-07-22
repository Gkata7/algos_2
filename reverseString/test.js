// Given a string, return a new string with the reversed order of characters.

// 1.
function reverse(str){
  var arr = [];
  arr = str.split("");
  arr = arr.reverse();
  return arr.join("");
}
console.log(reverse("hello"));

// 2.
function reverse(str){
  var newString = "";
  for(var i = str.length - 1; i >=0; i--){
    newString += str[i];
  }
  return newString;
}
console.log(reverse("Hello"));

// // 3. More Advanced Solution
function reverse(str){
  str.split("").reduce((reversed,character) =>
  character + reversed
  , "");
}
