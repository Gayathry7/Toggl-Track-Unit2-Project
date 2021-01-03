var input = document.querySelector('#timer__input')
var middle_photo = document.querySelector('.timer__middle')
var timer__arrow = document.querySelector('.timer__arrows')


var timerStart = document.getElementById('timer__start')
var timerStop = document.getElementById('timer__stop')


var hour = document.getElementById("hours")
var minute = document.getElementById("minutes")
var second = document.getElementById("seconds")

var hours = 0
var minutes = 00
var seconds = 00
var stop = false









function startTimer() {
    middle_photo.style.display = "none"
    timer__arrow.style.display = "none"
    timerStart.style.display = "none"
    timerStop.style.display = "block"

    var date1 = new Date();
    var day1 = date1.getDate();
    var month1 = date1.getMonth() + 1;
    var year1 = date1.getFullYear();
    var milliseconds1 = date1.getMilliseconds();
    var minutes1 = date1.getMinutes();
    var seconds1 = date1.getSeconds();

    console.log(milliseconds1, minutes1, seconds1);







    var timer = setInterval(function() {

        seconds = seconds + 01

        if (seconds >= 60) {
            minutes = minutes + 1
            seconds = 00
        }
        if (minutes > 59) {
            hours = hours + 1
            minutes = 00
        }

        if (stop == true) {
            clearInterval(timer)
            stop = false

            var date2 = new Date();
            var day2 = date2.getDate();
            var month2 = date2.getMonth() + 1;
            var year2 = date2.getFullYear();
            var time2 = date2.getTime();

            console.log(time2);

        }
        second.innerHTML = seconds
        minute.innerHTML = minutes + ": "
        hour.innerHTML = hours + ": "

    }, 1001);

}

function stopTimer() {
    stop = true;
    hours = 0
    minutes = 00
    seconds = -1

    hour.innerHTML = "0: ";
    minute.innerHTML = "00: ";
    second.innerHTML = "00";





    timerStart.style.display = "block"
    timerStop.style.display = "none"







}