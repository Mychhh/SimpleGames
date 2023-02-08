// Elements Initialization
const computerChoiceDisplay = document.getElementById('display__computer-choice') 
const yourChoiceDisplay = document.getElementById('display__your-choice') 
const resultDisplay = document.getElementById('display__result') 
// UserP Pic'k
const userPick = document.getElementById('display__user-pick')
const computerPick = document.getElementById('display__computer-pick')
const displayPick = document.querySelectorAll('.display__pick')

// Audio Button
const audioButton = document.querySelector('.audio__button')

const buttonsRSP = document.querySelectorAll('.button')
const restartButton = document.getElementById('restart-button')

const yourScoreDisplay = document.getElementById('your-score')
const computerScoreDisplay = document.getElementById('computer-score')
const displayMessage = document.getElementById('display__message-box')

// Winner and Loser audio
const winnerAudio = document.getElementById('winner_audio')
const loserAudio = document.getElementById('loser_audio')
// Background music
// const indexBackgroundMusic = document.getElementById('background_audio')

// Score Declaration
let userScore = 0
let computerScore = 0

let isGameStart = false

// Choices Declaration
let userChoice
let userChoiceImgSrc
let computerChoice
let computerImgSrc
let result

let isChosenClick = true

// Adds event listener to all buttons and choose what choice they want
buttonsRSP.forEach(buttonRSP => buttonRSP.addEventListener('click', (e) => {
    isGameStart = true
    // fadeOut Background music function from audio.js line 39
    fadeOutBackgroundMusic()
    pauseBackgroundMusicOnStart()

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

    if(userScore === 5){
        displayMessage.innerHTML = 'You Win'
        DisabledButtons()
        winnerAudio.play()
    }else if(computerScore === 5){
        displayMessage.innerHTML = 'Computer Win'
        DisabledButtons()
        loserAudio.play()
    }

    // Animation for display pic
    AnimationOnChosenPick()
    // JavaScript is Madman
    isChosenClick ? isChosenClick = !isChosenClick : isChosenClick = !isChosenClick
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

//Gets the result bato pick
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
    // Fade in Background music function from audio.js line 54
    fadeInBackgroundMusic()
    isGameStart = false
    audioButton.disabled = false

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

    // Animation for display pic
    AnimationOnChosenPick()
    // JavaScript is Madman
    isChosenClick ? isChosenClick = !isChosenClick : isChosenClick = !isChosenClick
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

// Animation for chosen pick
const AnimationOnChosenPick = () => {
    displayPick.forEach(displaypick => {
        if(isChosenClick){
            // removes and adds class list to make an animation
            displaypick.classList.remove("fadeInFirst")
            displaypick.classList.remove("fadeInSecond")
            displaypick.classList.add('fadeInSecond')
        }else{
            // removes and adds class list to make an animation
            displaypick.classList.remove("fadeInFirst")
            displaypick.classList.remove("fadeInSecond")
            displaypick.classList.add('fadeInFirst')
        }
    })
}

// pause background music on game start
const pauseBackgroundMusicOnStart = () => {
    if(isGameStart){
        audioButton.disabled = true
        backgroundMusicImage.src = "./Img/audio-off.svg"
        backgroundMusicImage.classList.remove('audio__button_img_activeNegative')
        backgroundMusicImage.classList.add('audio__button_img_activePositive')
    }
}