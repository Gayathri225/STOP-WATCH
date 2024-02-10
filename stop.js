console.log("JS WORKING");

const span = document.getElementsByTagName("span");
console.log(span);

let millisecs = 0;
let sec = 0;
let min = 0;
let hours = 0;

let id;
function start() {
    id = setInterval(() => {
        console.log(millisecs, sec, min, hours);
        millisecs += 1;
        if (millisecs == 1000) {
            millisecs = 0;
            sec += 1;
        }
        if (sec == 60) {
            sec = 0;
            min += 1;
        }
        if (min == 60) {
            min = 0;
            hours += 1;
        }
        if (hours == 24) {
            hours = 0;
        }
        span[0].textContent = hours.toString().padStart(2, 0);
        span[1].textContent = min.toString().padStart(2, 0);
        span[2].textContent = sec.toString().padStart(2, 0);
        span[3].textContent = millisecs.toString().padStart(4, 0);
    }, 100)
}


function stop() {
    clearInterval(id);
}

function reset() {
    clearInterval(id);
    millisecs = 0;
    sec = 0;
    min = 0;
    hours = 0;
    span[0].textContent = hours.toString().padStart(2, 0);
    span[1].textContent = min.toString().padStart(2, 0);
    span[2].textContent = sec.toString().padStart(2, 0);
    span[3].textContent = millisecs.toString().padStart(4, 0);
}