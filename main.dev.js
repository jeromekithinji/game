"use strict";

var submitButton = document.getElementById('submit-button');
var guess = document.getElementById('guess-letter');
var errorMessage = document.getElementById('input__error');
var gameWord = document.getElementById("game__word");
var scoreDisplay = document.getElementById("game__score");
var wrongHeading = document.getElementById("wrong__heading");
var wrongSection = document.getElementById("wrong__letters");
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

; // Generates a random number
// console.log(getRandomNumber());
// Inserting the word into the blanks on the website by picking the word from the generated random number and looping the li element 

function wordLetters() {
  errorMessage.classList.add("hide");
  word = words[getRandomNumber()][0]; // console.log(word);

  for (i = 0; i < word.length; i++) {
    var letter = "<li class=\"letter hide\">".concat(word.charAt(i), "</li>");
    gameWord.innerHTML += letter;
    noOfGuesses++;
  }
}

wordLetters(); // guessCounter(start);
// Validates user input

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
}); // A function that checks if the letter submitted by user is in the word

submitButton.addEventListener("click", function () {
  // console.log(word);
  word = word.toUpperCase();
  guessLetter = guess.value.toUpperCase();

  if (word.includes(guessLetter)) {
    console.log("YESSSSS IT includes!!!!");
    resetInput();
    wonGame(); // Find all the "letter" elements..
    // loop through them
    // if the letter == guestLetter
    // remove the hide class

    var items = gameWord.getElementsByClassName("letter");

    for (var i = 0; i < items.length; ++i) {
      var w = items[i];
      wordletter = w.innerHTML.toUpperCase();

      if (wordletter = guessLetter) {
        w.classList.remove("hide");
        console.log("Remove hide success");
      }

      console.log(w);
      console.log(wordletter); // works
    } // wordLetter.classList.remove("hide");

  } else {
    // wrongSection.classList.remove("hide");
    var letter = "<li class=\"letter\">".concat(guessLetter, "</li>");
    document.getElementById("wrong__guesses").innerHTML += letter;
    console.log("NOOO!!!!");
    guessCounter(false);
  }
});

var guessCounter = function guessCounter(status) {
  // noOfGuesses +=6
  if (status == "start") {
    var _guesses = "<h2> Guesses Remaining: ".concat(noOfGuesses + 6, "</h2>");

    scoreDisplay.innerHTML += _guesses;
  } else if (status === false) {
    noOfGuesses--;
    guesses = "<h2>Guesses Remaining: ".concat(noOfGuesses, "</h2>");
    scoreDisplay.innerHTML += guesses;
  }
};

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
  var duration = 30 * 1000;
  var end = Date.now() + duration;

  var frame = function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: {
        x: 0
      }
    }); // and launch a few from the right edge

    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: {
        x: 1
      }
    });
  };

  frame();
};