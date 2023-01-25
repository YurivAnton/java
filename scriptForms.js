"use strict";
//274
//1
/* let elem = document.querySelector('#elem');
let elemP = document.querySelector('#elemP');

elem.addEventListener('blur', function () {
    elemP.innerHTML = elem.value;
}) */

//275
//1, 2
/* let elem = document.querySelector('#elem');
let buttonDis = document.querySelector('#buttonDis');
let buttonEnab = document.querySelector('#buttonEnab');
buttonDis.addEventListener('click', function () {
    elem.disabled = true;
})
buttonEnab.addEventListener('click', function () {
    elem.disabled = false;
}) */
//3
/* let elem = document.querySelector('#elem');
let buttonCheck = document.querySelector('#buttonCheck');
buttonCheck.addEventListener('click', function () {
    alert(elem.disabled);
}) */
//276
//1
/* let elem = document.querySelector('#elem');
let buttonCheck = document.querySelector('#checked');
let buttonUncheck = document.querySelector('#unchecked');
buttonCheck.addEventListener('click', function () {
    elem.checked = true;
})
buttonUncheck.addEventListener('click', function () {
    elem.checked = false;
}) */
//2
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let elemP = document.querySelector('#elemP');

button.addEventListener('click', function () {
    if (elem.checked === true) {
        elemP.innerHTML = 'Hi!';
    }
    if (elem.checked === false) {
        elemP.innerHTML = 'Bye!';
    }
}) */
//277
//2
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.checked = !elem.checked;
}); */
//278
//1
//278
//1
/* let radios = document.querySelectorAll('input[type="radio"]');
let elemP = document.querySelector('#elemP');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    for (let radio of radios) {
        if (radio.checked) {
            elemP.innerHTML = radio.value;
        }
    }
}) */
//279
//1
/* let elem = document.querySelector('#elem');
let elemP = document.querySelector('#elemP');
elem.addEventListener('change', function () {
    elemP.innerHTML = elem.value;
}) */
//2
/* let check = document.querySelector('#check');
check.addEventListener('change', function () {
    console.log(check.checked);
}) */
//4
/* let elem = document.querySelector('#elem');
elem.addEventListener('change', function () {
    if (elem.value.length < 5) {
        elem.style.borderColor = 'green';
    } else {
        elem.style.borderColor = 'red';
    }
}) */
//280
//1
/* let elem = document.querySelector('#elem');
elem.addEventListener('input', function () {
    if (elem.value.length == 5) {
        alert('+++');
    }
}) */
//2
/* let elem = document.querySelector('#elem');
let elemP = document.querySelector('#elemP');

elem.addEventListener('input', function () {
    elemP.innerHTML = 5 - elem.value.length;
}) */
//281
//1
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

elem1.addEventListener('input', function () {
    if (elem1.value.length == 2) {
        elem2.focus();
    }
})
elem2.addEventListener('input', function () {
    if (elem2.value.length == 2) {
        elem2.blur();
    }
}) */
//282
//1
/*let select = document.querySelector('#select');
let elemP = document.querySelector('#elemP');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elemP.innerHTML = select.value;
})*/
//2
/*let select = document.querySelector('#select');
select.addEventListener('change', function(){
    let date = new Date(select.value, 1, 29);
    if(date.getDate() == 29){
        alert('+++');
    }
   // alert(date);
})*/
//3
/* let select = document.querySelector('#select');
select.addEventListener('change', function(){
    if(select.value == 6 || select.value == 7){
        alert('weekend');
    } else {
        alert('work day');
    }
}) */
//283
//1
/* let select = document.querySelector('#select');
let date = new Date();
for (let item of select) {
    if (item.value == date.getMonth()) {
        select.value = item.value;
    }
} */
//284
//1
/* let select = document.querySelector('#select');
let num = document.querySelector('#num');
num.addEventListener('blur', function () {
    for (let option of select) {
        if ((num.value - Number(1)) == option.value) {
            select.value = num.value - Number(1);
        }
    }
}) */
//2
/* let select = document.querySelector('#select');
let date = new Date();
for (let option of select) {
    if (option.value == date.getDay()) {
        select.value = option.value;
    }
} */
//285
//1
/* let select = document.querySelector('#select');
for (let option of select) {
    option.innerHTML += option.value;
} */
//286
//1, 2, 3, 4
/* let select = document.querySelector('#select');
let button = document.querySelector('#button');
let button1 = document.querySelector('#button1');
for (let option of select) {
    if (option.selected) {
        option.text += '!';
    } else {
        option.text += '?';
    }
}

button.addEventListener('click', function () {
    let option = select[select.length - 1];
    option.selected = true;
})

button1.addEventListener('click', function () {
    select[select.selectedIndex].text += '!';
    alert(select[select.selectedIndex].text);
}) */