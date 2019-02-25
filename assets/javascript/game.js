// variables that hold the wins, losses, guesses, and guesses left/so far
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessesFar = [];

// variables for showing text on the page 
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

// calling variables to output text on page
headerText.textContent = "The Psychic Game";
directionsText.textContent = "Guess what letter I'm thinking of";

// function for the user choice 
document.onkeyup = function (event) {

    // variable for the users choice 
    var userChoice = event.key;

    // if/else statement to add to the users guesses
    if (userChoice !== computerChoice) {
        guessesFar.push(" " + userChoice);
        guessesLeft = guessesLeft - 1;
    }
    // else part of the statement for when the user guesses the correct letter
    else {
        // adds a win
        wins = wins + 1;
        // it tells you that you win,
        alert("You guessed " + userChoice + "! You win!");
        // resets the game
        guessesFar = [];
        guessesLeft = 10;
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; {
            console.log(computerChoice);
        }
    }

    // 2nd if statement when the guesses left are 0
    if (guessesLeft === 0) {
        // it tells you that you lose
        alert("You lose!");
        // ups your losses +1
        losses = losses + 1;
        // and resets the game
        guessesFar = [];
        guessesLeft = 10;
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; {
            console.log(computerChoice);
        }
    }

    // adding variables together to show text on the page, textContent to actually put it there
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesFarText.textContent = "Your guesses so far: " + guessesFar;
}