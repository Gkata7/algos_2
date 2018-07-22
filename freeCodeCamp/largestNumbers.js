// Return an array consisting of the largest number from each provided sub-array.
// It will contain exactly 4 sub array with 4 numbers.

// FOR Loop
function largestNumber(arr){
  // Make this array to store the 4 sub arrays.
  var largeNum = [];
  // First for loop that'll iterate through the arrays
  for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++){
    var biggestNum = 0;
  // Second for loop that'll iterate through the sub-arrays.
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++){
      if(arr[arrayIndex][subArrayIndex] > biggestNum){
        biggestNum = arr[arrayIndex][subArrayIndex];
      }
    }
    largeNum[arrayIndex] = biggestNum;
  }
  return largeNum;
}
console.log(largestNumber([[1,2,3,4], [100,100,0,100], [54,29,10,0]]));

// Using map and reduce methods
// function largestNumber(arr){
//   return arr.map(function(subArray){
//     return subArray.reduce(function(previousLargeNum, currentLargeNum){
//       return(currentLargeNum > previousLargeNum) ? currentLargeNum : previousLargeNum;
//     },0);
//   });
// }
