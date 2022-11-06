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

let str = 'http://asdfasdfas';
console.log(str.startsWith('http://'));
let str1 = 'index.html';
console.log(str1.endsWith('.html'));

let str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr);

let str = '12345';
let arr = str.split('');
console.log(arr);


let arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
arr.unshift(4, 5, 6);
console.log(arr);

let arr = [1, 2, 3];
console.log(arr.shift());
console.log(arr.pop());

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3));
let newArr = arr.splice(3);
console.log(newArr);

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);

let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));
console.log(arr.includes(3));
*/
//154
/*
let str = 'london';

let result = str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(result);

let result = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result);

let str = 'London';
let result = str.slice(0, 1).toLocaleLowerCase() + str.slice(1);
console.log(result);

let str = 'word1 word2 word3';
let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result = words.join(' ');
console.log(result);

let str = 'var_test_text';
let words = str.split('_');
for (let i = 1; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result = words.join('');
console.log(result);

let str = 'строка co словами';
let result = str.split(' ').reverse().join(' ');
console.log(result);
*/
//155
/* 
let num = '12345';
let arr = num.split('');
let sum = 0;
for (let digit of arr) {
    sum += +digit;
}

console.log(sum);
 
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
    sum += +digit;
}

console.log(sum);

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
    sum += Number(digit);
}

console.log(sum);

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
    sum += Number(digit);
}

console.log(sum);

let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
    prod *= digit;
}

console.log(prod);
*/