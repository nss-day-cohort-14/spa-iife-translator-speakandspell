// this function will take the string form textInput and covert to an array of words

var phraseToArray = function(inputstring) {

	var inputArray = inputstring.split(" ");
	return inputArray;

}


var arrayToPhrase = function(tranlatedArray) {

	var translatedPhrase = tranlatedArray.join(" ");

	return translatedPhrase;

}
