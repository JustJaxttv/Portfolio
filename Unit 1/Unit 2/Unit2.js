class GuessingGame {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.randomNumber = this.generateRandomNumber(); 
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    checkGuess(userGuess) {
        const oldRandomNumber = this.randomNumber;
        this.randomNumber = this.generateRandomNumber();

        if (isNaN(userGuess) || userGuess < this.min || userGuess > this.max) {
            return `Please enter a valid number between ${this.min} and ${this.max}.`;
        } else {
            if (userGuess === oldRandomNumber) {
                return "Congratulations! You guessed the correct number!";
            } else {
                return `Sorry, the correct number was ${oldRandomNumber}. Try again!`;
            }
        }
    }
}

game = new GuessingGame(1, 10);

const guessButton = document.getElementById('guessButton');
const resultDisplay = document.getElementById('resultDisplay');

guessButton.addEventListener('click', function() {
    const guessInput = document.getElementById('guessInput');
    const userGuess = parseInt(guessInput.value);

    const resultMessage = game.checkGuess(userGuess);

    resultDisplay.textContent = resultMessage;

    guessInput.value = '';
} );

