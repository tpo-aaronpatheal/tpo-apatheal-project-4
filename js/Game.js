/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
/*Game class which contains methods for starting and ending the game. Within the game class are the checkForwin, removeLife, gameOver, getRandomPhrase, and 
handleInteraction methods*/
 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
           new Phrase('Country roads take me home'), 
           new Phrase('Fresh off the boat'), 
           new Phrase('A dime a dozen'), 
           new Phrase('Kodak moment'), 
           new Phrase('Eat your veggies'), 
        ];
        this.activePhrase = null;
    }  
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
     }   
    startGame() {
         const overlay = document.querySelector('#overlay');
         overlay.style.display = 'none';
         this.activePhrase = this.getRandomPhrase();
         //console.log(this.activePhrase);
         this.activePhrase.addPhraseToDisplay();
     }
    handleInteraction(e) {
        //console.log();
        e.target.disabled = true;
        if (phrase.includes(e.target.textContent)) {
            e.target.classList.add('chosen'); 
            this.showMatchedLetter();
                if(this.checkForWin()){
                    this.gameOver();
                }
        } else {
            e.target.classList.add('wrong');
            this.removeLife();
        }
    }
    removeLife(){
        const lostHeart = "images/lostHeart.png";
        //const liveHeart = document.querySelector("img[src ='images/liveHeart.png']"); 
        const hearts = document.querySelectorAll('.tries > img');
        //console.log(scoreBoard);
        this.missed += 1  
        hearts[this.missed].src = lostHeart;
     }
    checkForWin(){
        let wonGame = true
        const hiddenLetters = document.querySelectorAll('.hide letter');
        hiddenLetters.forEach((hiddenLetter) => {
            if(hiddenLetter.length !== 0){
            wonGame = false
            } else {
            wonGame = true;
            }
        });
    }
     gameOver(){
        if (this.checkForWin() === true) {
            completeGame("win", "Congrats! You are a winner!");
        } else{
            completeGame("lose","Oh no you lost! Better luck next time!");
        }
     }
    reset(){
        const ulPhrase = document.getElementById('phrase').firstElementChild;
        ulPhrase.innerHTML = '';
        this.missed = 0;
        const keyboardButtons = document.querySelectorAll('.key');
        keyboardButtons.forEach((buttons) => {
            buttons.disabled = false;
            buttons.classList.remove('chosen');
            buttons.classList.remove('wrong');
            buttons.classList.add('key'); 
        });
        const hearts = document.querySelectorAll('.tries > img');
        hearts.src = liveHeart;  
    }
}

//Helper function for the gameOver method. This grabs a hold of h1 with an id of game-over-message as well as the div with an id of overlay. 
//Overlay and message are passed through as parameters so when the completeGame function is called in the gameOver method,
//they can be set to a certain value depending on wheter the user won or lost the game.
function completeGame(overlay, message){
const screenOverlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
gameOverMessage.textContent= message;
screenOverlay.className = overlay;
}


