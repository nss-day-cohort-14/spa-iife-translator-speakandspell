var translateText = (function(origTranslateText) {
	var spanishWords = {"merry": "feliz", "christmas": "Navidad", "and": "y", "happy": "feliz", "new": "nuevo", "year": "año"};


	var translateToSpanish = function(englishWord) {
		return spanishWords[englishWord];
	};

	return origTranslateText;


})(translateText);