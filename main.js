const submitButton = document.getElementById('submit-button');
const guess = document.getElementById('guess-letter');


function footerText() {
    let footerText = document.getElementById("game__footer");
    footerText.innerHTML = `Jerome Kithinji, ${new Date().getFullYear()}. `;
};

footerText();


// Array of words 
const words = [
    ["Dog", "Mans bestfriend"], ["Cheetah", "Fastest animal"]
]

// Getting random number to pick a word from array
function getRandomNumber() {
    return Math.floor(Math.random() * words.length);
};

// Generates a random number
// console.log(getRandomNumber());


// Inserting the word into the blanks on the website by picking the word from the generated random number and looping the li element 
function wordLetters () {
    word = (words[getRandomNumber()][0]);
    // console.log(word);
    for (i = 0; i < word.length; i++) {
        const letter = `<li class="letter">${word.charAt(i)}</li>`;
        document.getElementById("game__word").innerHTML += letter;
    }
}
wordLetters();

function allLetter(inputText) {
    var letters = /^[A-Za-z]+$/;
    if(inputText.value.match(letters)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}



// A function that checks if the letter submitted by user is in the word
submitButton.addEventListener("click", () => {
    // console.log(word);
    word = word.toUpperCase();
    guessLetter = (guess.value).toUpperCase();
    if (word.includes(guessLetter)) {
        console.log("YESSSSS IT includes!!!!");
    }
    else {
        const letter = `<li class="letter">${guessLetter}</li>`;
        document.getElementById("wrong__guesses").innerHTML += letter;
        console.log("NOOO!!!!");
    }
});


