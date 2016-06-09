var translateText = function (french) {
     var frenchText = {"merry":"joyeux", 
     				   "christmas":"noel",
     				   "and":"et", 
     				   "happy":"bonne", 
     				   "new":"nouvel", 
     				   "year":"An" };
     french.translateToFrench = function(input) {
     	return frenchText[input]
     };
return french;
}(translateText);