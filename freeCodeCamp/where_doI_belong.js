// Return the lowest index at which a value(second argument) should be inserted into an array(first argument) once it's been sorted.
// Return value should be a number.

function getIndex(arr,num){
  // count variable for the results
  var count = 0;
  for(var i = 0; i < arr.length; i++){
  // if (arr value - number) returns a negative number, it is a smaller number.
    if(arr[i] - num < 0){
      count = count +1;
    }
  }
  return count;
}
console.log(getIndex([100,25,38,40], 35));

function caught_speeding(speed, is_birthday=true){
  if(is_birthday){
    speed -= 5;
  }
  if(speed < 61){
    return 0;
  }else if(speed > 61 || speed < 80){
    return 1;
  }
  return 2;
}
console.log(caught_speeding(900));
