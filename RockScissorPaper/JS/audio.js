//Background audio image
const backgroundMusicImage = document.querySelector('.audio__button_img')

// Background audio and button
const backgroundMusicButton = document.querySelector('.audio__button')
const backgroundMusic = document.getElementById('background_audio')

backgroundMusic.volume = 0.3
// backgroundMusic.duration - 2
const controlBackgroundMusic = () => {
    if(backgroundMusic.paused){
        backgroundMusic.volume = 0.3
        backgroundMusic.play()
        backgroundMusicImage.src = "./Img/audio-on.svg"
        backgroundMusicImage.classList.remove('audio__button_img_activePositive')
        backgroundMusicImage.classList.add('audio__button_img_activeNegative')
    }else{
        backgroundMusic.pause()
        backgroundMusicImage.src = "./Img/audio-off.svg"
        backgroundMusicImage.classList.remove('audio__button_img_activeNegative')
        backgroundMusicImage.classList.add('audio__button_img_activePositive')
    }
}

backgroundMusicButton.addEventListener('click', controlBackgroundMusic)

// Fade out background music
let number = 0.1
const testFunction = () =>{
    console.log(backgroundMusic.volume)
    if(backgroundMusic.volume <= 0.10000000000000014){
        clearInterval(audioFadeOut)
        backgroundMusic.pause()
    }else{
        backgroundMusic.volume -= number
    }
}

const fadeOutBackgroundMusic = () => {
    // The condition is from index.js line 24 and 25
    if(isGameStart)audioFadeOut = setInterval(testFunction, 1000)
}