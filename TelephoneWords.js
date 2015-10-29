//Telephone Words

//Write a function that takes up to four digits of a phone number, and returns a list of all of the words
//that can be written on the phone with that number. (You should return all permutations, not only English words.)

function telephoneWords (digitString) {
  var permutations = [];

  var keys = {    0:['0'],
                  1:['1'],
                  2:['A','B','C'],
                  3:['D','E','F'],
                  4:['G','H','I'],
                  5:['J','K','L'],
                  6:['M','N','O'],
                  7:['P','Q','R','S'],
                  8:['T','U','V'],
                  9:['W','X','Y','Z'] }
                          
  var combo = function(newStr, index){
    //loop through array associated with a number in 'keys'
    for (var i = 0; i < keys[digitString[index]].length; i++) {
      newStr = newStr.slice(0, index) + keys[digitString[index]][i];
      if (index === digitString.length - 1) {
        permutations.push(newStr)
      } else {
      combo(newStr, index+1)
      }
    }
  }
  
  combo('', 0)

  return permutations;
}