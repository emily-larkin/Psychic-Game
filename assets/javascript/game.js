// variables that hold the wins, losses, and guesses left/so far
var wins = 0;
var losses = 0;
var guessesLeft = 10;

var headerText = document.getElementById("header-text");
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesFarText = document.getElementById("guessesFar-text");

// makes the computer choices a selection of the alphabet
// char[] computerChoices = "abcdefghijklmnopqrstuvwxyz".toCharArray(); didn't work so this did 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// randomly selects one of the computer's choice 
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; {
    console.log(computerChoice);
}

headerText.textContent = "The Psychic Game";
directionsText.textContent = "Guess what letter I'm thinking of";

document.onkeyup = function (event) {

    var userChoice = event.key;

    // if user === computer add a win and restart
    if (userChoice !== computerChoice) {
        guessesLeft = guessesLeft - 1;
    } else {
        wins = wins + 1;
        alert("You guessed " + userChoice + "! You win!");
    }

    console.log(userChoice);
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesFarText.textContent = "Your guesses so far: " + userChoice;
}