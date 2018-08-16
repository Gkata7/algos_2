// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then return
// capitalized string.


// Create an empty array to store the words
// split the input string by spaces to get an array
// For loop for each word in array
// Uppercase the first letter of the word
// Join the first letter with the rest of string
// Push results in the array that was created
// join your array and return it.
function capitalize(str){
  const words = [];
  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}
console.log(capitalize("abcde"));


function capitalize(str){
  let result = str[0].toUpperCase();
  for(let i = 1; i < str.length; i++){
    if(str[i-1] === ' '){
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
