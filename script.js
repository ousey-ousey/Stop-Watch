let [seconds,minets,hours] = [0,0,0]
let timer = document.getElementById("timer")
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let timing = null

function stopwatch (){
    seconds++
    if(seconds == 60){
        seconds = 0; 
        minets ++;
        if(minets == 60){
            minets = 0; 
            hours ++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minets < 10 ? "0" + minets : minets
    let s = seconds < 10 ? "0" + seconds : seconds
    timer.innerHTML = `${h} : ${m} : ${s}`
}
function watchstart(){
    if(timing != null){
        clearInterval(timing)
    }
    timing = setInterval(stopwatch,1)
}
function watchStop(){
    clearInterval(timing)
}
function watchReset() {
    clearInterval(timing);
    [hours, minets, seconds] = [0, 0, 0]; // Corrected variable names
    timer.innerHTML = `00 : 00 : 00 `;
}
