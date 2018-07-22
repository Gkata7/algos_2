// write a function that takes a ROT12 encoded string as input and returns a decoded string.
// you're shifting each letter by 13.

function caesarsCipher(str){
  var newArr = str.split(""); // split the string into the array.
  var decodedArr = []; // Result goes in this array.
  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  for(var i = 0; i < newArr.length; i++){
    if(alphabet.indexOf(newArr[i]) === -1){
      decodedArr.push(newArr[i]);
    } else {
      for(var j = 0; j < alphabet.length; j++){
        if(newArr[i] === alphabet[j]){
          decodedArr.push(alphabet[j + 13]);
        }
      }
    }
  }
  return decodedArr.join("");
}
console.log(caesarsCipher(["SERR"]));


function caesarsCipher(str){
  return str.split("");
  .map.call(str,function(char){
    i = char.charCodeAt(0);
    if(i < 65 || i > 90){
      return String.fromCharCode(i);
    } else if(x < 78) {
      return String.fromCharCode(x + 13);
    }
    return String.fromCharCode(x - 13);
  }).join("");
}
console.log(caesarsCipher(["SERR"]));
