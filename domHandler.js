var inputText = document.getElementById("userInput");

var button = document.getElementById("translateButton");
button.addEventListener("click", clickButton); 
	

function clickButton (){
	var text = inputText.value;
	var textArray = phrasetoArray(text);
	var frenchText = []; 
	for (var i = 0; i < textArray.length; i++) {
		 frenchText.push(translateText.transtoToFrench(textArray[i]));
		 spanishText.push(translateText.translateToSpanish(textArray[i]));
		 germanText.push(translateText.translateToGerman(textArray[i]));
	}

console.log(frenchText)
console.log(spanishText)
console.log(germanText);
}