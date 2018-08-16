// Write a function that returns the number of vowels used in a string.
// Vowels are characters, "a", "e", "i","o","u".

function vowels(str){
  let count = 0;
  const checker = ["a","e","i","o","u"];
  for(let char of str.toLowerCase()){
    if(checker.includes(char)){
      count++;
    }
  }
  return count;
}
console.log(vowels("hello"));

// Advanced
function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
