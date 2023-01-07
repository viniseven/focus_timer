import Controls from "./controls.js";
import Timer from "./timer.js";


const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnConfigTime = document.querySelector('.set');
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    btnPause,
    btnPlay,
    btnConfigTime,
    btnStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes
})

btnPlay.addEventListener('click', () => {
    controls.playTimer()
    timer.countdown()
})

btnPause.addEventListener('click', () => {
    controls.pauseTimer()
    timer.hold()
})

btnStop.addEventListener('click', () =>{
    controls.reset()
    timer.resetTimer()
})

btnSoundOn.addEventListener('click', () => {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')
})

btnSoundOff.addEventListener('click', () => {
    btnSoundOff.classList.add('hide')
    btnSoundOn.classList.remove('hide')
})

btnConfigTime.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if(!newMinutes){
        timer.reset()
        return
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
    timer.updateMinutes(minutes)
})





