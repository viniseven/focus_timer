import Controls from "./controls.js";
import Timer from "./timer.js";
import { elements } from "./elements.js";
import Sounds from "./sounds.js";
import Events from "./events.js"

const {
    btnPlay,
    btnPause,
    btnConfigTime,
    btnStop,
    secondsDisplay,
    minutesDisplay
} = elements

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
})

const sound = Sounds()

Events({controls, timer, sound})





