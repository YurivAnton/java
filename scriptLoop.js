"use strict";
//137
/*
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 100; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x');
}
console.log(arr);

let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

let arr = [1, -2, 3, 22, 44, 55];
for (let elem of arr) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
    }
}
let arr = [1, 3, 54, 6];
for (let elem of arr) {
    if (elem == 5) {
        console.log('+++');
        break;
    } else {
        console.log('---');
    }
}

let arr = [1, 3, 5, 6];
let res = 0;
for (let elem of arr) {
    res += elem;
}
console.log(res);

let arr = [1, 2];
let res = 0;
for (let elem of arr) {
    res += elem ** 2;
}
console.log(res);

let arr = [1, 3, 6, 6];
let res = 0;
for (let elem of arr) {
    res += elem;
}
console.log(res / arr.length);

let num = 5;
let factor = 1;
for (let i = 1; i <= num; i++) {
    factor *= i;
}
console.log(factor);

let arr = [];
for (let i = 10; i > 0; i--) {
    arr.push(i);
}
console.log(arr);

let arr = [1, 2, 3, 4, -5, -6, -7];
let sum = 0;
for (let elem of arr) {
    if (elem > 0) {
        sum += elem;
    }
}
console.log(sum);

let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
        console.log(elem);
    }
}

let arr = [1, 2, 3, 4, -5, -6, -7];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

let arr = [1, 1, 3, 3, -5, -6, -7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
        console.log(arr[i]);
    }
}

let arr = [1, 1, 3, 3, -5, -6, -7];
for (let elem of arr) {
    //document.write(elem + '<br>');
    document.write('<p>' + elem + '</p>');
}

let week = ['pon', 'viv', 'ser', 'chet', 'piat', 'sub', 'ned'];
for (let i = 0; i < week.length; i++) {
    if (i == 5 || i == 6) {
        document.write('<b>' + week[i] + '</b> ');
    } else {
        document.write(week[i] + ' ');
    }
}

let week = ['pon', 'viv', 'ser', 'chet', 'piat', 'sub', 'ned'];
let day = 2;
for (let i = 0; i < week.length; i++) {
    if (i == day) {
        document.write('<i>' + week[i] + '</i> ');
    } else {
        document.write(week[i] + ' ');
    }
}

let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let elem in obj) {
    if (obj[elem] <= 400) {
        obj[elem] *= 1.1;
    }
}
console.log(obj);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);
let sumKeys = 0;
let sumValues = 0;
for (let elem in obj) {
    sumKeys += +elem;
    sumValues += obj[elem];
}
console.log(sumKeys / sumValues);

let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
let keys = [];
let values = [];
for (let elem in obj) {
    keys.push(elem);
    values.push(obj[elem]);
}
console.log(keys);
console.log(values);

let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr = [];
for (let elem in obj) {
    if (String(obj[elem])[0] == 1 || String(obj[elem])[0] == 2) {
        arr.push(obj[elem]);
    }
}
console.log(arr);

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 1; i <= arr.length; i++) {
    obj[i] = arr[i - 1];
}
console.log(obj);

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 1; i <= arr.length; i++) {
    obj[arr[i - 1]] = i;
}
console.log(obj);
*/
//136
/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

let res = 0;

for (let i = 1; i <= 10; i++) {
    res += i;
}

console.log(res);

let res = 1;

for (let i = 1; i <= 10; i++) {
    res *= i;
}

console.log(res);

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum);

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum);

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum);

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);

let arr = [1, 2, 3, 4, 5];
let newArr = [];

for (let elem of arr) {
    newArr.push(elem ** 2);
}

console.log(newArr);

let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr);

let obj = { a: 1, b: 2, c: 3 };
let sum = 0;

for (let elem in obj) {
    sum += obj[elem];
}

console.log(sum);

let obj = { a: 1, b: 2, c: 3 };
let sum = 0;

for (let key in obj) {
    sum += obj[key];
}

console.log(sum);

let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
    if (elem === 3) {
        res = '+++';
        break;
    } else {
        res = '---';
    }
}

console.log(res);

let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr);

let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
    if (elem === 3) {
        res = true;
        break;
    }
}

console.log(res);

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem % 2 == 0) {
        console.log(elem);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];
for (let elem of arr) {
    if (elem % 2 != 0) {
        res.push(elem);
    }
}

console.log(res);
 */
//135
/*
let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum = 0;

for (let elem in obj) {
    if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
        sum += +obj[elem];
    }
}

console.log(sum);
 */
//133
/*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i + 1] + arr[i]);
}
 */
//132
/*
let str = 'Дана строка. Подсчитайте сколько раз в ней встречается каждый из символов.';
let count = {};
for (let elem of str) {
    if (count[elem] === undefined) {
        count[elem] = 1;
    } else {
        count[elem]++;
    }
}
console.log(count);
 */
//131
/*
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter3 = 0;
let counter2 = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter3++;
    }
    if (elem == 2) {
        counter2++;
    }
}
console.log(counter3);
console.log(counter2);
 */
//130
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
    }
}
if (flag) {
    console.log('+++');
} else {
    console.log('---');
}

let num = 12;
let flag = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log('+++');
} else {
    console.log('---');
}
 */
//129
/*
let obj = { x: 1, y: 2, z: 3 };
for (let elem in obj) {
    obj[elem] = obj[elem] * obj[elem];
}
console.log(obj);

let obj = { x: 1, y: 2, z: 3 };
for (let elem in obj) {
    obj[elem]++;
}
console.log(obj);
 */
//128
/*
let arr1 = ['пн', 'вт', 'cp', 'чт', 'пт', 'cb', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let week = {};
for (let i = 0; i < arr1.length; i++) {
    week[arr1[i]] = arr2[i];
}
console.log(week);

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};
for (let elem in obj) {
    if (obj[elem] % 2 == 0) {
        newObj[elem] = obj[elem];
    }
}
console.log(newObj);

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};
for (let elem in obj) {
    newObj[obj[elem]] = elem;
}
console.log(obj);
console.log(newObj);
 */
//127
/*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i] -= 1;
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}
console.log(arr);
 */
//126
/*
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x');
}
console.log(arr);

let arr = [1, 2, 3, -4, 5, -6, -7, -8, -9];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);
 */
//123
/*
let res = ''
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        res += i;
    }
}
alert(res);

let res = '';
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        res += String(i) + String(j);
        res += ' ';
    }
}
alert(res);
 */
//121
/*
let arr = [1, 2, 3, 4, 0, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        break;
    }
    console.log(arr[i]);
}

let arr = [1, 2, 3, -4, 5];
let res = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        break;
    }
    res += arr[i];
}
console.log(res);

let arr = [1, 2, 2, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 3) {
        console.log(i);
        break;
    }
}

let res = 0;
for (let i = 1; i <= 100; i++) {
    res += i;
    if (res > 100) {
        console.log(i);
        break;
    }
}
 */
//120
/*
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
}

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(Number(str[0]) + Number(str[1]));
}

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (str[0] == 1) {
        console.log(i);
    }
}

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (Number(str[0]) + Number(str[1]) == 5) {
        console.log(i);
    }
}
*/
//119
/*
let str = '';
for (let i = 1; i <= 5; i++) {
    str += '-';
}
console.log(str);

let str = '';
for (let i = 1; i <= 9; i++) {
    str += i;
}
console.log(str);

let str = '';
for (let i = 9; i >= 1; i--) {
    str += i;
}
console.log(str);

let str = '-';
for (let i = 1; i <= 9; i++) {
    str += i + '-';
}
console.log(str);
 */
//118
/*
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
    res += elem;
}
console.log(res);

let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
    if (elem % 2 == 0) {
        res += elem;
    }
}
console.log(res);

let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
    res += elem * elem;
}
console.log(res);

let arr = [2, 5, 9, 3, 1, 4];
let res = 1;
for (let elem of arr) {
    res *= elem;
}
console.log(res);
*/
//117
/*
let res = 0;
for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
        res += i;
    }
}
console.log(res);

let res = 0;
for (let i = 1; i <= 99; i++) {
    if (i % 2 != 0) {
        res += i;
    }
}
console.log(res);

let res = 1;
for (let i = 1; i <= 20; i++) {
    res *= i;
}
console.log(res);
 */
//116
/*
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
    if (elem > 3 && elem < 10) {
        console.log(elem);
    }
}
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let elem in obj) {
    if (obj[elem] % 2 != 0) {
        console.log(obj[elem]);
    }
}
 */
//115
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
 */
//114
/*
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

let j = 11;
while (j <= 33) {
    console.log(j);
    j++;
}

let num = 1;
let res = 0;
let k = 1;
while (num <= 1000) {
    res = num;
    num *= 3;
    k++;
}
console.log(k);
console.log(res);
 */
//113
/*
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
 */
//112
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    console.log(elem);
}
 */
//111
/* 
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 11; i <= 33; i++) {
    console.log(i);
}

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}
 */