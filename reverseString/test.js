// Given a string, return a new string with the reversed order of characters.

function reverse(str){
  var arr = [];
  arr = str.split("");
  arr = arr.reverse();
  return arr.join("");
}
console.log(reverse("hello"));

function reverse(str){
  var newString = "";
  for(var i = str.length - 1; i >=0; i--){
    newString += str[i];
  }
  return newString;
}
console.log(reverse("Hello"));

function reverse(str){
  const arr = str.toString().split('');
  arr.reverse();
  return arr.join('');
}
console.log(reverse("basketball"));


function reverse(str){
  let reversed = '';
  for(let character of str.toString()){
    reversed = character + reversed;
  }
  return reversed;
}
console.log(reverse("American Dream"));


// (ADVANCED)
function reverse(str){
  return str.toString().split('').reduce((rev, char) => char + rev, '');
}
console.log(reverse("Foodie"));
