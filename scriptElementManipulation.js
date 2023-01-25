"use strict";
//318
//1
/* let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.innerHTML = 'item';
elem.appendChild(li); */
//2
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = 'item';
    elem.appendChild(li);
}) */
//319
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let li = document.createElement('li');
    elem.appendChild(li);
    li.addEventListener('click', function () {
        li.innerHTML += '!';
    })
}) */
//320
/* let elem = document.querySelector('#elem');

for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    elem.appendChild(li);
} */
//321
/* let parent = document.querySelector('#parent');
let elemP = document.querySelector('#elemP');

for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    parent.appendChild(input);
    input.addEventListener('blur', function () {
        elemP.textContent += this.value;
    })
} */
//322
//1
/* let elems = document.querySelectorAll('li');

for (let elem of elems) {
    elem.addEventListener('click', function () {
        elem.remove();
    })
} */
//2
/* let parent = document.querySelector('#parent');
let button = document.querySelector('#button');
console.log(parent.lastElementChild);
button.addEventListener('click', function () {
    parent.lastElementChild.remove();
})   */
//323
//1
/* let elem = document.querySelector('#elem');
let liStart = document.createElement('li');
let liFinish = document.createElement('li');
liStart.innerHTML = 'start';
liFinish.innerHTML = 'finish';
elem.prepend(liStart);
elem.append(liFinish); */
//2
/* let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = 'new';
parent.insertBefore(li, elem);
li.addEventListener('click', function () {
    this.innerHTML += '!';
}) */
//324
//1 - 5
/* let elem = document.querySelector('#elem');

let p = document.createElement('p');
p.innerHTML = '!!!';

elem.insertAdjacentElement('beforebegin', p);
elem.insertAdjacentElement('afterend', p);
elem.insertAdjacentElement('afterbegin', p);
elem.insertAdjacentElement('beforeend', p);
elem.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>');
 */
//325
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let clone = elem.cloneNode(true);
    elem.insertAdjacentElement('afterend', clone);
}) */
//326
//1, 2
/* let elem = document.querySelector('#elem');
console.log(elem.matches('div.www'));
console.log(elem.matches('p')); */
//3
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let contain = elem1.contains(elem2);
console.log(contain); */