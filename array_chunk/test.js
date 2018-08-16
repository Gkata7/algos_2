// Given an array and chunk size, divide the array into many
// subarrays where each subarray is of length size.

// function arrayChunky(arr, size){
//   let chunkedArr = [];
//   for(let i = 0; i < arr.length; i++){
//     const last = chunkedArr[chunkedArr.length - 1];
//     if(!last || last.length === size){
//       chunkedArr.push(arr[i]);
//     } else {
//       last.push(arr[i]);
//     }
//   }
//   return chunkedArr;
// }
// console.log(arrayChunky([1,2,3,4], 2));


function chunk(arr, size){
  let chunked = [];
  for(let element of arr){
    const last = chunked[chunked.length - 1];
    if(!last || last.length === size){
      chunked.push(element);
    } else {
      last.push(element);
    }
  }
  return chunked;
}
console.log(chunk([1,2,3,4], 2));


// Create an empty array to hold the chunks called chunked_arr.
// Declare a variable called index started at 0
// While index is less than length of the given array
// Slice the array from index to size + index and push it into the chunked_arr
// Increment the index with size
function chunk(array,size){
  const chunkedArr = [];
  let index = 0;
  while(index < array.length){
    chunkedArr.push(array.Slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}
