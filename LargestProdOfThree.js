//Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

function largestProductOfThree (array) {
 var sorted = array.sort(function(a, b){return a-b});
 var lastThreeProd = sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3]
 var negProd = sorted[0]*sorted[1]*sorted[sorted.length-1];
 if (sorted[1] > 0 || lastThreeProd > negProd) {
   return lastThreeProd;
 } else {
   return negProd;
 }
};