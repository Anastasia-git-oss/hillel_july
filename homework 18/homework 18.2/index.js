
let time = 87;
const timer = document.querySelector('h2');


function showTime(time) {
   let min = Math.floor(time / 60);
   let sec = time % 60;
   if (sec < 10 ) {
    sec = '0' + sec;
   }
   return min + ':' + sec;
}



let interval = setInterval(function runTime() {
     time--;
    if (time >= 0) {
        timer.textContent = showTime(time);
    }else{
        clearInterval(interval);
    }

}, 1000);
