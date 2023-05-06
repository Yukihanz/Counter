<<<<<<< HEAD
=======
var data = new Date();

>>>>>>> ac6b1a50c8bcc46256bdfe5a5ff44ff5be7e32b5
var elemCentiseconds = document.getElementById('centiseconds');
var elemSeconds = document.getElementById('seconds');
var elemMinutes = document.getElementById('minutes');
var elemHours = document.getElementById('hours');
var startCounter = document.getElementById('start');
var stopCounter = document.getElementById('stop');
<<<<<<< HEAD
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
=======
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
>>>>>>> ac6b1a50c8bcc46256bdfe5a5ff44ff5be7e32b5
    var seconds = Math.floor(timeNow1/1000)
    seconds = seconds - Math.floor(timeNow1/60000)*60

    var minutes = Math.floor(timeNow1/60000)
    minutes = minutes - Math.floor(timeNow1/3600000)*60

    var hours = Math.floor(timeNow1/3600000)

    var centiseconds = timeNow1.toString().slice(-3,-1);


    if (hours < 10) {
<<<<<<< HEAD
        elemHours.innerHTML = '0' + hours;
=======
        elemHours.innerHTML = "0" + hours;
>>>>>>> ac6b1a50c8bcc46256bdfe5a5ff44ff5be7e32b5
    } else {
        elemHours.innerHTML = hours;
    }
    
    if (minutes < 10) {
<<<<<<< HEAD
        elemMinutes.innerHTML = '0' + minutes;
=======
        elemMinutes.innerHTML = "0" + minutes;
>>>>>>> ac6b1a50c8bcc46256bdfe5a5ff44ff5be7e32b5
    } else {
        elemMinutes.innerHTML = minutes;
    }

    if (seconds < 10) {
<<<<<<< HEAD
        elemSeconds.innerHTML = '0' + seconds;
=======
        elemSeconds.innerHTML = "0" + seconds;
>>>>>>> ac6b1a50c8bcc46256bdfe5a5ff44ff5be7e32b5
    } else {
        elemSeconds.innerHTML = seconds;
    }

    elemCentiseconds.innerHTML = centiseconds;
}

<<<<<<< HEAD
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
=======
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
>>>>>>> ac6b1a50c8bcc46256bdfe5a5ff44ff5be7e32b5
