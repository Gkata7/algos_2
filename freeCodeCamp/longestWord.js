// Returning the longest word in the provided sentence.

// Using a FOR Loop
function findLongestWord(str){
  // Split the string into an array of strings.
  var strSplit = str.split(" ");
  // This variable holds the length of the longest word.
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    // if strSplit[i].length is greater than the word its compared to.
    if(strSplit[i].length > longestWord){
      // this would be the new value the longestWord takes.
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("Giannis Antetokoumpo"));

// Using the sort() method.
function findLongestWord(str){
  // split string into an array of strings.
  var strSplit = str.split(" ");
  // sort the elements in an array.
  var longestWord = strSplit.sort(function(a, b){
    return b.length - a.length;
  });
  return longestWord[0].length
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
