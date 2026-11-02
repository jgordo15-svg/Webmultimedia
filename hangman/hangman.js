let POSSIBLE_WORDS = ["goku", "dog", "android", "dissmount"];
let guesses = "";
let word= "";
let Max_guesses=6;
let guessCount= Max_GUESSES

function newGame() {
    guesses="";
    guessCount = Max_GUESSES;
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomIndex];
    updateScreen();

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
function guess(){

   let input = document.getElementById("guess");
   let letter = input.value;
   if(word.indexOf(letter)<0){
    guessCount--;
   }
   guesses+=letter;
   updateScreen();

   
}

function updateScreen(){

    let clueString ="";
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if(guesses.indexof(letter) >=0){
                clueString+=letter+"";
        }
        else{
            clueString += "_";
        }
        
    }
    let clue= document.getElementById("clue");
    clue.textContent = clueString
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: "+guesses;

    let image = document.getElementById("hangmanpic");
    image.src = "images/hangman"+(guessCount).gif;


}