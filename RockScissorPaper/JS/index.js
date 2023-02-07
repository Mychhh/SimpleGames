// Elements Initialization
const computerChoiceDisplay = document.getElementById('display__computer-choice') 
const yourChoiceDisplay = document.getElementById('display__your-choice') 
const resultDisplay = document.getElementById('display__result') 
// UserP Pic'k
const userPick = document.getElementById('display__user-pick')
const computerPick = document.getElementById('display__computer-pick')

const buttonsRSP = document.querySelectorAll('.button')
const restartButton = document.getElementById('restart-button')

const yourScoreDisplay = document.getElementById('your-score')
const computerScoreDisplay = document.getElementById('computer-score')
const displayMessage = document.getElementById('display__message-box')

// Score Declaration
let userScore = 0
let computerScore = 0

// Choices Declaration
let userChoice
let userChoiceImgSrc
let computerChoice
let computerImgSrc
let result

// Adds event listener to all buttons and choose what choice they want
buttonsRSP.forEach(buttonRSP => buttonRSP.addEventListener('click', (e) => {
    userChoice = e.target.id

    yourChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    
    switch(userChoice){
        case 'Rock':
            userChoiceImgSrc = "./Img/Rock.png"
            break
        case 'Scissor':
            userChoiceImgSrc = "./Img/Scissor.png"
            break
        case 'Paper':
            userChoiceImgSrc = "./Img/Paper.png"
            break
    }
    userPick.src = userChoiceImgSrc

    // removes and adds class list to make an animation
    computerPick.classList.add('active_pick')
    userPick.classList.add('active_pick')

    // computerPick.classList.remove('active_pick')
    // userPick.classList.remove('active_pick')

    if(userScore === 5){
        displayMessage.innerHTML = 'You Win'
        DisabledButtons()
    }else if(computerScore === 5){
        displayMessage.innerHTML = 'Computer Win'
        DisabledButtons()
    }

}))

//Gets generated choice
const generateComputerChoice = () => {
    // Gets random number that will be used to get random choice
    const randomNumber = Math.floor(Math.random() * buttonsRSP.length)  + 1

    switch(randomNumber){
        case 1:
            computerChoice = 'Rock'
            computerImgSrc = "./Img/Rock.png"
            break
        case 2:
            computerChoice = 'Scissor'
            computerImgSrc = "./Img/Scissor.png"
            break
        case 3:
            computerChoice = 'Paper'
            computerImgSrc = "./Img/Paper.png"
            break
    }
    computerChoiceDisplay.innerHTML = computerChoice
    computerPick.src = computerImgSrc
}

//Gets the result of the game
const getResult = () => {
    if(userChoice === computerChoice){
        result = "It's a draw"
    }else if (userChoice === 'Rock' && computerChoice === 'Scissor'){
        result = "You win"
        userScore++
        yourScoreDisplay.innerHTML = userScore
    }else if (userChoice === 'Rock' && computerChoice === 'Paper'){
        result = "You lose"
        computerScore++
        computerScoreDisplay.innerHTML = computerScore
    }else if (userChoice === 'Scissor' && computerChoice === 'Paper'){
        result = "You win"
        userScore++
        yourScoreDisplay.innerHTML = userScore
    }else if (userChoice === 'Scissor' && computerChoice === 'Rock'){
        result = "You lose"
        computerScore++
        computerScoreDisplay.innerHTML = computerScore
    }else if (userChoice === 'Paper' && computerChoice === 'Rock'){
        result = "You win"
        userScore++
        yourScoreDisplay.innerHTML = userScore
    }else if (userChoice === 'Paper' && computerChoice === 'Scissor'){
        result = "You lose"
        computerScore++
        computerScoreDisplay.innerHTML = computerScore
    }
    resultDisplay.innerHTML = result
}

// Restart Button
restartButton.addEventListener('click', () => {
    userScore = 0
    computerScore = 0

    // Scores
    yourScoreDisplay.innerHTML = userScore
    computerScoreDisplay.innerHTML = computerScore
    // Image Pick
    computerPick.src = "./Img/Loader.png"
    userPick.src = "./Img/Loader.png"

    resultDisplay.innerHTML = "Pick a choice"
    computerChoiceDisplay.innerHTML = ""
    yourChoiceDisplay.innerHTML = ""
    displayMessage.innerHTML = ""

    EnabledButtons()
})

// Disabled button when theres a winner
const DisabledButtons = () => {
    buttonsRSP.forEach((buttonRSP, index) => {
        buttonRSP.disabled = true
    })
}

// Enabled buttons when restart or start of the game
const EnabledButtons = () => {
    buttonsRSP.forEach((buttonRSP, index) => {
        buttonRSP.disabled = false
    })
}
