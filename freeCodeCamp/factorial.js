// Recursive Way
function factorialize(num){
  // check to see if odd numbers exist, if so, return -1
  if(num < 0){
    return - 1;
  // if the number is 0, return 1
  }else if(num === 0) {
    return 1;
  // what number you call, it'll work its way down and multiply each integer until it gets to 1.
  } else {
    return (num * factorialize(num - 1));
  }
  return num;
}
console.log(factorialize(4));
