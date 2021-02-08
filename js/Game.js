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
    handleInteraction(button) {
        //console.log(button);
        button.disabled = true;
        if (this.activePhrase.phrase.includes(button.textContent)) {
            button.classList.add('chosen');
            //console.log(button.textContent); 
            //showMatchedLetter(button.textContent);
                if(this.checkForWin() === true){
                    this.gameOver();
                }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
    removeLife(){
        const lostHeart = "images/lostHeart.png";
        //const liveHeart = document.querySelector("img[src ='images/liveHeart.png']"); 
        const hearts = document.querySelectorAll('.tries > img');
        //console.log(scoreBoard);
        hearts[this.missed].src = lostHeart;
        this.missed += 1  
        if(this.missed === 5) {
            this.gameOver();
        }
     }
    checkForWin(){
        let wonGame = true
        const hiddenLetters = document.querySelectorAll('.hide');
        hiddenLetters.forEach((hiddenLetter) => {
            if(hiddenLetter.length === 0){
            wonGame = true;
            return true;
            } else {
            wonGame = false;
            return false;
            }
        });
        return wonGame;
    }
     gameOver(){
        if (this.checkForWin() === true) {
            completeGame("win", "Congrats! You are a winner!");
        } else if(this.missed === 5) {
            completeGame("lose","Oh no you lost! Better luck next time!");
        }
     }
    reset(){
        const ulPhrase = document.getElementById('phrase').firstElementChild;
        this.missed = 0;
        const keyboardButtons = document.querySelectorAll('.key');
        keyboardButtons.forEach((buttons) => {
            buttons.disabled = false;
            buttons.classList.remove('chosen');
            buttons.classList.remove('wrong');
            buttons.classList.add('key'); 
        });
        const hearts = document.querySelectorAll('.tries > img');
        hearts.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></img>';
    }
}

//Helper function for the gameOver method. This grabs a hold of h1 with an id of game-over-message as well as the div with an id of overlay. 
//Overlay and message are passed through as parameters so when the completeGame function is called in the gameOver method,
//they can be set to a certain value depending on wheter the user won or lost the game. I also updated the button text to equal "Restart Game."
function completeGame(overlay, message){
const restartGameButton = document.getElementById('btn__reset');     
restartGameButton.innerText = 'Restart Game';
const screenOverlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
screenOverlay.style.display = 'block';
gameOverMessage.textContent= message;
screenOverlay.className = overlay;
}


