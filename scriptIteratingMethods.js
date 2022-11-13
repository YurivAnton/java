
//198
/*
let arr = [4, 9, 16, 25, 36];
let newArr = arr.map(function (elem) {
    return Math.sqrt(elem);
})
console.log(newArr);

let str = ['Anton', 'Yuriv'];
let newStr = str.map(function (elem) {
    return elem + '!';
});
console.log(newStr);
let reverseStr = str.map(function (elem) {
    return elem.split('').reverse().join('');
});
console.log(reverseStr);

let arrr = ['123', '456', '789'];
let newArr = arrr.map(function (elem) {
    let a = [];

    for (let i = 0; i < elem.length; i++) {
        a.push(Number(elem[i]));
    }
    return a;
});
console.log(newArr);

let arr = [4, 9, 16, 25, 36];
let newArr = arr.map(function (elem, index) {
    return elem * index;
});
console.log(newArr);
 */
//199
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function (elem) {
    sum += elem * elem;
});
console.log(sum);
 */
//200
/*
let arr = [1, -2, 3, 4, -5, 60];
console.log(arr.filter(elem => elem > 0));
console.log(arr.filter(elem => elem < 0));
console.log(arr.filter(elem => elem > 0 && elem < 10));

let arr = ['YAV', 'Yuriv!', 'Anton!'];
console.log(arr.filter(elem => elem.length > 5));

let arr = [1, 2, 30, 4, 5, 6];
let result = arr.filter(function (elem, index) {
    return elem * index < 30;
});
console.log(result);

let arr = [1, 2, [3, 4], 5, [6, 7]];
let result = arr.filter(function (elem) {
    return typeof elem != 'object';
});
console.log(result);

let arr = [1, -2, 3, -4, -5];
console.log(arr.filter(elem => elem < 0).length);
*/
//201
/*
let arr = [1, 2, 3, 40];
console.log(arr.every(elem => elem > 0));
let result = arr.every(function (elem, index) {
    return elem * index < 30;
});
console.log(result);
 */
//202
/* 
let arr = [-1, -2, -3, -4, 51];
console.log(arr.some(elem => elem > 0));
let result = arr.some(function (elem, index) {
    return elem * index > 30;
});
console.log(result);
 */