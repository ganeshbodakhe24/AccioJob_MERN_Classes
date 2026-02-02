let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let minutesTime=0;
let hoursTime=0;
let secondsTime=59;
let startTimerId;
function changeCounter(){
    hours.innerText=hoursTime;
    minutes.innerText=minutesTime;
    seconds.innerText=secondsTime;
}

function resetCounter(){
    minutesTime=0;
    hoursTime=0;
    secondsTime=0;
    changeCounter();
}

// resetCounter();

function startStopWatch(){
   startTimerId= setInterval(()=>{
    if(secondsTime>=60){
        secondsTime=0;
        minutesTime++;
    }
    if(minutesTime>=60){
        minutesTime=0;
        hoursTime++;
    }
    secondsTime++;
    changeCounter();
   },1000)
}
start.addEventListener("click",()=>{
    startStopWatch();
});
stop.addEventListener("click",()=>{
    clearInterval(startTimerId);
});
reset.addEventListener("click",()=>{
    resetCounter();
});