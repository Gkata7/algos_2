// Given a integer, return a integer that is the reverse ordering of numbers.

function reverse(n){
  let reversed = n.toString().split("").reverse("").join("");
  if(n < 0){
    return parseInt(reversed) * - 1
  }
  return parseInt(reversed);
}

console.log(reverse(345533));

function reverse(str){
  const arr = str.toString().split('');
  arr.reverse();
  return arr.join('');
}
console.log(reverse(1234));

function reverse(str){
  let reversed = '';
  for(let character of str.toString()){
    reversed = character + reversed;
  }
  return reversed;
}
console.log(reverse(51059));

// (ADVANCED)
function reverse(str){
  return str.toString().split('').reduce((rev, char) => char + rev, '');
}
console.log(reverse(1234));
