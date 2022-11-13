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
 */
//194
/*
function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); // вызываем функцию-коллбэк
    }

    return result;
}

let result = each([1, 2, 3, 4, 5], function (num) {
    return num * 2;
})
console.log(result);

let result = each(['Yuriv', 'Anton'], function (str) {
    return str.split('').reverse().join('');
})
console.log(result);

let result = each(['yuriv', 'anton'], function (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
});
console.log(result);
 */
//195
/*
let result = each([1, 2, 3, 4, 5], function (elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});
console.log(result);
let result1 = each([1, 2, 3, 4, 5], elem => elem > 0);
console.log(result1);
 */
//196
/*
let arr = [1, 2, 3, 4, 5];
function func(arr) {
    console.log(arr.shift());
    if (arr.length != 0) {
        func(arr);
    }
}
func(arr);

let arr = [1, 2, 3, 4, 5];
function getSum(arr) {
    let sum = arr.shift() ** 2;
    if (arr.length != 0) {
        sum += getSum(arr);
    }
    return sum;
}
console.log(getSum([1, 2, 3]));
 */
//197
/* 
let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function func(obj) {
    for (let elem in obj) {
        if (typeof obj[elem] == 'object') {
            func(obj[elem]);
        } else {
            console.log(obj[elem]);
        }
    }
}
func(obj);

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let newArr = [];
function func(arr) {
    for (let elem of arr) {
        if (typeof elem == 'object') {
            func(elem);
        } else {
            newArr.push(elem);
        }
    }
    return newArr;
}
console.log(func(arr));

let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function getSum(obj) {
    let sum = 0;
    for (let elem in obj) {
        if (typeof obj[elem] == 'object') {
            sum += getSum(obj[elem]);
        } else {
            sum += obj[elem];
        }
    }
    return sum;
}
console.log(getSum(obj));

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
function getStr(arr) {
    let str = '';
    for (let elem of arr) {
        if (typeof elem == 'object') {
            str += getStr(elem);
        } else {
            str += elem;
        }
    }
    return str;
}
console.log(getStr(arr));
 */
