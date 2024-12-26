const eventDate = document.getElementById("event-date");
const resetButton = document.getElementById("resetTimer");

let x;

eventDate.oninput = function () {
    let dateinput = new Date(eventDate.value).getTime();
    document.getElementById("msg").innerHTML = "";

    clearInterval(x);

    x = setInterval(() => {
        let now = new Date().getTime();
        let difference = dateinput - now;

        document.getElementById("days").innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerHTML = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerHTML = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference < 0) {
            clearInterval(x);
            document.getElementById("msg").innerHTML = "EXPIRED! Reset and enjoy AGAIN";

            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            eventDate.value = "";
        }
    }, 1000);
}
resetButton.addEventListener("click", () => {
    clearInterval(x);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("msg").innerHTML = "";
    eventDate.value = "";
});