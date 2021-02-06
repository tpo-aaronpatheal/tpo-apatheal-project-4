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
startGameButton.addEventListener('click', function() {
    game = new Game();
    game.startGame();
});

//Event listener that listens for the users click on the onscreen keyboard.
const keyboardButtons = document.querySelectorAll('.key');
keyboardButtons.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
});

