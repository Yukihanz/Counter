var elemCentiseconds = document.getElementById('centiseconds');
var elemSeconds = document.getElementById('seconds');
var elemMinutes = document.getElementById('minutes');
var elemHours = document.getElementById('hours');
var startCounter = document.getElementById('start');
var stopCounter = document.getElementById('stop');
var resetCounter = document.getElementById('reset');
var interval;
var timeRecover = 0;
var time1 = 0;
var timeNow1;

startCounter.onclick = function() {
    if (interval != undefined) {return} // ignore but don't change
    startCounter.innerHTML = 'RESUME';
    if (time1 == 0) {
        time1 = Date.now();
        interval = setInterval(count, 16);
    } else {
        time1 = time1 + (Date.now() - timeRecover);
        interval = setInterval(count, 16);
    }

}
function count() {
    timeNow1 = Date.now() - time1;
    //timeNow1 *= 1; //speed up for tests
    var seconds = Math.floor(timeNow1/1000)
    seconds = seconds - Math.floor(timeNow1/60000)*60

    var minutes = Math.floor(timeNow1/60000)
    minutes = minutes - Math.floor(timeNow1/3600000)*60

    var hours = Math.floor(timeNow1/3600000)

    var centiseconds = timeNow1.toString().slice(-3,-1);


    if (hours < 10) {
        elemHours.innerHTML = '0' + hours;
    } else {
        elemHours.innerHTML = hours;
    }
    
    if (minutes < 10) {
        elemMinutes.innerHTML = '0' + minutes;
    } else {
        elemMinutes.innerHTML = minutes;
    }

    if (seconds < 10) {
        elemSeconds.innerHTML = '0' + seconds;
    } else {
        elemSeconds.innerHTML = seconds;
    }

    elemCentiseconds.innerHTML = centiseconds;
}

stopCounter.onclick = function () {
    interval = clearInterval(interval);
    timeRecover = Date.now();
}

resetCounter.onclick = function() {
    interval = clearInterval(interval);
    time1 = 0;
    elemHours.innerHTML = '00'
    elemMinutes.innerHTML = '00'
    elemSeconds.innerHTML = '00'
    elemCentiseconds.innerHTML = '00'
    timeRecover = 0
}