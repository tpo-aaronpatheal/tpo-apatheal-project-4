/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
/*The phrase class handles the creation of the phrases. The first method which is addPhraseToDisplay grabs ahold of the ul which is nested inside 
of the div tags with an id of phrase. The forEach loop loops through the letters of a phrase and appends those letters as li's within the ul. The 
conditional statement checks the phrase to determine whether [i] is a letter or a space and adds the appropriate li. The checkLetter method checks to see 
if the letter selected by the user matches a letter in the phrase. The showMatchedLetter method will then reveal the letters on the board that match the 
users selection.*/
 class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        const ulPhrase = document.getElementById('phrase').firstElementChild;
        //console.log(ulPhrase);
        ulPhrase.innerHTML = '';
        const letters = this.phrase.split('');
        //console.log(letters);
        letters.forEach((letter) => {
            if (letter !== ' '){
                ulPhrase.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
           } else {
                ulPhrase.innerHTML += '<li class="space"> </li>'; 
           }
        });     
        //ulPhrase.innerHTML += letter;
        //console.log(activePhrase);
}
    checkLetter(letter) {
        if (this.phrases.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };
    showMatchedLetter(letter) {
        const matchingLetters = document.querySelectorAll(`.${letter}`);
        if(this.checkLetter = true){
        matchingLetters.forEach((matchingLetter) => {
            matchingLetter.classList.remove('hide');
            matchingLetter.classList.add('show');
        });
        }
    }
 }

 


