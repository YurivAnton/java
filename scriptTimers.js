"use strict";
//308
/* setInterval(function () {
    console.log('+++');
}, 3000); */
//309
/* let i = 100;
setInterval(function () {
    console.log(--i);
}, 1000); */
//310
/* let i = 10;
let timerId = setInterval(function () {
    console.log(--i);
    if (i == 0) {
        clearInterval(timerId);
    }
}, 1000); */
//311
/* let start = document.querySelector('#start');

start.addEventListener('click', function func() {
    let i = 100;
    setInterval(function () {
        console.log(--i);
    }, 1000);
    this.removeEventListener('click', func);
}); */
//312
/* let i = 10;
let timerId;

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

function func() {
    timerId = setInterval(function () {
        console.log(--i);
        if (i == 0) {
            clearInterval(timerId);
        }
    }, 1000);
    start.removeEventListener('click', func);
}

start.addEventListener('click', func);

stop.addEventListener('click', function () {
    clearInterval(timerId);
    start.addEventListener('click', func);
}); */
//313
/* let elem = document.querySelector('#elem');

let intervalId = setInterval(function () {
    elem.value = Number(elem.value) - 1;
    if (elem.value == 0) {
        clearInterval(intervalId);
    }
}, 1000); */
//316
/* let start = document.querySelector('#start');
let elemP = document.querySelector('#elemP');

start.addEventListener('click', function () {
    setInterval(function () {
        elemP.innerHTML = Number(elemP.innerHTML) + 1;
    }, 1000);
}); */
//2
/* let start = document.querySelector('#start');
let elemP = document.querySelector('#elemP');

start.addEventListener('click', function () {
    let timerId = setInterval(function () {
        elemP.innerHTML = Number(elemP.innerHTML) - 1;

        if (elemP.innerHTML == 0) {
            clearInterval(timerId);
        }
    }, 1000);
}); */
//3
/* let num = document.querySelector('#num');
setInterval(function () {
    num.value = Number(num.value) * Number(num.value);
}, 1000); */
//4
/* let num = document.querySelector('#num');
let elemP = document.querySelector('#elemP');

num.addEventListener('blur', function () {
    elemP.innerHTML = num.value;
    let timerId = setInterval(function () {
        elemP.innerHTML--;
        if (elemP.innerHTML <= 0) {
            clearInterval(timerId);
        }

    }, 1000);
}); */
//5
/* let elem = document.querySelector('#elem');
let start = document.querySelector('#start');
let elemP = document.querySelector('#elemP');

start.addEventListener('click', function () {
    elemP.innerHTML = elem.value;
    let timerId = setInterval(function () {
        elemP.innerHTML--;
        if (elemP.innerHTML <= 0) {
            clearInterval(timerId);
        }
    }, 1000);
}) */
//6
/* let elemP = document.querySelector('#elemP');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

function func() {
    elemP.innerHTML = 1;
    timerId = setInterval(function () {
        elemP.innerHTML = Number(elemP.innerHTML) + Number(1);
    }, 1000);
    start.removeEventListener('click', func);
};

start.addEventListener('click', func);

stop.addEventListener('click', function () {
    clearInterval(timerId);
    start.addEventListener('click', func);
}) */
//7
/* let elemP = document.querySelector('#elemP');

setInterval(function () {
    if (elemP.classList.contains('red')) {
        elemP.classList.remove('red');
        elemP.classList.add('green');
    } else {
        elemP.classList.remove('green');
        elemP.classList.add('red');
    }
}, 1000); */
//8
/* let elemP = document.querySelector('#elemP');
setInterval(function () {
    let time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    elemP.innerHTML = h + ':' + m + ':' + s;
}, 1000); */
//317
//1
/* let elemP = document.querySelector('#elemP');

setTimeout(function () {
    elemP.innerHTML = '+++';
}, 10000); */
//2
/* let i = 0;
function timer() {
    setTimeout(function () {
        console.log(i);
        i++;
        timer();
    }, 1000);
};
timer(); */