"use strict";

var submitButton = document.getElementById('submit-button');
var guess = document.getElementById('guess-letter');
var errorMessage = document.getElementById('input__error');

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
    var letter = "<li class=\"letter\">".concat(word.charAt(i), "</li>");
    document.getElementById("game__word").innerHTML += letter;
  }
}

wordLetters();

function allLetter(inputText) {
  var letters = /^[A-Za-z]+$/;

  if (inputText.value.match(letters)) {
    return true;
  } else {
    alert("message");
    return false;
  }
}

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
  } else {
    var letter = "<li class=\"letter\">".concat(guessLetter, "</li>");
    document.getElementById("wrong__guesses").innerHTML += letter;
    console.log("NOOO!!!!");
  }
});

function resetInput() {
  guess.value = "";
  submitButton.disabled = true;
}

;