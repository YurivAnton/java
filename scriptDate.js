"use strict";

//222
/*
let date = new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
 */
//223
/*
let date = new Date();

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
console.log(
    addZero(date.getHours()) +
    ':' +
    addZero(date.getMinutes()) +
    ':' +
    addZero(date.getSeconds()) +
    ' ' +
    date.getFullYear() +
    '.' +
    addZero(date.getMonth()) +
    '.' +
    addZero(date.getDate())
);
 */
//224
/*
let str = '2025-12-31';
let res = str.split('-').reverse().join('.');
console.log(res);

let day = (new Date()).getDay();
console.log(day);
if (day < 5) {
    console.log('---');
} else {
    console.log('+++');
}
console.log(6 - day);
 */
//226
/*
let months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let month = (new Date()).getMonth();
console.log(months[month]);
 */
//227
/*
let date = new Date(1986, 7, 3);
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

let date = new Date(2025, 1, 1);
console.log(date.getTime());
 */
//229
/*
let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60 * 60 * 24));

let date1 = new Date(1986, 6, 3);
let date2 = new Date();
let diff = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 31));
 */
//230
/*
let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diff = date2 - date1;
console.log(diff);
console.log(diff / (1000 * 60 * 60 * 24));
console.log(diff / (1000 * 60 * 60 * 24 * 31));
console.log(diff / (1000 * 60 * 60 * 24 * 31 * 12));
 */
//232
/*
function func(month, year) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(func(10, 2022));
function isLeap(year) {
    let leap = func(1, year);
    return leap == 29;
}
console.log(isLeap(2022));
 */
//234
/*
function checkDate(year, month, day) {
    let date = new Date(year, month, day);

    return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
}
console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 32));
 */
//235
/*
let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);
console.log(date.getDay());
date = new Date(now.getFullYear(), now.getMonth(), 1);
console.log(date.getDay());
 */
//236
/*
let now = new Date();
let date = new Date(2022, 10, 11);
console.log((now - date) / 1000);

let now = new Date();
let date = new Date(2022, 10, 11, 23, 59, 59);
console.log((date - now) / 1000);

let now = new Date();
let date = new Date(2022, 11, 31, 23, 59, 59);
console.log((date - now) / (1000 * 60 * 60 * 24));

let arr = [];
for (let i = 1; i <= 365; i++) {
    let date = new Date(2022, 0, i);
    if (date.getDate() == 13 && date.getDay() == 5) {
        arr.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    }
}
console.log(arr);

let now = new Date();
console.log(new Date(now.getFullYear(), now.getMonth() - 3, now.getDate()));
*/
// 237
/* 
let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1 > date2) {
    console.log(date1 + ' bilsha');
} else if (date2 > date1) {
    console.log(date2 + ' bilsha');
} else {
    console.log(date1 + ' and ' + date2 + ' rivni');
}
 */