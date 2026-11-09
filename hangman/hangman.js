
let POSSIBLE_WORDS = ["goku", "dog", "android", "dissmount"];
let guesses = "";
let word = "";
let Max_guesses = 6;
let guessCount = Max_guesses;
let gameFinished = true;

function newGame() {
    guesses = "";
    guessCount = Max_guesses;
    gameFinished = false;

    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    updateScreen();

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}

function guess() {

    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();

    if (word == "" || gameFinished) {
        return;
    }


    if (letter == "") {
        return;
    }


    if (guesses.indexOf(letter) >= 0) {
        input.value = "";
        return;
    }

    if (word.indexOf(letter) < 0) {
        guessCount--;
    }

    guesses += letter;


    input.value = "";


    let won = true;

    for (let i = 0; i < word.length; i++) {
        if (guesses.indexOf(word.charAt(i)) < 0) {
            won = false;
        }
    }

    if (won) {
        gameFinished = true;
    }

    
    if (guessCount <= 0) {
        gameFinished = true;
    }

    updateScreen();

    
    let guessArea = document.getElementById("guesses");

    if (won) {
        guessArea.textContent = "Winner winner chicken dinner The word was " + word;
    }
    else if (guessCount <= 0) {
        guessArea.textContent = "You loose The word was " + word;
    }
}

function updateScreen() {

    let clueString = "";

    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);

        if (guesses.indexOf(letter) >= 0) {
            clueString += letter + " ";
        }
        else {
            clueString += "_ ";
        }
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " + guesses;

    let image = document.getElementById("hangmanpic");
    image.src = "images/hangman" + guessCount + ".gif";
}
