"use strict";
//241
/*
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
console.log(elem1);
console.log(elem2);
console.log(elem3);

let elem = document.querySelector('#block p');
console.log(elem);
let elem1 = document.querySelector('.block p');
console.log(elem1);
let elem2 = document.querySelector('.www');
console.log(elem2);

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button1.addEventListener('click', function () {
    alert('1');
})
button2.addEventListener('click', function () {
    alert('2');
})
button3.addEventListener('click', function () {
    alert('3');
})
 */
//243
/*
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
function func1() {
    console.log(1);
}

function func2() {
    console.log(2);
}
 */
//244
/*
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);
function func() {
    console.log('message');
}
 */
//245
/*
let p = document.querySelector('#elem');
p.addEventListener('click', func1);
p.addEventListener('click', func2);
p.addEventListener('click', func3);
function func1() {
    console.log('1');
}

function func2() {
    console.log('2');
}

function func3() {
    console.log('3');
}
 */
//246
/*
let button = document.querySelector('#button');
button.addEventListener('dblclick', function () {
    console.log('double click');
})
button.addEventListener('mouseover', function () {
    console.log('mouse over');
})
button.addEventListener('mouseout', function () {
    console.log('mouse out');
})
 */
//247
/*
let text = document.querySelector('#text');
let elemP = document.querySelector('#elemP');
let elemP1 = document.querySelector('#elemP1');
let elemP2 = document.querySelector('#elemP2');
let sum = document.querySelector('#sum');
let button = document.querySelector('#button');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button.addEventListener('click', function () {
    console.log(elemP.textContent);
})

button.addEventListener('click', function () {
    elemP.textContent = 'new text';
})

button.addEventListener('click', function () {
    let num1 = Number(elemP.textContent);
    let num2 = Number(elemP1.textContent);
    console.log(num1 + num2);
})

button.addEventListener('click', function () {
    let num1 = Number(elemP.textContent);
    let num2 = Number(elemP1.textContent);
    let num3 = Number(elemP2.textContent);
    sum.textContent = num1 + num2 + num3;
})
button1.addEventListener('click', function () {
    let num1 = Number(elemP.textContent) + 1;
    elemP.textContent = num1;
})
button2.addEventListener('click', function () {
    text.textContent += '!';
})
 */
//248
/*
let elem = document.querySelector('#elem');
let elemText = document.querySelector('#text');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(elem.innerHTML);
})
button.addEventListener('click', function () {
    elemText.innerHTML = '<b>Anton</b>';
})
 */
//249
/*
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let link = document.querySelector('#link');
let elemP = document.querySelector('#elemP');
let button3 = document.querySelector('#button3');
let elemP1 = document.querySelector('#elemP1');
let img = document.querySelector('#img');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
let button7 = document.querySelector('#button7');

button.addEventListener('click', function () {
    console.log(elem.type);
})
button1.addEventListener('click', function () {
    elem.type = 'submit';
})
button2.addEventListener('click', function () {
    elem.type = 'email';
})
button3.addEventListener('click', function () {
    elemP.textContent = link.href;
})
button3.addEventListener('click', function () {
    link.textContent = '(' + link.href + ')';
})
button4.addEventListener('click', function () {
    elemP1.textContent = img.src;
})
button4.addEventListener('click', function () {
    img.width = 300;
})
button5.addEventListener('click', function () {
    img.width *= 2;
})
button6.addEventListener('click', function () {
    img.src = 'img/1.png';
})
button7.addEventListener('click', function () {
    img.src = 'img/2.png';
})
 */
//250
/*
let button = document.querySelector('#button');
let button1 = document.querySelector('#button1');
let elem = document.querySelector('#elem');
let number = document.querySelector('#number');
let getSquare = document.querySelector('#getSquare');
let numberSquare = document.querySelector('#numberSquare');

button1.addEventListener('click', function () {
    button.value = 'new text';
    elem.textContent = button.value;
})
getSquare.addEventListener('click', function () {
    numberSquare.value = number.value * number.value;
})


let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let change = document.querySelector('#change');

change.addEventListener('click', function () {
    let value1 = input1.value;
    let value2 = input2.value
    input2.value = value1;
    input1.value = value2;
})
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let num5 = document.querySelector('#num5');
let avg = document.querySelector('#avg');
let res = document.querySelector('#res');

avg.addEventListener('click', function () {
    res.textContent = (Number(num1.value) + Number(num2.value) + Number(num3.value) + Number(num4.value) + Number(num5.value)) / 5;
})
 */
//251
/*
let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');

elem.addEventListener('focus', function () {
    elem.value = '1';
})
elem.addEventListener('blur', function () {
    elem.value = '2';
})
elem1.addEventListener('focus', function () {
    elem1.value = '';
})
elem1.addEventListener('blur', function () {
    alert('square is: ' + elem1.value ** 2);
})
 */
//252
/*
let elem2 = document.querySelector('#elem2');
let elem1 = document.querySelector('#elem1');
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    console.log(elem.className);
    elem1.className = 'asd';
    let arr = elem2.className.split(' ');
    console.log(arr);
})
 */
//253
/*
console.log(document.querySelector('#image').src);
 */
//254
/*
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

elem.addEventListener('focus', function () {
    this.value = 1;
})
elem.addEventListener('blur', function () {
    this.value = 2;
})
button.addEventListener('click', function () {
    let value = Number(this.value);
    this.value = ++value;
})
 */
//255
/*
let elemP1 = document.querySelector('#elemP1');
let elemP2 = document.querySelector('#elemP2');
let elemP3 = document.querySelector('#elemP3');
let elemP4 = document.querySelector('#elemP4');
let elemP5 = document.querySelector('#elemP5');

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

function func() {
    this.textContent += '!';
}

function getSquare() {
    this.value = this.value ** 2;
}
elemP1.addEventListener('click', func);
elemP2.addEventListener('click', func);
elemP3.addEventListener('click', func);
elemP4.addEventListener('click', func);
elemP5.addEventListener('click', func);

elem1.addEventListener('blur', getSquare);
elem2.addEventListener('blur', getSquare);
elem3.addEventListener('blur', getSquare);
 */
//256
/*
let elems = document.querySelectorAll('#elemP');
let button = document.querySelector('#button');

let nums = document.querySelectorAll('#num');
let elemP1 = document.querySelector('#elemP1');
let sum = document.querySelector('#sum');

button.addEventListener('click', function () {
    for (let elem of elems) {
        elem.textContent = 'text';
    }
})

button.addEventListener('click', function () {
    elems.forEach(function (item, index) {
        item.textContent += index;
    })
})
sum.addEventListener('click', function () {
    let sum = 0;
    for (let num of nums) {
        sum += Number(num.value);
    }
    elemP1.textContent = sum;
})
 */
//257
/*
let inputs = document.querySelectorAll('input');
let elems = document.querySelectorAll('p');
function func1() {
    this.textContent = this.textContent ** 2;
}
for (let elem of elems) {
    elem.addEventListener('click', func1);
}
for (let input of inputs) {
    input.addEventListener('blur', func);
}
function func() {
    this.value = Number(this.value) + 1;
}
 */
//258
/*
let divs = document.querySelectorAll('div');

for (let div of divs) {
    div.addEventListener('click', function () {
        this.textContent++;
    });
}
 */
//259
/*
let link = document.querySelector('#link');
let num1 = document.querySelector('#num1');

num1.addEventListener('click', func1);
function func1() {
    num1.value = Number(num1.value) + 1;
    if (num1.value >= 10) {
        num1.removeEventListener('click', func1);
    }
}

link.addEventListener('click', func);
function func() {
    link.textContent += '(' + link.href + ')';
    link.removeEventListener('click', func);
}
 */
//260
/*
let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', func);
}

function func() {
    this.textContent += '!';
    this.removeEventListener('click', func);
}
 */
//261
/*
let items = document.querySelectorAll('li');
for (let item of items) {
    item.addEventListener('click', function func() {
        this.textContent++;
        if (this.textContent >= 10) {
            this.removeEventListener('click', func);
        }
    })
}
 */
//262
/*
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value);

let elem1 = document.querySelector('#elem1');
let value1 = elem1.getAttribute('class');
console.log(value1);

let elem2 = document.querySelector('#elem2');
elem2.setAttribute('value', 'text');

let elem3 = document.querySelector('#elem3');
elem3.setAttribute('value', 'valid');

let elem4 = document.querySelector('#elem4');
elem4.removeAttribute('value');

let elem5 = document.querySelector('#elem5');
console.log(elem5.hasAttribute('value'));
 */
//263
/*
let elem = document.querySelector('#elem');
let length = elem.classList.length;
console.log(length);
for (let i = 0; i < length; i++) {
    document.write(elem.classList[i] + '<br>');
}
elem.classList.add('xxx');
elem.classList.remove('zzz');
console.log(elem.classList.contains('ggg'));
elem.classList.toggle('www');
 */
//264
/*
let elem = document.querySelector('#elem');
let li = document.querySelectorAll('li');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.style.backgroundColor = 'red';
    elem.style.paddingTop = '50px';
    elem.style.textAlign = 'center';
    elem.style.fontSize = '20px';
    elem.style.width = '200px';
    elem.style.height = '200px';
    elem.style.border = '1px solid black';

    for (let elem of li) {
        elem.style.cssFloat = 'left';
    }
})
 */
//265
/*
let elem = document.querySelector('#elemP');
let button = document.querySelector('#button');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button.addEventListener('click', function () {
    elem.classList.toggle('through');
})
button1.addEventListener('click', function () {
    elem.classList.toggle('weight');
})
button2.addEventListener('click', function () {
    elem.classList.toggle('colored');
})
 */
//266
/*
let elem = document.querySelector('#elem');
let firstElem = elem.firstElementChild.innerHTML;
let elems = elem.children;

console.log(elem.firstElementChild);
console.log(elem.lastElementChild);
for (let item of elems) {
    item.textContent += '!';
}

let elem1 = document.querySelector('#elem1');
elem1.parentElement.style.border = '1px solid black';

let elem2 = document.querySelector('#elem2');
let parent = elem2.closest('div');
console.log(parent);

let elem3 = document.querySelector('#elem3');
let parent3 = elem3.closest('.www');
console.log(parent3);

let elem4 = document.querySelector('#elem4');
let previousSibling = elem4.previousElementSibling;
let nextSibling = elem4.nextElementSibling;
let secondSibling = nextSibling.nextElementSibling;

previousSibling.textContent += '!';
nextSibling.textContent += '!';
secondSibling.textContent += '!';

let next = nextSibling.textContent;
let prex = previousSibling.textContent;
nextSibling.textContent = prex;
previousSibling.textContent = next;
 */
//267
/*
let elem = document.getElementById('elem');
elem.textContent = 'asd';

let listItems = document.getElementsByTagName('li');
for (let item of listItems) {
    console.log(item.classList.add('colored'));
}

let elems = document.getElementsByClassName('www');
for (let item of elems) {
    item.classList.add('colored');
}
 */
//268
/*
let parent = document.querySelector('#parent');
let elems1 = parent.querySelectorAll('.www');
let elems2 = parent.querySelectorAll('.ggg');
console.log(elems1);
console.log(elems2);
 */
//269
/*
let elem = document.querySelector('#elem');
elem.addEventListener('click', function func() {
    elem.textContent += elem.dataset.text;
    elem.removeEventListener('click', func);
})

let elem1 = document.getElementsByTagName('div');
for (let item of elem1) {
    if (item.dataset.num) {
        item.addEventListener('click', function func() {
            item.textContent += item.dataset.num;
            item.removeEventListener('click', func);
        })
    }
}

let button = document.querySelector('#button');
let button1 = document.querySelector('#button1');
let counter = document.querySelector('#counter');

button.addEventListener('click', function () {
    button.dataset.count++
})
button1.addEventListener('click', function () {
    counter.textContent = button.dataset.count;
})

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('blur', function () {
    if (elem2.value.length < elem2.dataset.length) {
        alert('to short');
    }
})

let elem3 = document.querySelector('#elem3');
elem3.addEventListener('blur', function () {
    if (elem3.value.length < elem3.dataset.min || elem3.value.length > elem3.dataset.max) {
        alert('---');
    }
})

let elem4 = document.querySelector('#elem4');
elem4.addEventListener('click', function () {
    elem4.textContent += (elem4.dataset.productPrice * elem4.dataset.productAmount);
})

let items = document.querySelectorAll('p');
items.forEach(function (item, index) {
    item.setAttribute('data-num', index + 1);
})
 */
//273
/* 
let elem = document.querySelector('#elem');
let elemP = document.querySelector('#elemP');
elem.addEventListener('blur', function () {
    elemP.innerHTML = elem.value;
})
 */
/* let nums = document.querySelectorAll('input');
let button = document.querySelector('#button');
let elemP = document.querySelector('#elemP');

button.addEventListener('click', function func() {
    let sum = 0;
    for (let num of nums) {
        if (!isNaN(num.value)) {
            sum += Number(num.value);
        }
    }
    elemP.innerHTML = sum;
}) */
/* let num = document.querySelector('#num');

num.addEventListener('blur', function () {
    let sum = 0;
    let str = String(num.value);
    for (let i = 0; i < str.length; i++) {
        sum += +str[i];
    }
    num.value = sum;
}) */
/* let num = document.querySelector('#num');

num.addEventListener('blur', function () {
    let sum = 0;
    let arr = num.value.split(',');
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }
    num.value = sum / arr.length;
}) */
/* let fio = document.querySelector('#fio');
let firstName = document.querySelector('#firstName');
let nam = document.querySelector('#name');
let surname = document.querySelector('#surname');

fio.addEventListener('blur', function () {
    let arr = fio.value.split(' ');
    firstName.value = arr[0];
    nam.value = arr[1];
    surname.value = arr[2];
}) */
/* let fio = document.querySelector('#fio');
fio.addEventListener('blur', function () {
    let arr = fio.value.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
    fio.value = arr.join(' ');
}) */
/* let text = document.querySelector('#text');
text.addEventListener('blur', function () {
    if (text.value != '') {
        console.log(text.value.split(' ').length);
    }
}) */
/* let date = document.querySelector('#date');
date.addEventListener('blur', function () {
    if (date.value != '') {
        date.value = date.value.split('.').reverse().join('-');
    }
}) */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    if (elem.value === elem.value.split('').reverse().join('')) {
        alert('+++');
    }
}) */
/* let number = document.querySelector('#number');

number.addEventListener('blur', function () {
    let arr = number.value.split('');
    let check = arr.some(function (elem) {
        if (elem == 3) {
            return '+++';
        }
    })
    alert(check);
}) */
/* let elems = document.querySelectorAll('p');
let button = document.querySelector('#button');

button.addEventListener('click', function func() {
    elems.forEach(function (element, index) {
        element.textContent += index;
    });
    button.removeEventListener('click', func);
}) */
/* let links = document.querySelectorAll('a');

for (let link of links) {
    link.innerHTML += ' (' + link.href + ')';
} */
/* let links = document.querySelectorAll('a');
for (let link of links) {
    if (link.href.startsWith('http://')) {
        link.innerHTML += "&rarr;";
    }
} */
/* let elems = document.querySelectorAll('p');
let elemp1 = document.querySelector('#elemP1');
let elemp2 = document.querySelector('#elemP2');
let elemp3 = document.querySelector('#elemP3');

elemp1.addEventListener('click', func);
elemp2.addEventListener('click', func);
elemp3.addEventListener('click', func);

function func() {
    this.innerHTML = this.innerHTML ** 2;
} */
/* let elem = document.querySelector('#elem');
let days = ['ned', 'pon', 'viv', 'ser', 'chet', 'piat', 'sub'];

elem.addEventListener('blur', function () {
    let arr = elem.value.split('.');
    let date = new Date(arr[2], arr[1] - 1, arr[0]);
    console.log(days[date.getDay()]);
}) */
/* let num = document.querySelector('#num');
let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');

increase.addEventListener('click', function () {
    num.value++;
})
decrease.addEventListener('click', function () {
    num.value--;
}) */
/* let counter = document.querySelector('#counter');
let elemP1 = document.querySelector('#elemP1');
let elemP2 = document.querySelector('#elemP2');
let elemP3 = document.querySelector('#elemP3');
let elemP4 = document.querySelector('#elemP4');

function count() {
    counter.value++;
}
elemP1.addEventListener('click', count);
elemP2.addEventListener('click', count);
elemP3.addEventListener('click', count);
elemP4.addEventListener('click', count); */

/* let elems = document.querySelectorAll('div');
for (let elem of elems) {
    elem.innerHTML = elem.innerHTML.slice(0, 10) + '...';
} */

/* let num = document.querySelector('#num');
num.addEventListener('blur', function () {
    if (num.value > 0 && num.value <= 10) {
        num.classList.add('colored');
    } else {
        num.classList.add('alert');
    }
}) */

/* let generate = document.querySelector('#generate');
let str = document.querySelector('#str');
let s = 'qwertyuiopasdfghjklzxcvbnm';

generate.addEventListener('click', function () {
    let strResult = '';
    for (let i = 0; i < 5; i++) {
        strResult += s[(Math.floor(Math.random() * (s.length + 1)))];
    }
    str.value = strResult.slice(0, 5);
}) */

/* let str = document.querySelector('#str');
let shufle = document.querySelector('#shufle');

shufle.addEventListener('click', function func() {
    let newStr = [];
    let length = str.value.length;
    let strin = str.value;

    for (let i = 0; i < length; i++) {
        let num = Math.floor(Math.random() * length + 1);
        newStr[i] = strin[num - 1];
    }
    str.value = newStr.join('');
    shufle.removeEventListener('click', func);
}) */

/* let tempFareng = document.querySelector('#tempFareng');
let exchange = document.querySelector('#exchange');
let tempCels = document.querySelector('#tempCels');
exchange.addEventListener('click', function () {
    console.log(tempFareng.value)
    tempCels.textContent = tempFareng.value / 33.8 + ' C';
}) */

/* let num = document.querySelector('#num');
let faktorial = document.querySelector('#faktorial');
let res = document.querySelector('#res');

faktorial.addEventListener('click', function () {
    let result = '';
    for (let i = 1; i <= num.value; i++) {
        result += i;
        if (i != num.value) {
            result += ' * ';
        }
    }
    res.textContent = result;
}) */

/* let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let button = document.querySelector('#button');
let res = document.querySelector('#res');

button.addEventListener('click', function () {
    let x1 = 0;
    let x2 = 0;
    let a = num1.value;
    let b = num2.value;
    let c = num3.value;
    let deskreminant = b * b - 4 * a * c;
    if (deskreminant == 0) {
        x1 = x2 = -b / 2 * a;
    }
    if (deskreminant > 0) {
        x1 = (-b + Math.sqrt(deskreminant)) / (2 * a);
        x2 = (-b - Math.sqrt(deskreminant)) / (2 * a);
    }
    res.textContent = 'x1 = ' + x1 + '   ' + 'x2 = ' + x2;
}) */