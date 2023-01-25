"use strict";

//288
//1
/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    console.log(event);
}) */
//289
//1
/* let elem = document.querySelector('#elem');
document.addEventListener('mousemove', function (event) {
    elem.innerHTML = event.clientX + ' : ' + event.clientY;
}) */
//290
//1
/* let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
    if (event.type == 'click') {
        elem.classList.add('colored');
    }
    if (event.type == 'dblclick') {
        elem.classList.add('alert');
    }
}  */
//291
//1
/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    let tag = event.target;
    if (tag.tagName.toLowerCase() == 'li') {
        tag.innerHTML += '!';
    }
    if (tag.tagName.toLowerCase() == 'ul') {
        tag.innerHTML += '<li>text</li>';
    }
}) */
//292
//1
/* let elem = document.getElementById('elem');
elem.addEventListener('keypress', function (event) {
    console.log(event.key);
    console.log(event.code);
}) */
//5
/* let elem = document.getElementById('elem');
let elemP = document.getElementById('elemP');

elem.addEventListener('keypress', function (event) {
    if (event.code == 'Enter') {
        elemP.innerHTML += elem.value;
        elem.value = '';
    }
}) */
//293
//1
/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    if (event.altKey) {
        elem.style.backgroundColor = 'red';
    }
}) */
//2
/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    if (event.ctrlKey) {
        event.target.innerHTML += '1';
    }
    if (event.shiftKey) {
        event.target.innerHTML += '2';
    }
}) */
//294
//1
/* let link1 = document.querySelector('#elem1');
let link2 = document.querySelector('#elem2');
let link3 = document.querySelector('#elem3');
let link4 = document.querySelector('#elem4');

function func(event) {
    event.preventDefault();
    this.innerHTML += this.href;
    //console.log(this.href);
}
link1.addEventListener('click', func);
link2.addEventListener('click', func);
link3.addEventListener('click', func);
link4.addEventListener('click', func); */
//2
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elemP = document.querySelector('#elemP');
let link = document.querySelector('#link');

link.addEventListener('click', function (event) {
    event.preventDefault();
    elemP.innerHTML = Number(elem1.value) + Number(elem2.value);
}) */
//295
//1
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', function () {
    console.log('зеленый');
});
elem2.addEventListener('click', function () {
    console.log('голубой');
});
elem3.addEventListener('click', function () {
    console.log('красный');
}); */
//296
//1 - 2
/* let elem = document.querySelector('div');
elem.addEventListener('click', function (event) {
    if (event.target.matches('div')) {
        console.log('div');
    }
    if (event.target.matches('ul')) {
        console.log('ul');
        event.target.innerHTML += '<li></li>';
    }
    if (event.target.matches('li')) {
        console.log('li');
        event.target.innerHTML += '!';
    }
}) */
//297
//1
/* let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');
button.addEventListener('click', function (event) {
    block.classList.add('active');
    event.stopPropagation();
});
parent.addEventListener('click', function () {
    block.classList.remove('active');
}); */
//304
/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    console.log(this);

    function child(param) {
        console.log(param);
    }
    child(this);
    console.log(this);
    let child = () =>
        console.log(this);
    child();
} */
//305 - 306
//1
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
function func() {
    console.log(this.value);
}
func.call(elem1);
func.call(elem2);
func.call(elem3); */
//2
/* let elem = document.querySelector('#elem');

function func(surname, name) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

func.call(elem, 'Smit', 'John');
func.apply(elem, ['Smit', 'John']); */
//307
/* let elem = document.getElementById('elem');

function func(name, surname) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

func = func.bind(elem);

func('John', 'Smit');
func('Eric', 'Luis'); */