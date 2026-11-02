let POSSIBLE_WORDS = ["goku", "dog", "android", "dissmount"];


function newGame() {
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomIndex];
    updateScreen();

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
function guess(){

   let input = document.getElementById("guess");
   let letter = input.value;
   let guesses = "";
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


}