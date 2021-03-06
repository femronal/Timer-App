const startButton     =  document.querySelector("#start")
const durationInput   =  document.querySelector("#duration")
const pauseButton     =  document.querySelector("#pause")
const circle          =  document.querySelector("circle")

const perimeter       =  circle.getAttribute("r") * 2  *  Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const femi = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute(
       "stroke-dashoffset", 
        perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete() {
        console.log("TIMER IS COMPLETED!")
    }
})