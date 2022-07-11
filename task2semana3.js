//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'
function wordsToSentence(palabritas) {
    var oracion = ""; //empty string
    for (var i = 0; i < palabritas.length; i++) {
       oracion += ' ' + palabritas[i]; //add space and word to string
    }
    return oracion.trim(); //return the string formed
 }
 
 //console log results
 console.log('results', wordsToSentence(['hey', 'there']));
 
 //don't change this line
 if (typeof module !== 'undefined') {
   module.exports = {
     wordsToSentence,
   };
 }
 