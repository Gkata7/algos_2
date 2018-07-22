// Return the provided string with the firs letter of each word capitalized.

// Using a FOR Loop
function letterCapitalized(str){
  // make sure these strings are set in this order from lowercase to split.
  str = str.toLowerCase();
  str = str.split(" ");
  for(var i = 0; i < str.length; i++){
    // after going through the string;
    // charAt is used to capitalize the first letter in each word.
    // slice is used to extract index 1 to the end of the string.
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ")
}
console.log(letterCapitalized("NBA playoffs aRe the greatest"));


// Using map() method.
function letterCapitalized(str){
  str = str.toLowerCase();
  str = str.split(" ");
  str = str.map(function(word){
    return(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return str.join(" ");
}

// The map() method creates a new array with the results of calling a provided function on every element
// in this array. Using map will call a provided callback function once for each element in an array,
// in order, and constructs a new array from the results.
