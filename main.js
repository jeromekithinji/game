console.log("JavaScript works");

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
    console.log(word);
    for (i = 0; i < word.length; i++) {
        const html = `<li class="letter">${word.charAt(i)}</li>`;
        document.getElementById("game__word").innerHTML += html;
    }
}

wordLetters();



