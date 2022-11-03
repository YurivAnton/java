"use strict";

//151
//console.log(Math.pow(2, 10));
//console.log(Math.sqrt(245));
/* 
let arr = [4, 2, 5, 19, 13, 0, 10];
let res = 0;
for (let elem of arr) {
    res += Math.pow(elem, 3);
}
console.log(Math.sqrt(res));

console.log(Math.sqrt(379).toFixed(0));
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed(2));

let obj = {};
obj['floor'] = Math.floor(Math.sqrt(587));
obj['ceil'] = Math.ceil(Math.sqrt(587));

console.log(obj);

console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
let arr = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getRandomInt(1, 100));

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = getRandomInt(1, 100);
}
console.log(arr);

let str = 'js';
console.log(str.toUpperCase());

let str = 'JS';
console.log(str.toLowerCase());

let str = 'я учу javascript!';
console.log(str.substr(2, 3));
console.log(str.substring(2, 5));
console.log(str.slice(2, 5));
console.log(str.substr(6, 10));
console.log(str.substring(6, 16));
console.log(str.slice(6, 16));

let str = 'abcde';
console.log(str.indexOf('c'));
if (str.indexOf('a') >= 0) {
    console.log('+++');
} else {
    console.log('---');
}
if (str.indexOf('a') == 0) {
    console.log('+++');
} else {
    console.log('---');
}

let str = 'http://asdfasdfas';
if (str.indexOf('http://') == 0) {
    console.log('+++');
} else {
    console.log('---');
}
*/
let str = 'http://index.html////';
console.log(str.lastIndexOf('.html'));
console.log(str.indexOf('.html'));