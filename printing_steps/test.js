// Write a function that accepts a positive number N. The function
// should console log a step shape with N levels using the # character.
// Make sure the step has spaces on the right hand side.


// From 0 to n(iterate through rows)
// create a empty string
// from 0 to n(iterate through columns)
// IF the current column is equal to or less than the current row
// add a "#" to your string
// ELSE
// add a space to your string
// console log the string.
function printing(n){
  for(let row = 0; row < n; row++){
    let step = "";
    for(let column = 0; column < n; column++){
      if(column <= row){
        step += '#';
      } else {
        step += ' ';
      }
    }
    console.log(step);
  }
}
console.log(printing('##'));

// Recursion
function steps(n, row = 0, stair = ''){
  if(n === row){
    return;
  }
  if(n === stair.length){
    console.log(stair);
    return steps(n, row + 1);
  }
  if(stair.length <= row){
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}
