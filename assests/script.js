const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('computer-choice')

let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult

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

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!'
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Computer wins!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Player wins!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Computer wins!'
    }
     if (computerChoice === 'paper' && userChoice === 'scissors') {
            result = 'Player wins!'
    }
    
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Player wins!'
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Computer wins!'
    }
    resultDisplay.innerHTML = result
}
