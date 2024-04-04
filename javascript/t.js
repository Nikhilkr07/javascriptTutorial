function startCountdown(duration, display) {
    var startTime = new Date().getTime();
    var storedStartTime = localStorage.getItem('startTime');
    if (storedStartTime) {
        startTime = parseInt(storedStartTime);
    }
    
    function timer() {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;
        var remainingTime = duration - Math.floor(elapsedTime / 1000);

        var minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        var seconds = remainingTime % 60;

        display.textContent = minutes + "m " + seconds + "s ";

        if (remainingTime <= 0) {
            clearInterval(interval);
            display.textContent = "Time's up!";
            // Additional actions to take when the time is up
        }
    }

    timer();
    var interval = setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 5 * 60; // Change the duration here if needed
    var display = document.querySelector('#time');
    startCountdown(fiveMinutes, display);
};