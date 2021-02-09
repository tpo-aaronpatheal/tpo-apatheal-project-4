/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
/*Game class which contains methods for starting and ending the game. Within the game class are the checkForwin, removeLife, gameOver, getRandomPhrase, and 
handleInteraction methods. This.missed is used to track the number of missed guesses by the player. The phrases array lists the potential phrases that can 
be shown on the page at random when ever a new game starts. The active phrase represents the phrase that is currently in play. */
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
    //This method selects a random phrase from the array of phrases.
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
     }   
     //The startGame method calls the getRandomPhrase method,sets the overlay style to "none", and calles the addPhraseToDisplay method(which
     //is detailed in the Phrase.js.)
    startGame() {
         const overlay = document.querySelector('#overlay');
         overlay.style.display = 'none';
         this.activePhrase = this.getRandomPhrase();
         //console.log(this.activePhrase);
         this.activePhrase.addPhraseToDisplay();
     }
     //The handleInteraction method disables the users selected letter button so that they cannot hit the same buttom more than once. The button class
     //is also updated depending on whether the user selected a correct or incorrect letter. This method also calls the checkForWin, removeLife, and 
     //gameOver methods.
    handleInteraction(button) {
        //console.log(button);
        button.disabled = true;
        if (this.activePhrase.phrase.includes(button.textContent)) {
            button.classList.add('chosen');
            //console.log(button.textContent); 
                if(this.checkForWin() === true){
                    this.gameOver();
                }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
    //removeLife method removes a life from the score board when a player chooses an incorrect letter. As mentioned above, this.missed is
    //used to track the number of wrong guesses the player has. Everytime a user misses a guess, a liveHeart is replaced with a lostHeart 
    //and this.missed increases by one. Once this.missed is equal to 5, the player loses the game. 
    removeLife(){
        const lostHeart = "images/lostHeart.png";
        const hearts = document.querySelectorAll('.tries > img');
        //console.log(scoreBoard);
        hearts[this.missed].src = lostHeart;
        this.missed += 1  
        if(this.missed === 5) {
            this.gameOver();
        }
     }
    //checkForWin method checks to see if the player has won the game by checking for hidden letters. If the player has revealed all the letters, then
    //the method will return that the player has won. 
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
    //This method displays the original start screen overlay and alters the screen to reflect the outcome of the game. There is a separate message
    //that will desplay depending on whether or not the user won or lost. The completeGame function is detailed at the bottom.
     gameOver(){
        if (this.checkForWin() === true) {
            completeGame("win", "Congrats! You are a winner!");
        } else if(this.missed === 5) {
            completeGame("lose","Oh no you lost! Better luck next time!");
        }
     }
     //This method is used to reset the gameboard once the "Reset Game" button is hit by the user. This method resets the liveHearts, chooses a new phrase,
     //and updates the buttoms class.
    reset(){
        this.missed = 0;
        const keyboardButtons = document.querySelectorAll('.key');
        keyboardButtons.forEach((buttons) => {
            buttons.disabled = false;
            buttons.classList.remove('chosen');
            buttons.classList.remove('wrong');
            buttons.classList.add('key'); 
        });
        const hearts = document.querySelectorAll('.tries');
        hearts.forEach((heart) => {
            heart.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></img>';
        });
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


