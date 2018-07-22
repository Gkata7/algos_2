// remove all falsy values from an array.
// examples: false,null,0,"",undefined,NaN

function falsyBouncer(arr){
  var falsy;
  var newArr = [];
  for(var i = 0; i < arr.length;i++){
    falsy = Boolean(arr[i]);
    if(falsy === true){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(falsyBouncer([false,null,0,NaN, undefined]));
