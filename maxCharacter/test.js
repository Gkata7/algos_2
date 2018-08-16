// Given a string, find the common most character used in the string.

// function maxString(str){
//   var charMap = {};
//   var max = 0;
//   var maxChar = ""
//   for(var i = 0; i < str.length; i++){
//     if(charMap[i]){
//       charMap[i]++;
//     } else {
//       charMap[i] = 1
//     }
//   }
//   return maxString;
// }
// console.log(maxString("hello there"));

//
// function maxString(str){
//   var max = 0;
//   var maxChar = "";
//   str.split("").forEach(function(char){
//     if(str.split(char) > max){
//       max = str.split(char).length;
//       maxChar = char;
//     }
//   });
//   return maxChar;
// }
// console.log(maxString("hello there"));


function maxChar(str){
  const charMap = {};
  let max = 0; // to store the amount of times the letter appears.
  let maxChar = ""; // what is the letter that appears the most.

  for(let char of str.toString()){
    // if there's an entry in the string, increment it.
    if(charMap[char]){
      charMap[char]++;
    } else {
    // if not then return 1.
      charMap[char] = 1;
    }
  }
  console.log(charMap);
  for(let char in charMap){
    if(charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxChar("I live in the bay area"));
