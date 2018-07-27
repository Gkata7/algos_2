// Given a integer, return a integer that is the reverse ordering of numbers.

function reverseInt(n){
  let reversed = n.toString().split("").reverse("").join("");
  if(n < 0){
    return parseInt(reversed) * -1 // multiply the result -1 to convert into a negative number.
  }
  return parseInt(reversed);
}
console.log(reverseInt(-211));

function reverseInt(num){
  const reversed = num.toString().split('').reverse().join("");
  return parseInt(reversed);
}
console.log(reverseInt(123456));
