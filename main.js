const submitButton = document.getElementById('submit-button');
const guess = document.getElementById('guess-letter');
const errorMessage = document.getElementById('input__error');
const gameWord = document.getElementById("game__word");
const scoreDisplay = document.getElementById("game__score");
const wrongHeading = document.getElementById("wrong__heading");
const wrongSection = document.getElementById("wrong__letters");
const wonGameSection = document.getElementById("game__won");
const gameHint = document.getElementById("game__hint");
const hintButton = document.getElementById("button__hint");
const resetButton = document.getElementById("reset__game");


let remainingGuesses = 0;
let noOfGuesses = 0;

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


const guessCounter = status => {
    if (status === "start") {
        remainingGuesses += 6;
        totalGuesses = remainingGuesses;
        console.log(noOfGuesses);
        let guesses = `<h2> Guesses Remaining: ${remainingGuesses}</h2>`;
        scoreDisplay.innerHTML += guesses;
    }

    else if (status === false) {
        remainingGuesses --;
        guesses = `<h2>Guesses Remaining: ${remainingGuesses}</h2>`;
        scoreDisplay.innerHTML = guesses;
    }
}

// Inserting the word into the blanks on the website by picking the word from the generated random number and looping the li element 
function wordLetters () {
    errorMessage.classList.add("hide");
    selcetedWordItem = (words[getRandomNumber()]);
    word = (selcetedWordItem[0]);
    hint = (selcetedWordItem[1]);
    console.log(hint);
    for (i = 0; i < word.length; i++) {
        const letter = `<li class="letter hide">${word.charAt(i)}</li>`;
        gameWord.innerHTML += letter;
        remainingGuesses ++;
    }
    guessCounter("start");
}
wordLetters();



// Validates user input
const letters = /^[A-Za-z]+$/;
guess.addEventListener("input", () => {
    if (guess.value.match(letters)) {
        submitButton.disabled = false;
        guess.classList.remove("invalid")
        errorMessage.classList.add("hide")
    }
    else if (guess.value = ""){
        submitButton.disabled = true;
        console.log("stuckk here")
    }
    else {
        guess.classList.add("invalid");
        errorMessage.classList.remove("hide")
        submitButton.disabled = true;
    }
})

wordComplete = word.length;
// A function that checks if the letter submitted by user is in the word
submitButton.addEventListener("click", () => {
    // console.log(word);
    word = word.toUpperCase();
    guessLetter = (guess.value).toUpperCase();
    if (word.includes(guessLetter)) {
        console.log("YESSSSS IT includes!!!!");
        noOfGuesses += 1;
        console.log(noOfGuesses);
        resetInput();

        var items = gameWord.getElementsByClassName("letter");
        for (var i = 0; i < items.length; ++i) {
            let w = items[i];
            wordletter = (w.innerHTML).toUpperCase();
            if (wordletter === guessLetter) {
                w.classList.remove("hide");
                wordComplete --;
                console.log(wordComplete);
                // Check if all the letters have been matched
                if (wordComplete === 0) {
                    wonGame();
                    console.log("Word Complete!!!!");
                    // gameScore();

                }
            }
        }
    }
    else {
        wrongSection.classList.remove("hide");
        const letter = `<li class="letter">${guessLetter}</li>`;
        document.getElementById("wrong__guesses").innerHTML += letter;
        console.log("NOOO!!!!");
        guessCounter(false);
    }
});



function resetInput () {
    guess.value = "";
    submitButton.disabled = true;
};


// Won game
var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
});

const wonGame = () => {
    const duration = 60 * 1000;
    const end = Date.now() + duration;
    const frame = () => {
    // launch a few confetti from the left edge
        confetti({
            particleCount: 1000,
            angle: 60,
            spread: 155,
            origin: { x: 0 }
        });
    // and launch a few from the right edge
        confetti({
            particleCount: 1000,
            angle: 120,
            spread: 155,
            origin: { x: 1 }
        });
    };
    frame()
    wonGameSection.classList.remove("hide");
    const noOfGuess = 10;
    const wonHTML = `<h1>Awesome, You Won!</h1>
                        <p>You solved the word in ${noOfGuesses + (totalGuesses - remainingGuesses)} Guesses!</p>
                        <p>Score: ${calcualteGameScore()}%</p>`;
    wonGameSection.innerHTML = wonHTML;
};
// wonGame();

// Display the won message
const calcualteGameScore = () => {
    score = (((remainingGuesses)/totalGuesses)*100).toFixed(0);
    return (score);
}
// console.log(gameScore(10, 5));

// Hint button and display hint
const displayWordHint = () => {
    const hintHTML = `<p>Hint: ${hint}</p>`;
    gameHint.innerHTML = hintHTML;
}

hintButton.addEventListener("click", () => {
    hintButton.style.display = "none";
    displayWordHint();
});

resetButton.addEventListener("click", () => {
    location.reload();
});