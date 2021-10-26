"use strict";

var playButton = document.querySelector("#button__play");
var startGamePage = document.querySelector(".startGame");
var gamePage = document.querySelector(".playGame");
var submitButton = document.getElementById('submit-button');
var guess = document.getElementById('guess-letter');
var errorMessage = document.getElementById('input__error');
var gameWord = document.getElementById("game__word");
var scoreDisplay = document.getElementById("game__score");
var wrongHeading = document.getElementById("wrong__heading");
var wrongSection = document.getElementById("wrong__letters");
var wonGameSection = document.getElementById("game__won");
var lostGameSection = document.getElementById("game__lost");
var gameHint = document.getElementById("game__hint");
var hintButton = document.getElementById("button__hint");
var resetButton = document.getElementById("button__reset");
var remainingGuesses = 0;
var noOfGuesses = 0;

function footerText() {
  var footerText = document.getElementById("game__footer");
  footerText.innerHTML = "Jerome Kithinji, ".concat(new Date().getFullYear(), ". ");
}

;
footerText();
playButton.addEventListener("click", function () {
  startGamePage.style.display = "none";
  gamePage.style.display = "block";
  console.log("The play button works!");
}); // Words 

var words = [["Dog", "Mans bestfriend"], ["Cheetah", "Fastest animal"], ["Cat", "A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. "], ["Elephant", "A very large plant-eating mammal with a prehensile trunk, long curved ivory tusks, and large ears, native to Africa and southern Asia."], ["Rhino", "A large, heavily built plant-eating mammal with one or two horns on the nose and thick folded skin, native to Africa and southern Asia."], ["Lion", "A large tawny-coloured cat that lives in prides, found in Africa and NW India."], ["Zebra", "An African wild horse with black-and-white stripes and an erect mane."], ["Horse", "A solid-hoofed plant-eating domesticated mammal with a flowing mane and tail, used for riding, racing, and to carry and pull loads."], ["Kangaroo", "A large plant-eating marsupial with a long powerful tail and strongly developed hindlimbs that enable it to travel by leaping, found only in Australia and New Guinea."]]; // Getting random number to pick a word from array

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

    if (remainingGuesses == 0) {
      lostGame();
    }
  }
};

var resetGame = function resetGame(buttonElement) {
  buttonElement.addEventListener("click", function () {
    location.reload();
  });
}; // Inserting the word into the blanks on the website by picking the word from the generated random number and looping the li element 


function wordLetters() {
  errorMessage.classList.add("hide");
  selcetedWordItem = words[getRandomNumber()];
  word = selcetedWordItem[0];
  hint = selcetedWordItem[1]; // console.log(hint);

  for (i = 0; i < word.length; i++) {
    var letter = "<li class=\"letter\">".concat(word.charAt(i), "</li>");
    gameWord.innerHTML += letter;
    remainingGuesses++;
  }

  var resetGameButton = document.getElementById("button__reset");
  resetGame(resetGameButton);
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
wordComplete = word.length;
wrongLetters = []; // A function that checks if the letter submitted by user is in the word

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
        w.style.color = "black"; // w.classList.remove("hide");

        wordComplete--;
        console.log(wordComplete); // Check if all the letters have been matched

        if (wordComplete === 0) {
          wonGame();
          console.log("Word Complete!!!!");
        }
      }
    }
  } else {
    wrongSection.classList.remove("hide");
    console.log("NOOO!!!!");

    if (wrongLetters.includes(guessLetter)) {} else {
      wrongLetters.push(guessLetter);
      var letter = "<li class=\"wrong__letter\">".concat(guessLetter, "</li>");
      document.getElementById("wrong__guesses").innerHTML += letter;
      guessCounter(false);
    }
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

  wonGameSection.classList.remove("hide");
  var noOfGuess = 10;
  var wonHTML = "<h1>Awesome, You Won!</h1>\n                        <p>You solved the word in ".concat(noOfGuesses + (totalGuesses - remainingGuesses), " Guesses!</p>\n                        <p>Score: ").concat(calcualteGameScore(), "%</p>\n                        <button id=\"reset__game__won\">Play Again</button>");
  wonGameSection.innerHTML = wonHTML;
  var resetGameButton = document.getElementById("reset__game__won");
  resetGame(resetGameButton);
  frame();
}; // Display the won message


var calcualteGameScore = function calcualteGameScore() {
  score = (remainingGuesses / totalGuesses * 100).toFixed(0);
  return score;
}; // Hint button and display hint


var displayWordHint = function displayWordHint() {
  var hintHTML = "<p>Hint: ".concat(hint, "</p>");
  gameHint.innerHTML = hintHTML;
};

hintButton.addEventListener("click", function () {
  hintButton.style.display = "none";
  displayWordHint();
});

var lostGame = function lostGame() {
  lostGameSection.classList.remove("hide");
  var lostHTML = "<h1>You Lost... The word was ".concat(word, "</h1>\n                        <p>Don't worry, you'll get the next one!</p>\n                        <button id=\"reset__game__lost\">Play Again?</button>");
  lostGameSection.innerHTML = lostHTML;
  var resetGameButton = document.getElementById("reset__game__lost");
  resetGame(resetGameButton);
};