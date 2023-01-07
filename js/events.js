import { elements } from "./elements.js";

export default function(
    { controls, timer, sound }
) {
    elements.btnPlay.addEventListener('click', () => {
        controls.playTimer()
        timer.countdown()
        sound.pressButton()
    })
    
    elements.btnPause.addEventListener('click', () => {
        controls.pauseTimer()
        timer.hold()
        sound.pressButton()
    })
    
    elements.btnStop.addEventListener('click', () =>{
        controls.reset()
        timer.resetTimer()
        sound.pressButton()
    })
    
    elements.btnSoundOn.addEventListener('click', () => {
        elements.btnSoundOn.classList.add('hide')
        elements.btnSoundOff.classList.remove('hide')
        sound.bgAudioStop()
    })
    
    elements.btnSoundOff.addEventListener('click', () => {
        elements.btnSoundOff.classList.add('hide')
        elements.btnSoundOn.classList.remove('hide')
        sound.bgAudioStart()
    })
    
    elements.btnConfigTime.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()
    
        if(!newMinutes){
            timer.reset()
            return
        }
        
        timer.updateDisplay(newMinutes, 0)
        timer.updateDisplay(newMinutes)
    })
    
}