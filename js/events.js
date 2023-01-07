import {  
    btnPlay,
    btnPause,
    btnStop,
    btnSoundOn,
    btnSoundOff,
    btnConfigTime
} from "./elements.js";

export default function(
    { controls, timer, sound }
) {
    btnPlay.addEventListener('click', () => {
        controls.playTimer()
        timer.countdown()
        sound.pressButton()
    })
    
    btnPause.addEventListener('click', () => {
        controls.pauseTimer()
        timer.hold()
        sound.pressButton()
    })
    
    btnStop.addEventListener('click', () =>{
        controls.reset()
        timer.resetTimer()
        sound.pressButton()
    })
    
    btnSoundOn.addEventListener('click', () => {
        btnSoundOn.classList.add('hide')
        btnSoundOff.classList.remove('hide')
        sound.bgAudioStart()
    })
    
    btnSoundOff.addEventListener('click', () => {
        btnSoundOff.classList.add('hide')
        btnSoundOn.classList.remove('hide')
        sound.bgAudioStop()
    })
    
    btnConfigTime.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()
    
        if(!newMinutes){
            timer.reset()
            return
        }
        
        timer.updateDisplay(newMinutes, 0)
        timer.updateDisplay(newMinutes)
    })
    
}