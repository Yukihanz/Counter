var seconds = 0;
var centiseconds = 0;
var interval = 0;
var elemSeconds = document.getElementById('seconds');
var elemCentiseconds = document.getElementById('centiseconds');
var startCounter = document.getElementById('start');
var stopCounter = document.getElementById('stop');

startCounter.onclick = function() {
    interval = setInterval(count, 10);
}

stopCounter.onclick = function() {
    clearInterval(interval);
    startCounter.innerHTML = 'RESUME';
}

function count() {
    centiseconds += 1;
    if (centiseconds > 99) {
        seconds += 1;
        centiseconds = 0;
    }
    elemSeconds.innerHTML = seconds;
    elemCentiseconds.innerHTML = centiseconds;
}