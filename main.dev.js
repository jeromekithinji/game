"use strict";

var submitButton = document.getElementById('submit-button');
var guess = document.getElementById('guess-letter');
var errorMessage = document.getElementById('input__error');
var gameWord = document.getElementById("game__word");
var scoreDisplay = document.getElementById("game__score");
var wrongHeading = document.getElementById("wrong__heading");
var wrongSection = document.getElementById("wrong__letters");
var wonGameSection = document.getElementById("game__won");
var gameHint = document.getElementById("game__hint");
var hintButton = document.getElementById("button__hint");
var remainingGuesses = 0;
var noOfGuesses = 0;

function footerText() {
  var footerText = document.getElementById("game__footer");
  footerText.innerHTML = "Jerome Kithinji, ".concat(new Date().getFullYear(), ". ");
}

;
footerText(); // Array of words 

var words = [["Dog", "Mans bestfriend"], ["Cheetah", "Fastest animal"]]; // Getting random number to pick a word from array

function getRandomNumber() {
  return Math.floor(Math.random() * words.length);
}

;

var guessCounter = function guessCounter(status) {
  if (status === "start") {
    remainingGuesses += 6;
    totalGuesses = remainingGuesses;
    console.log(noOfGuesses);

    var _guesses = "<h2> Guesses Remaining: ".concat(remainingGuesses, "</h2>");

    scoreDisplay.innerHTML += _guesses;
  } else if (status === false) {
    remainingGuesses--;
    guesses = "<h2>Guesses Remaining: ".concat(remainingGuesses, "</h2>");
    scoreDisplay.innerHTML = guesses;
  }
}; // Inserting the word into the blanks on the website by picking the word from the generated random number and looping the li element 


function wordLetters() {
  errorMessage.classList.add("hide");
  selcetedWordItem = words[getRandomNumber()];
  word = selcetedWordItem[0];
  hint = selcetedWordItem[1];
  console.log(hint);

  for (i = 0; i < word.length; i++) {
    var letter = "<li class=\"letter hide\">".concat(word.charAt(i), "</li>");
    gameWord.innerHTML += letter;
    remainingGuesses++;
  }

  guessCounter("start");
}

wordLetters(); // Validates user input

var letters = /^[A-Za-z]+$/;
guess.addEventListener("input", function () {
  if (guess.value.match(letters)) {
    submitButton.disabled = false;
    guess.classList.remove("invalid");
    errorMessage.classList.add("hide");
  } else if (guess.value = "") {
    submitButton.disabled = true;
    console.log("stuckk here");
  } else {
    guess.classList.add("invalid");
    errorMessage.classList.remove("hide");
    submitButton.disabled = true;
  }
});
wordComplete = word.length; // A function that checks if the letter submitted by user is in the word

submitButton.addEventListener("click", function () {
  // console.log(word);
  word = word.toUpperCase();
  guessLetter = guess.value.toUpperCase();

  if (word.includes(guessLetter)) {
    console.log("YESSSSS IT includes!!!!");
    noOfGuesses += 1;
    console.log(noOfGuesses);
    resetInput();
    var items = gameWord.getElementsByClassName("letter");

    for (var i = 0; i < items.length; ++i) {
      var w = items[i];
      wordletter = w.innerHTML.toUpperCase();

      if (wordletter === guessLetter) {
        w.classList.remove("hide");
        wordComplete--;
        console.log(wordComplete); // Check if all the letters have been matched

        if (wordComplete === 0) {
          wonGame();
          console.log("Word Complete!!!!"); // gameScore();
        }
      }
    }
  } else {
    wrongSection.classList.remove("hide");
    var letter = "<li class=\"letter\">".concat(guessLetter, "</li>");
    document.getElementById("wrong__guesses").innerHTML += letter;
    console.log("NOOO!!!!");
    guessCounter(false);
  }
});

function resetInput() {
  guess.value = "";
  submitButton.disabled = true;
}

; // Won game

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);
var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});

var wonGame = function wonGame() {
  var duration = 60 * 1000;
  var end = Date.now() + duration;

  var frame = function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 1000,
      angle: 60,
      spread: 155,
      origin: {
        x: 0
      }
    }); // and launch a few from the right edge

    confetti({
      particleCount: 1000,
      angle: 120,
      spread: 155,
      origin: {
        x: 1
      }
    });
  };

  frame();
  wonGameSection.classList.remove("hide");
  var noOfGuess = 10;
  var wonHTML = "<h1>Awesome, You Won!</h1>\n                        <p>You solved the word in ".concat(noOfGuesses + (totalGuesses - remainingGuesses), " Guesses!</p>\n                        <p>Score: ").concat(calcualteGameScore(), "%</p>");
  wonGameSection.innerHTML = wonHTML;
}; // wonGame();
// Display the won message


var calcualteGameScore = function calcualteGameScore() {
  score = (remainingGuesses / totalGuesses * 100).toFixed(0);
  return score;
}; // console.log(gameScore(10, 5));


var displayWordHint = function displayWordHint() {
  var hintHTML = "<p>Hint: ".concat(hint, "</p>");
  gameHint.innerHTML = hintHTML;
};

hintButton.addEventListener("click", function () {
  hintButton.style.display = "none";
  displayWordHint();
});