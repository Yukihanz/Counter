var data = new Date();

var elemCentiseconds = document.getElementById('centiseconds');
var elemSeconds = document.getElementById('seconds');
var elemMinutes = document.getElementById('minutes');
var elemHours = document.getElementById('hours');
var startCounter = document.getElementById('start');
var stopCounter = document.getElementById('stop');
var interval;

var time1 = 0;
startCounter.onclick = function() {
    time1 = Date.now();
    interval = setInterval(count, 16);
}

stopCounter.onclick = function () {
    
}

function count() {
    var timeNow1 = Date.now() - time1;
    timeNow1 *= 60; //speed up for tests
    var seconds = Math.floor(timeNow1/1000)
    seconds = seconds - Math.floor(timeNow1/60000)*60

    var minutes = Math.floor(timeNow1/60000)
    minutes = minutes - Math.floor(timeNow1/3600000)*60

    var hours = Math.floor(timeNow1/3600000)

    var centiseconds = timeNow1.toString().slice(-3,-1);


    if (hours < 10) {
        elemHours.innerHTML = "0" + hours;
    } else {
        elemHours.innerHTML = hours;
    }
    
    if (minutes < 10) {
        elemMinutes.innerHTML = "0" + minutes;
    } else {
        elemMinutes.innerHTML = minutes;
    }

    if (seconds < 10) {
        elemSeconds.innerHTML = "0" + seconds;
    } else {
        elemSeconds.innerHTML = seconds;
    }

    elemCentiseconds.innerHTML = centiseconds;
}

/*var seconds = 0;
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
}*/