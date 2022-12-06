let btnPlay = document.querySelector('.play');
let btnPause = document.querySelector('.pause');
let btnSet = document.querySelector('.set');
let btnStop = document.querySelector('.stop');



btnPlay.addEventListener('click', () => {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')

    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
})

btnPause.addEventListener('click', () => {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
})

btnStop.addEventListener('click', () =>{
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
})





