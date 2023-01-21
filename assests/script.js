/* const choices */

const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

/* let choices */

let playerChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

/* function for all outcomes */

function getResult() {
    if (computerChoice === playerChoice) {
        result = 'Draw!'
    }

    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = 'Computer wins!'
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = 'Player wins!'
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = 'Computer wins!'
    }
     if (computerChoice === 'paper' && playerChoice === 'scissors') {
            result = 'Player wins!'
    }
    
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = 'Player wins!'
    }

    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = 'Computer wins!'
    }
    resultDisplay.innerHTML = result
  
}
