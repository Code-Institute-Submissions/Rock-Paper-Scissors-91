const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const result = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice

possibleChoices.forEach(possibleChoices=> possibleChoices.addEventListener ('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice ()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor (Math.random() * 3)
    console.log (randomNumber)
}



