// You will be provided with an initial array, followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function seekerDestroy(arr){
  // the args variable will turn all arguments into a full array.
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  // the use of the filter is to filter out the elements that are on the array and remove the ones that aren't
  return arr.filter(function(element){
    return args.indexOf(element) === -1;
  });
}
console.log(seekerDestroy([1,2,3,4], 2, 3));
