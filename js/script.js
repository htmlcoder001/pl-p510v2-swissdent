var time = 1800;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    mins = mins >= 10 ? mins : "0" + mins;
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html(mins);
    $("#sec").html(secs);
}
start_timer()