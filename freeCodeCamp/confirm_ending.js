// check a string to see if it ends with the target given.
// for example;
// console.log("hello there", "there") = True,
// console.log("Wow, that's amazing", "a") = False

// Using built-in function subStr()
function confirmEnding(str, target){
  // the whole point for -argument.length is to check to see whats at the end of the string.
  // if there's a sentence and it asks to find x amount of characters,
  // itll start the end of the string for each character to see if it matches.
  if(str.substr(-target.length) === target){
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("hello", "a")); 
