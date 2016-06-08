var textTranslator = function (french) {
     var frenchText = {"merry":"joyeux ", 
     				   "christmas":"noel",
     				   "and":"et", 
     				   "happy":"bonne", 
     				   "new":"nouvel", 
     				   "year":"An" };
     french.addText = function(input) {
     	return frenchText[input]
     };
return french;
}(textTranslator);