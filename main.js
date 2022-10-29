// let _time = setInterval(function () {
//
//     let date = new Date();
//     let actual = document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
//     if (date < 10){let date = '0' + date;}
//
//     }
//     ,1000);

// const timer = document.querySelector('#time');
// let start = 59; // minutes
// let second = start * 60; // seconds
// let min = 0;
//
// const timerId = setInterval(() => {
//     console.log(second);
//     const parseSec = Math.floor(second % 60);
//     const parseMin = Math.floor( second / 60);
//     const parseHour = Math.floor(second / 3600);
//     const formSec = `${parseSec < 10 ? '0' : ''}${parseSec}`;
//     const formMin = `${parseMin < 10 ? '0' : ''}${parseMin}`;
//     const formHour = `${parseHour < 10 ? '0' : ''}${parseHour}`;
//     if (+parseMin>=60){
//         parseMin=0;
//     }
//     timer.innerHTML = `${formHour} : ${formMin} : ${formSec}`;
//     ++second;
//
//
//
// }, 1000);

// let h1 = document.getElementsByTagName('h1');
// let start = document.getElementById('start');
// let stop = document.getElementById('stp');
// let reset = document.getElementById('rst');
// let sec = 0;
// let min = 0;
// let hrs = 0;
// let t;
//
// function tick(){
//     sec++;
//     if (sec >= 60) {
//         sec = 0;
//         min++;
//         if (min >= 60) {
//             min = 0;
//             hrs++;
//         }
//     }
// }
// function add() {
//     tick();
//     h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
//         + ":" + (min > 9 ? min : "0" + min)
//         + ":" + (sec > 9 ? sec : "0" + sec);
//     timer();
// }
// function timer() {
//     t = setTimeout(add, 1000);
// }
//
// timer();
// start.onclick = timer;
// stop.onclick = function() {
//     clearTimeout(t);
// }
// reset.onclick = function() {
//     h1.textContent = "00:00:00";
//     sec = 0; min = 0; hrs = 0;
// }

window.onload = () => {
    StartStop();
}

//объявляем переменные
let base = 60;
let clocktimer, dateObj, dh, dm, ds, ms;
let readout = '';
    h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;

//функция для очистки поля
function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00';
    document.MyForm.stopwatch.value = readout;
}

//функция для старта секундомера
function StartTIME() {
    let cdateObj = new Date();
    let t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
        s++;
    }
    if (s >= (m * base)) {
        ts = 0;
        m++;
    } else {
        ts = parseInt((ms / 100) + s);
        if (ts >= base) {
            ts = ts - ((m - 1) * base);
        }
    }
    if (m > (h * base)) {
        tm = 1;
        h++;
    } else {
        tm = parseInt((ms / 100) + m);
        if (tm >= base) {
            tm = tm - ((h - 1) * base);
        }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
        ms = 0;
    }
    if (ms === 0) {
        ms = '00';
    }
    if (ms > 0 && ms <= 9) {
        ms = '0' + ms;
    }
    if (ts > 0) {
        ds = ts;
        if (ts < 10) {
            ds = '0' + ts;
        }
    } else {
        ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
        if (dm < 10) {
            dm = '0' + dm;
        }
    } else {
        dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
        if (dh < 10) {
            dh = '0' + dh;
        }
    } else {
        dh = '00';
    }
    readout = dh + ':' + dm + ':' + ds;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
}

//Функция запуска и остановки
function StartStop() {
    if (init === 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
    } else {
        clearTimeout(clocktimer);
        init = 0;
    }
}






