// Given array,index, and additional value, insert the value into array at given index. do
// this without using built-in array methods.

// var myArr = [1,2,4,5];
// function insertAt(arr,index,val){
//   for(var i = arr.length - 1; i >= index; i--){
//     arr[i+1] = arr[i];
//     arr[i] = arr[i-1];
//   }
//   arr[index] = val;
//   return arr;
// }
// console.log(insertAt(myArr, 1, 40));

// Given array and an additional value, insert this value at the beginning of the array.
// Do this without using built-in array methods.

// var myArr = [1,2,3,4];
// function pushFront(arr,val){
//   for(var i = arr.length - 1; i > 0; i--){
//     arr[i] = arr[i-1];
//   }
//   arr[0] = val;
//   return arr;
// }
// console.log(pushFront(myArr,300000));

// Given array, remove and return the value at the beginning of the array.
// Do this without using built in methods.

// var myArr = [1,2,3,4];
// function popFront(arr){
//   for(var i = 0; i < arr.length - 1; i++){
//     arr[i] = arr[i+1];
//   }
//   arr.pop(0);
//   return arr;
// }
// console.log(popFront(myArr));

// Given array and an index into array, remove and return the array value at that index.
// DO this without using built-in array methods except pop().

// var myArr = [1,3,5,7];
// function removeAt(arr,index){
//   var temp = arr[index];
//   for(var i = 0; i < arr.length - 1; i++){
//     arr[i] = arr[i+1];
//   }
//   arr.pop();
//   return temp;
// }
// console.log(removeAt(myArr, 3));

// Swap positions of successive pairs of values of given array. If length is odd,
// don't change the final element. For [1,2,3,4], return [2,1,4,3]. For example,
// change input ["Brendan", true, 42] to [true, "Brendan", 42]. As with all
// array challenges, do this without using any built-in methods.

// var myArr = [1,2,30,3,11];
// function swapPairs(arr){
//   for(var i = 0; i < arr.length - 1; i++){
//     if(i % 2 === 0){
//       var temp = arr[i+1];
//       arr[i+1] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   return arr;
// }
// console.log(swapPairs(myArr));

// Given a sorted array, remove duplicate values. Because array elements are already
// in order, all duplicate values will be grouped together. As with all these array
// challeneges, do this without using any built-in array methods.

// var myArr = [1,2,3,2,3,4];
// function removeDups(arr){
//   for(var i = arr.length-1; i >= 0; i--){
//     var temp = arr[i];
//     if(temp === arr[i-1]){
//       arr[i] = arr[i+1];
//       arr.pop();
//     }
//   }
//   return arr;
// }
// console.log(removeDups(myArr));

// Given an array of comparable values, move the lowest element to arrays front, shifting backwards any elements previously
// ahead of it. Do not otherwise change the arrays order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.

// var myArr = [30,4,7,9];
// function minFront(arr){
//   for(var i = 0; i < arr.length; i++){
//     var temp = arr[0];
//     if(arr[0] > temp){
//       arr[0] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   return arr;
// }
// console.log(minFront(myArr));

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length,
// with existing elements moved to other indices so that order of elements is reversed. (Working in-place means that you can't use a second array)

var myarr = [1,2,3,4,5];
function reverse(arr){
  var temp = arr.length - 1; 4
  var newTemp = 0;
  var count = 0;
  for(var i = arr.length-1; i >=0; i--){
    arr.push(arr[i]);
    count++;
  }
  var f = temp+1;
  for(var j = 0; j < arr.length; j++){
    newTemp = arr[f];
    arr[j] = newTemp;
    f++;
  }
  arr.length -= count;
  return arr;
}
console.log(reverse(myarr));
