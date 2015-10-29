//All Anagrams
//Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.

function allAnagrams (string) {
  
  var anagrams = [];
  
  var recurse = function(start, str) {
    if (start.length === string.length && anagrams.indexOf(start) === -1) {
      anagrams.push(start)
    } else {
      for (var i = 0; i < str.length; i++) {
        var newStart = start + str[i];
        var newStr = str.slice(0, i).concat(str.slice(i+1, str.length));
        recurse(newStart, newStr)
      }
    }
    
  }
  
  recurse("", string)
  
  return anagrams

}