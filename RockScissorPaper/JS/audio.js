//Background audio image
const backgroundMusicImage = document.querySelector('.audio__button_img')

// Background audio and button
const backgroundMusicButton = document.querySelector('.audio__button')
const backgroundMusic = document.getElementById('background_audio')

backgroundMusic.volume = 0.3
backgroundMusic.duration - 2
const controlBackgroundMusic = () => {
    if(backgroundMusic.paused){
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
