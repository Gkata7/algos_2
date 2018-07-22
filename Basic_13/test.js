// print integers from 1-255
function integers(){
  var arr = [];
  for(var i = 1; i < 256; i++){
    arr.push(i);
  }
  return arr;
}
console.log(integers());

// print integers from 0 to 255, print the sum
function sumNum(){
  var sum = 0;
  for(var i = 0; i < 256; i++){
    sum += i;
  }
  return sum;
}

console.log(sumNum());

// Given an array, find and print it's largest element
function printMax(arr){
  var max = 0;
  for(var i = 0; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}
console.log(printMax([1,2,34,455]));

// create an array with all odd integers between 1 and 255
function allOdd(){
  var arr = [];
  for(var i = 1; i < 256; i++){
    if(i % 2 !== 0){
      arr.push(i);
    }
  }
  return arr;
}
console.log(allOdd());

// given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr,Y=100){
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > Y){
      count++;
    }
  }
  return count;
}
console.log(greaterThanY([1,23,45,101]));

// given an array, print max, min and average values for that array
function maxMinAvg(arr){
  var max = 0;
  var min = 0;
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
    if(min > arr[i]){
      min = arr[i];
    }
    total = total + arr[i];
  }
  var avg = total/arr.length;
  var arrnew = [max,min,avg];
  return arrnew;
}
console.log(maxMinAvg([1,34,9]));

// Replace any negative array values with "Dojo"
function negativeArr(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = ("Dojo");
    }
  }
  return arr;
}
console.log(negativeArr([1,23,-4,-90]));

// print odd integers from 1 to 255.
function printOdd(){
  var arr = [];
  for(var i = 1; i < 256; i++){
    if(i % 2 !== 0){
      arr.push(i);
    }
  }
  return arr;
}
console.log(printOdd());

// Iterate through a given array and print each value
function printValue(arr){
  for(var i = 0; i < arr.length; i++){
    return arr;
  }
}
console.log(printValue([1,2,3,4,5]));

// print the average of an arrays values
function findAvg(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total = total + arr[i]
  }
  var avg = total/ arr.length;
  return avg
}
console.log(findAvg([10,10,20,40]));

// sqaure each value in a given array, returning that same array with changed values.
function sqaureArr(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
console.log(sqaureArr([2,4,6]));

// return the given array, after setting any negative values to zero
function zeroOut(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}
console.log(zeroOut([10,-3,-4,7]));

// given an array, move all values forward by one index, dropping the first and leaving a "0" value at the end.
function moveIndex(arr){
  for(var i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  arr[i] = 0;
  return arr;
}
console.log(moveIndex([1,2,34]));

// Write a function that will swap the first and last values of any given array. The default minimum length of the array
// is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function arrSwap(arr){
  var temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}
