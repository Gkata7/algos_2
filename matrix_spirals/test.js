// Write a function that accepts and integer N and returns NXN spiral matrix.

// Create a empty array, "results"
// Create a count that starts at 1
// As long as (start column <= end column) AND (start row <= end row)
//  FOR Loop from start column to end column
//    At results [startrow][i] assign counter variable
//    Increment Counter
//  Increment Start row
//  Loop from start row to end row
//    At results [i][endcolumn] assign counter variable
//    Increment counter
//  Decrement row
//  Repeat for other sides.

function matrix(n){
  const results = [];
  for(let i = 0; i < n; i++){
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while(startColumn <= endColumn && starRow <= endRow){
    // Top Row
    for(let i = startColumn; i <= endColumn; i++){
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right Column
    for(let i = startRow; i <= endRow; i++){
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // Bottom Row
    for(let i = endColumn; i >= startColumn; i--){
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // Start Column
    for(let i = endRow; i >= startRow; i--){
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}
