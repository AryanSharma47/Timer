const progressBar = document.getElementById('progress-bar');
const Start = document.getElementById('start');
const Pause = document.getElementById('pause');
const Reset = document.getElementById('reset');
let timer = document.getElementById('time-input');
const timerDisplay = document.getElementById('timer-display');

let progress = 0;
let maxProgress = 100;
let interval;
let remainingTime;
let isPaused = false;

function update()
{
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    timerDisplay.innerHTML = `${minutes} : ${seconds}`;
}

function increase() {
    let Time = parseInt(timer.value);
    if (progress < maxProgress) {
        remainingTime--;
        update();
        progress += 100 / (Time * 60); 
        progressBar.style.width = `${progress}%`;
    } 
    else
    clearInterval(interval);
}

Start.addEventListener('click',()=>{
    if(!isPaused)
    {
        progressBar.style.width = 0;
        remainingTime = parseInt(timer.value)*60; 
        isPaused = false;
    }

    clearInterval(interval);
    update(); 
    interval = setInterval(increase,1000);
    
})

Pause.addEventListener('click',()=>{
    clearInterval(interval);
    isPaused = true;
})

Reset.addEventListener('click',()=>{
    progress = 0;
    remainingTime = parseInt(timer.value)*60;
    update();
    clearInterval(interval);
    progressBar.style.width=`${progress}%`;
    update();
})