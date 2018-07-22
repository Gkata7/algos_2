// Given an array and an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods. PushFront(arr,val)
function pushFront(arr,val){
  for(var i = arr.length - 1; i >= 0; i--){
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  console.log(arr);
}
pushFront([1,2,3], 5);

// Given an array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().
function popFront(arr){
  var val = arr[0];
  for(var i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  var temp = arr.pop(arr.length - 1);
  console.log(val);
}
popFront([1,2,3])

// Given an array, index, and additional value, insert the value into the array at the given index.
// Do this without using built-in array methods.
// You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).
function insertAt(arr,index,val){
  for(var i = arr.length - 1; i > index; i--){
    arr[i + 1] = arr[i];
  }
  arr[index] = val;
  console.log(arr);
}
insertAt(2,3,4);

// Given an array and an index into the array, remove and return the array value at that index.
// Do this without using any built-in array methods except pop().
// Think of PopFront(arr) as equivalent to RemoveAt(arr,0).
function removeAt(arr,index){
  var temp = arr[index];
  for(var i = index; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return temp;
}
console.log(removeAt([112,3,4]));
