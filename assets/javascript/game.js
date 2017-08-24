var wins = 0;
var loses = 0;
var guessesleft = 9;

var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
var userGuess = null;
var indexToBeGuessed = Math.floor(Math.random() * letters.length);
var letterToBeGuessed = letters[indexToBeGuessed];

window.onload = function () {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + " " + guessesleft;
	document.querySelector("#winsD").innerHTML = "Wins:" + " " + wins;
	document.querySelector("#losesD").innerHTML = "Loses:" + " " + loses;
}

document.onkeydown = function () {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	document.querySelector("#guessesSoFar").innerHTML += userGuess + "," + " ";
	console.log(userGuess);
	console.log(letterToBeGuessed);

if (userGuess === letterToBeGuessed) {

	wins ++;
	document.querySelector("#winsD").innerHTML = "Wins:" + wins;
	document.querySelector("#guessesSoFar").innerHTML ="Guesses So Far:" + " ";
	indexToBeGuessed = Math.floor(Math.random() * letters.length);
	letterToBeGuessed = letters[indexToBeGuessed];
	guessesleft = 10;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + " " + guessesleft;

};

if (userGuess != letterToBeGuessed) {

	guessesleft --;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + " " + guessesleft;	

}

if (guessesleft === 0) {

	loses ++; 
	document.querySelector("#losesD").innerHTML = "Loses:" + loses;
	document.querySelector("#guessesSoFar").innerHTML ="Guesses So Far:" + " ";
	indexToBeGuessed = Math.floor(Math.random() * letters.length);
	letterToBeGuessed = letters[indexToBeGuessed];
	guessesleft = 9;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + " " + guessesleft;
	

}


}