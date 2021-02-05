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
    handleInteraction() {}
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
}
     //gameOver();
 

