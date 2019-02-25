// variables that hold the wins, losses, and guesses left/so far
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessesFar = [];

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

    if (userChoice !== computerChoice) {
        guessesFar.push(" " + userChoice);
        guessesLeft = guessesLeft - 1;
    } else {
        wins = wins + 1;
        alert("You guessed " + userChoice + "! You win!");
        guessesFar = [];
        guessesLeft = 10;
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    if (guessesLeft === 0) {
        alert("You lose!");
        losses = losses + 1;
        guessesFar = [];
        guessesLeft = 10;
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesFarText.textContent = "Your guesses so far: " + guessesFar;
}