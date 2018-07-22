// Given a string, find the common most character used in the string.

function maxString(str){
  var charMap = {};
  var max = 0;
  var maxChar = ""
  for(var i = 0; i < str.length; i++){
    if(charMap[i]){
      charMap[i]++;
    } else {
      charMap[i] = 1
    }
  }
  return maxString;
}

console.log(maxString("hello there"));

function maxString(str){
  var max = 0;
  var maxChar = "";
  str.split("").forEach(function(char){
    if(str.split(char) > max){
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
}

console.log(maxString("hello there"));
