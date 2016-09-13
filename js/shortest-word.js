*/
* Given a string of words, return the length of the shortest word(s).
* String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  var shortest,words=[];
  words = s.split(" ");
  shortest = words[0].length;
  for(var i=0;i<words.length;i++){
    if (words[i].length < shortest) shortest = words[i].length;
  }
  return shortest;
}

