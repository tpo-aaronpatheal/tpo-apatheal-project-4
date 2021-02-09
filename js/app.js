/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/*Tests

 const phrase = new Phrase();
 const game = new Game();

const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);

const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();*/

/*const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);*/


//app.js project code below:

let game; 
const startGameButton = document.getElementById('btn__reset');
startGameButton.addEventListener('click', function(e) {
    game = new Game();
    game.startGame();
    game.reset();
});

//Event listener that listens for the users click on the onscreen keyboard. The conditional also ensures that the event only fires when a button is hit. 
const keyboardButtons = document.querySelectorAll('.key');
keyboardButtons.forEach((keyboardButton) => {
        keyboardButton.addEventListener('click', function(e) {
            if(e.target.tagName === 'BUTTON'){
            //console.log(e.target);
                game.activePhrase.showMatchedLetter(e.target.textContent);
                game.handleInteraction(e.target);
                //e.target.style.transform = "rotate(360deg)";
             }
        });
});

/*//Event Listener that listens for the users keyboard interaction. 
const body = document.querySelector('body');
body.addEventListener('keydown', function(e){
    //console.log(e.key);
    let keyboardKey = e.key;
    keyboardButtons.forEach((keyboardButton) => {
        const button = keyboardButton.textContent;
        //console.log(keyboardKey);
       // console.log(`keyboardButton - ${keyboardButton.textContent} keyboardKey - ${keyboardKey}`);
        if(button === keyboardKey){
            //console.log(button);
            game.activePhrase.showMatchedLetter(keyboardKey);
            game.handleInteraction(keyboardKey);
            //e.key.style.transform = "rotate(360deg)";
        }
    });
});*/
