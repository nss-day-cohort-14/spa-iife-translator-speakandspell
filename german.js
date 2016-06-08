var translateText = (function(origTranslateText) {
	var germanWords = {"merry": "fröhlich", "christmas": "Weihnachten", "and": "und", "happy": "glücklich", "new": "neu", "year": "Jahr"};


	var translateToGerman = function(englishWord) {
		return germanWords[englishWord];
	};

	return origTranslateText;


})(translateText);