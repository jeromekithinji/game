"use strict";

console.log("JavaScript works");

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
  word = words[getRandomNumber()][0];
  console.log(word);

  for (i = 0; i < word.length; i++) {
    var html = "<li class=\"letter\">".concat(word.charAt(i), "</li>");
    document.getElementById("game__word").innerHTML += html;
  }
}

wordLetters();