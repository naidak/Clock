function showTime=()=> {
    var date = new Date();
    var hours = date.getHours(); // from 0 to 23
    var minutes = date.getMinutes(); // from 0 to 59
    var seconds = date.getSeconds(); // prom 0 to 59
    var session = 'AM';


    if (hours == 0) { hours = 12; }

    if (hours > 12) {
        hours = hours - 12;
        session = 'PM'
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = hours + ':' + minutes + ':' + seconds + ' ' + session;

    document.getElementById("MyClockDisplay").innerText = time;

    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

let white = false;
let ChangeTheme = () => {
    if (white) {
        document.body.style.backgroundColor = "#fff";
        white = false;
    } else {
        document.body.style.backgroundColor = "#000";
        document.getElementById('MyClockDisplay').style.color = "#05a9cd";
        white = true;
    }
}

showTime();
