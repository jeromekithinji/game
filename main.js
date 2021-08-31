const submitButton = document.getElementById('submit-button');
const guess = document.getElementById('guess-letter');
const errorMessage = document.getElementById('input__error');
const gameWord = document.getElementById("game__word");
const scoreDisplay = document.getElementById("game__score");
const wrongHeading = document.getElementById("wrong__heading");
const wrongSection = document.getElementById("wrong__letters");


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

// Generates a random number
// console.log(getRandomNumber());


// Inserting the word into the blanks on the website by picking the word from the generated random number and looping the li element 
function wordLetters () {
    errorMessage.classList.add("hide")
    word = (words[getRandomNumber()][0]);
    // console.log(word);
    for (i = 0; i < word.length; i++) {
        const letter = `<li class="letter hide">${word.charAt(i)}</li>`;
        gameWord.innerHTML += letter;
        noOfGuesses ++;
    }

}
wordLetters();
// guessCounter(start);



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

// A function that checks if the letter submitted by user is in the word
submitButton.addEventListener("click", () => {
    // console.log(word);
    word = word.toUpperCase();
    guessLetter = (guess.value).toUpperCase();
    if (word.includes(guessLetter)) {
        console.log("YESSSSS IT includes!!!!");
        resetInput();
        wonGame();

        // Find all the "letter" elements..
        // loop through them
        // if the letter == guestLetter
        // remove the hide class
        var items = gameWord.getElementsByClassName("letter");
        for (var i = 0; i < items.length; ++i) {
            let w = items[i];
            wordletter = (w.innerHTML).toUpperCase();
            if (wordletter = guessLetter) {
                w.classList.remove("hide");
                console.log("Remove hide success");
            }
            console.log(w);
            console.log(wordletter);
            // works
        }
        
        // wordLetter.classList.remove("hide");
    }
    else {
        // wrongSection.classList.remove("hide");
        const letter = `<li class="letter">${guessLetter}</li>`;
        document.getElementById("wrong__guesses").innerHTML += letter;
        console.log("NOOO!!!!");
        guessCounter(false);
    }
});


const guessCounter = status => {
    // noOfGuesses +=6
    if (status == "start") {
        let guesses = `<h2> Guesses Remaining: ${noOfGuesses+6}</h2>`;
        scoreDisplay.innerHTML += guesses;
    }

    else if (status === false) {
        noOfGuesses --;
        guesses = `<h2>Guesses Remaining: ${noOfGuesses}</h2>`;
        scoreDisplay.innerHTML += guesses;
    }
}


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
    const duration = 30 * 1000;
    const end = Date.now() + duration;
    const frame = () => {
    // launch a few confetti from the left edge
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
    // and launch a few from the right edge
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    };
    frame()
}
