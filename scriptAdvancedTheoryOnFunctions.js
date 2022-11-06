"use strict";

//179
/* 
function func() {
    return '!';
}

console.log(func);

function func() {
    return '!!!';
}
console.log(func());
console.log(func);
func = 123;
console.log(func);

function func1() {
    return 3;
}
let func2 = func1;
console.log(func1() + func2());

let func1 = function () {
    return 1;
}
let func2 = function () {
    return 2;
}
console.log(func1() + func2());

let arr = [
    function () { return 1; },
    function () { return 2; },
    function () { return 3; },
];
console.log(arr[2]());
console.log(arr[0]() + arr[1]() + arr[2]());
for (let elem of arr) {
    console.log(elem());
}

let obj = {
    func1: function () { return 1; },
    func2: function () { return 2; },
    func3: function () { return 3; },
};
console.log(obj.func1() + obj.func2() + obj.func3());
for (let elem in obj) {
    console.log(obj[elem]());
}
 */
let arrMath = {
    sum: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    },
    square: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem * elem;
        }
        return sum;
    },
    cube: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem * elem * elem;
        }
        return sum;
    },
};
console.log(arrMath['sum']([1, 2]));
console.log(arrMath['square']([1, 2]));
console.log(arrMath['cube']([1, 2]));