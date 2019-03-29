// variables for the html display

var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('Losses-text');
var GuessesSoFarText = document.getElementById('Guesses-so-Far');
var GuessesLeftText = document.getElementById('Guesses');

// variables for wins losses and guesses
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];

// create an array of letters for the computer to guess from
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// generate random computer guess
var compGuess = letterArray[Math.floor(Math.random() * letterArray.length)];

// letter guessed by user
    document.onkeypress = function(event) {
        var userGuess = event.key;
        
// if user guess equals computer guess add 1 to wins and reset computer guess
        if (userGuess == compGuess){
            wins++;
            compGuess = letterArray[Math.floor(Math.random() * letterArray.length)];

// if user guess does not equal computer guess subtract 1 from guesses
        }else{
            guesses--;
            lettersGuessed.push(userGuess);
        }

// if guesses equals 0 add 1 to losses reset guesses to 10 and reset computer guess
        if (guesses == 0){
            losses++;
            guesses = 10;
            lettersGuessed = [];
            compGuess = letterArray[Math.floor(Math.random() * letterArray.length)];
        }

// display user wins losses guesses left guesses so far
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        GuessesSoFarText.textContent = "You guessed: " + lettersGuessed;
        GuessesLeftText.textContent = "Guesses left: " + guesses;
    }
// console logs for testing
console.log(compGuess);
console.log(wins);
console.log(losses);
console.log(guesses);