// Print out the n-th entry in the fibonacci series. The Fibonacci series is
// an ordering of numbers where each number is the sum of the preceding two.

function fibonacci(n){
  const result = [0,1]; // An Array to store all numbers.
  for(let i = 2; i <= n; i++){ // Iterate through the array. Starting point is at 2 since 0 and 1 have no numbers next to it to add.
    const a = result[i - 1];// We need to get the previous record to add together.
    const b = result[i - 2];
    result.push(a+b); // add a and b to get the sume of the two.
  }
  return result[n];
}
console.log(fibonacci(30));
// Linear Runtime, Running a for loop and incrementing to a certain target number.

function memoize(fn){
  const cache = {};
  return function(...args){
    if(cache[args]){
      return cache[args];
    }
    const result = fn.apply(this,args);
    cache[args] = result;
    return result;
  };
}

function slowFibonacci(n){
  if(n < 2){
    return n;
  }
  return slowFibonacci(n-1) + slowFibonacci(n-2);
}
console.log(slowFibonacci(5));
// Exponential Run Time(One of the slowest run times), but this will take forever to run.
const fib = memoize(slowFibonacci);
