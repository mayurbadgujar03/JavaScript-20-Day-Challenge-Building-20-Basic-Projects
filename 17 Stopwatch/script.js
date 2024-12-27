const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let counts = 0;


start.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

pause.addEventListener('click', function () {
    timer = false;
});

reset.addEventListener('click', function () {
    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    counts = 0;

    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("counts").innerText = "00";
});

function stopWatch() {

    if (timer) {

        counts++;

        if (counts == 100) {
            seconds++;
            counts = 0;
        }
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
            seconds = 0;
        }

        let stringHours = hours;
        let stringMinutes = minutes;
        let stringSeconds = seconds;
        let stringcounts = counts;


        document.getElementById("hours").innerText = stringHours;
        document.getElementById("minutes").innerText = stringMinutes;
        document.getElementById("seconds").innerText = stringSeconds;
        document.getElementById("counts").innerText = stringcounts;

        setTimeout(stopWatch, 10);
    }
}