"use strict";
//327
/* let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let p = document.createElement('p');
    p.textContent = elem;

    parent.appendChild(p);
    p.addEventListener('click', function () {
        p.innerHTML = Number(p.innerHTML) + 1;
    })
} */
//328
//1 - 5
/* let elem = document.querySelector('#elem');
let arr = [1, 3, 4, 5, 6];

for (let item of arr) {
    let li = document.createElement('li');
    li.innerHTML = item;
    elem.appendChild(li);
    li.addEventListener('click', function () {
        if (li.innerHTML.indexOf('!') == -1) {
            li.innerHTML += '!';
        }
        alert(li.innerHTML);
    })
} */
//329
//1 - 3
/* let table = document.querySelector('#table');

for (let i = 1; i <= 10; i++) {
    let tr = document.createElement('tr');

    for (let j = 1; j <= 5; j++) {
        let td = document.createElement('td');
        td.innerHTML = 'x';
        tr.appendChild(td);
    }
    table.appendChild(tr);
} */
//4
/* let height = document.querySelector('#height');
let width = document.querySelector('#width');
let generate = document.querySelector('#generate');

generate.addEventListener('click', function () {
    console.log(height);
    console.log(width);
    let table = document.createElement('table');
    for (let i = 1; i <= height.value; i++) {
        let tr = document.createElement('tr');

        for (let j = 1; j <= width.value; j++) {
            let td = document.createElement('td');

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.style.border = ('1px solid black');
    generate.insertAdjacentElement('afterend', table);
}) */
//330
/* let a = document.querySelector('#a');
let table = document.createElement('table');

let k = 1;

for (let i = 1; i <= 5; i++) {
    let tr = document.createElement('tr');

    for (let j = 1; j <= 5; j++) {
        if (k % 2 == 0) {
            let td = document.createElement('td');
            td.textContent = k;
            tr.appendChild(td);
        } else {
            j--;
        }
        k++;
    }
    table.appendChild(tr);
}
a.insertAdjacentElement('afterend', table); */
//331
/* let table = document.querySelector('#table');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for (let subArr of arr) {
    let tr = document.createElement('tr');

    for (let elem of subArr) {
        let td = document.createElement('td');

        td.textContent = elem * elem;
        tr.appendChild(td);
    }
    table.appendChild(tr);
} */
//332
/* let table = document.querySelector('#table');

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

for (let employee of employees) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = employee.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = employee.age;
    tr.appendChild(td2);
    td2.addEventListener('click', function () {
        td2.textContent = Number(td2.textContent) + 1;
    });

    let td3 = document.createElement('td');
    td3.textContent = employee.salary;
    tr.appendChild(td3);
    td3.addEventListener('click', function () {
        td3.textContent = Math.floor(td3.textContent * 1.1);
    });

    table.appendChild(tr);
} */
//333
//1
/* let table = document.querySelector('#table');
let button = document.querySelector('#button');


button.addEventListener('click', function () {
    let tr = document.createElement('tr');
    for (let i = 1; i <= 2; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}) */
//2
/* let table = document.querySelector('#table');
let button = document.querySelector('#button');

//console.log(trr);
button.addEventListener('click', function () {
    let trr = document.querySelectorAll('#table tr');

    for (let elem of trr) {
        let td = document.createElement('td');
        console.log(elem);
        elem.appendChild(td);
    }

    let tr = document.createElement('tr');
    for (let i = 1; i <= trr.length + 1; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);

    }
    table.appendChild(tr);
}) */
//334
/* let table = document.querySelector('#table');
let button = document.querySelector('#button');
let tds = document.querySelectorAll('#table td');

console.log(tds);
button.addEventListener('click', function () {
    for (let td of tds) {
        td.innerHTML = Number(td.innerHTML) * 2;
    }
}) */
//335
/* let parent = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = '+++';
    parent.appendChild(li);
    let lis = document.querySelectorAll('#parent li');
    for (let li of lis) {
        li.addEventListener('click', function () {
            this.remove();
        })
    }
}) */
//336
/* let elem = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function (event) {
    elem.remove();
    event.preventDefault();
}) */
//337
//1
/* let parent = document.querySelector('#parent');
let elems = document.querySelectorAll('#parent li');

for (let elem of elems) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';
    elem.appendChild(remove);

    remove.addEventListener('click', function (event) {
        elem.remove();
        event.preventDefault();
    })
} */
//2
/* let table = document.querySelector('#table');
let elems = document.querySelectorAll('#table tr');

for (let elem of elems) {
    let td = document.createElement('td');
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';
    td.appendChild(remove);
    elem.appendChild(td);

    remove.addEventListener('click', function (event) {
        elem.remove();
        event.preventDefault();
    })
} */
//338
let elem = document.querySelector('#elem');
//let input = document.querySelector('#input');

elem.addEventListener('click', function () {
    let input = document.createElement('input');
    input.value = elem.textContent;

    input.addEventListener('input', function () {
        elem.textContent = this.value;
    });

    elem.parentElement.appendChild(input);
});