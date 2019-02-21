// variables that hold the wins, losses, and guesses left/so far
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesFar = 0;

// makes the computer choices a selection of the alphabet
// char[] computerChoices = "abcdefghijklmnopqrstuvwxyz".toCharArray(); didn't work so this did 
var computerChoices = "abcdefghijklmnopqrstuvwxyz".toCharArray(); 


document.onkeyup = function(event) {

    var userChoice = event.key;

// randomly selects one of the computer's choice 
var computerChoice = computerChoices [Math.floor(Math.random() * computerChoices.length)];

}