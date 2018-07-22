 // return true if the string in the first element of the array if it contains all of the letters of the string in the second element of the array.
 // examples: ["hello", "hello"] = true because it has same letters
 // ["Mary", "Army"] = True because the letters are the same despite different words.

 function mutations(arr){
   // lowercase both string inputs for comparison purposes.
   var word = arr[0].toLowerCase();
   var word2 = arr[1].toLowerCase();
   // length of second word is needed becasue we are iterating through word2 to see if letters match word.
   for(var i = 0; i < word2.length; i++){
     var value = word.indexOf(word2[i]);
     // value holder for character.
     // -1 means it doesn't contain it.
     if(value === -1 ){
       return false;
     }
   }
   return true;
   return arr;
 }
 console.log(mutations(["hello", "hey"]));
