// Write a function that splits an array into groups the length of size and returns them as a two dimensional array.
function chunkArrays(arr,size){
  // new variable to store new array values
  var newArray = [];
  var count = 0;
  // while loop to increment the counter
  while(count < arr.length){
    newArray.push(arr.slice(count,count+size));
  // add to newArray values between current index and size.
    count = count + size;
  // increase count
  }
  return newArray;
}
console.log(chunkArrays(["a","b","c","d"], 2));
