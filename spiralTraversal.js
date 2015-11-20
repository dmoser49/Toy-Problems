//Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
//and prints out every value found, but in a spiral from the upper left in to the center.

function spiralTraversal (matrix) {
  if (matrix.length === 1) {
    return matrix[0]
  }
  var results = [];
  var startRowIndex = 0;
  var endRowIndex = matrix.length-1;
  var startColIndex = 0;
  var endColIndex = matrix[0].length-1;
  
  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex){
    for (var i = startColIndex; i <= endColIndex; i++){
      results.push(matrix[startRowIndex][i])
    }
    startRowIndex++;
    
    for (var j = startRowIndex; j <= endRowIndex; j++){
      results.push(matrix[j][endColIndex])
    }
    endColIndex--
    
    if (startRowIndex <= endRowIndex){
      for (var k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k])
      }
      endRowIndex--;
    }
    if (startColIndex <= endColIndex){
      for (var l = endRowIndex; l >= startRowIndex; l--){
        results.push(matrix[l][startColIndex]) 
      }
      startColIndex++
    }
    
  };
  return results
}
