 export default function Controls({
    btnPause,
    btnPlay,
    btnConfigTime,
    btnStop
 }){

    function playTimer(){
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
        btnConfigTime.classList.add('hide')
        btnStop.classList.remove('hide')
    }

    function pauseTimer(){
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
    }


    function reset(){
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
        btnStop.classList.add('hide')
        btnConfigTime.classList.remove('hide')
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos minutos?')
        if(!newMinutes){
            return false
        }

        return newMinutes
    }
        return{
            reset,
            playTimer,
            pauseTimer,
            getMinutes
        }
 }
 
 


