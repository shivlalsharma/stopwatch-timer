const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let msec = 0;
let sec = 0;
let min = 0;

let timeid = null;

const displayTime = ()=>{
   msec++
    if(msec==100){
        msec = 0;
        sec++;
        if(sec==60){
            sec = 0;
            min++;
        }
    }
    
    let ms = msec < 10 ? '0'+ msec : msec ;
    let s = sec < 10 ? '0' + sec : sec ;
    let mi = min < 10 ? '0' + min : min ;

    time.innerText = mi + ' : ' + s + ' : ' + ms ;
}

start.addEventListener('click',()=>{
    if(timeid !== null){
        clearInterval(timeid);
    }
    timeid = setInterval(displayTime,10);
});

stop.addEventListener('click',()=>{
    clearInterval(timeid);
});

reset.addEventListener('click',()=>{
    clearInterval(timeid);
    time.innerText = '00 : 00 : 00';
    msec = sec = min = 0;
});