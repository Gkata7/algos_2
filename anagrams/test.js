// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same character
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case.

function anagrams(strA, strB){
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
  }
  for(let char in aCharMap){
    if(aCharMap[char] !== bCharMap[char]){
      return false;
    }
  }
  return true;
}

function buildCharMap(str){
  const charMap = {};
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}


function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}