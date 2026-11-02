let POSSIBLE_WORDS = ["goku", "dog", "android", "apple"];
let word = "";
let guesses = "";
let maxWrong = 6;
let wrongGuesses = 0;
let gameOver = false;

function newGame() {
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomIndex];
    for (let i = 0; i < word.length; i++) {
        clueString += "_";
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
function guess(){

   let input = document.getElementById("guess");
   let letter = input.value 
}