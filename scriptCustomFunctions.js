"use strict";
//156
/*
function getName() {
    console.log('Anton');
}

function getSum() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

getName();
getSum();
 */
//157
/*
function getCub(num) {
    console.log(num ** 3);
}

function isPositive(num) {
    if (num >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

getCub(2);
isPositive(1);
isPositive(-1);
 */
//158
/*
function getSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
getSum(1, 2, 3);
 */
//159
/*
function func(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);
 */
//161
/*
function getCub(num) {
    return num ** 3;
}
let res = getCub(2);
console.log(res);

function getKvadrat(num) {
    return Math.sqrt(num);
}
let res = getKvadrat(4) + getKvadrat(9);
console.log(res);

function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}
let res = round(sqrt(2));
console.log(res);

function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);

function round(num) {
    return num.toFixed(3);
}
 */
//165
/*
function func(num) {
    let i = 1;
    while (true) {
        num /= 2;
        if (num < 10) {
            return i;
        }
        i++;
    }
}
console.log(func(18));
 */
//167
/*
function func(arr) {
    for (let elem of arr) {
        if (elem % 2 != 0) {
            return false;
        }
    }
    return true;
}
let arr = [2, 4, 6, 1, 8];
console.log(func(arr));

function func(num) {
    let arr = String(num).split('');
    for (let elem of arr) {
        if (elem % 2 == 0) {
            return false;
        }
    }
    return true;
}
let num = 1358;
console.log(func(num));

function doble(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return true;
        }
    }
    return false;
}
let arr = [1, 2, 3];
console.log(doble(arr));
 */
//168
/*
function func(a, b) {
    return a == b;
}
console.log(func(1, 1));

function func(a, b) {
    return a != b;
}
console.log(func(1, 1));

function func(a, b) {
    return a + b >= 10;
}
console.log(func(10, 2));

function func(num) {
    return num >= 0;
}
console.log(func(-1));
 */
//170

function arraySum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += +elem;
    }
    return sum;
}
//console.log(arraySum([1, 2, 3]));

function getDelitel(num) {
    let delitel = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            delitel.push(i);
        }
    }
    return delitel;
}
//console.log(getDelitel(6));

function getSymbols(str) {
    let arr = str.split('');
    return arr;
}
//console.log(getSymbols('asdf qwer'));

function getSymbolsRevers(str) {
    let arr = str.split('').reverse();
    return arr;
}
//console.log(getSymbolsRevers('asd'));

function setFirstLetterUp(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
//console.log(setFirstLetterUp('anton'));

function setEachWordFirstLetterUp(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = setFirstLetterUp(words[i]);
    }
    return words.join(' ');
}
//console.log(setEachWordFirstLetterUp('asd qwe rty'));
function fillArrayTo(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
//console.log(fillArrayTo(5));
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = [1, 2, 3, 4, 5];
function getRandomElement(arr) {
    let elemPosition = getRandomInt(0, arr.length - 1);
    return arr[elemPosition];
}
//console.log(getRandomElement(arr));
function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
//console.log(isPrimeNumber(7));
function getSumDelitel(num) {
    let sum = 0;
    for (let elem of getDelitel(num)) {
        sum += elem;
    }
    return sum;
}
function twoNumbers(num1, num2) {
    return getSumDelitel(num1) == num2 && getSumDelitel(num2) == num1;
}
//console.log(twoNumbers(220, 284));
function getTwoNumbers() {
    let numbers = {};
    for (let i = 1; i <= 1000; i++) {
        for (let j = 1; j <= 1000; j++) {
            if (twoNumbers(i, j)) {
                numbers[i] = j;
            }
        }
    }
    return numbers;
}
//console.log(getTwoNumbers());
function perfectNumber(num) {
    return getSumDelitel(num) == num;
}
//console.log(perfectNumber(496));
function getLuckyTikets() {
    let tikets = [];
    for (let i = 1000; i <= 999999; i++) {
        let num = String(i);
        if (num.length == 4) {
            num = '00' + String(i);
        }
        if (num.length == 5) {
            num = '0' + String(i);
        }
        let num1 = num.slice(0, -3).split('');
        let num2 = num.slice(-3).split('');
        if (arraySum(num1) == arraySum(num2)) {
            tikets.push(num);
        }
    }
    return tikets;
}
//console.log(getLuckyTikets());
function getCommonDivisors(num1, num2) {
    let result = [];
    for (let elem of getDelitel(num1)) {
        for (let item of getDelitel(num2)) {
            if (elem == item) {
                result.push(elem);
            }
        }
    }
    return result;
}
//console.log(getCommonDivisors(12, 24));
function getTranslit(str) {
    let letters = {
        ' ': ' ',
        'А': 'A',
        'а': 'a',
        'Б': 'B',
        'б': 'b',
        'В': 'V',
        'в': 'v',
        'Г': 'H',
        'г': 'h',
        'Ґ': 'G',
        'ґ': 'g',
        'Д': 'D',
        'д': 'd',
        'Е': 'E',
        'е': 'e',
        'Є': 'Ye',
        'є': 'ie',
        'Ж': 'Zh',
        'ж': 'zh',
        'З': 'Z',
        'з': 'z',
        'И': 'Y',
        'и': 'y',
        'І': 'I',
        'і': 'i',
        'Ї': 'Yi',
        'ї': 'i',
        'Й': 'Y',
        'й': 'i',
        'К': 'K',
        'к': 'k',
        'Л': 'L',
        'л': 'l',
        'М': 'M',
        'м': 'm',
        'Н': 'N',
        'н': 'n',
        'О': 'O',
        'о': 'o',
        'П': 'P',
        'п': 'p',
        'Р': 'R',
        'р': 'r',
        'С': 'S',
        'с': 's',
        'Т': 'T',
        'т': 't',
        'У': 'U',
        'у': 'u',
        'Ф': 'F',
        'ф': 'f',
        'Х': 'Kh',
        'х': 'kh',
        'Ц': 'Ts',
        'ц': 'ts',
        'Ч': 'Ch',
        'ч': 'ch',
        'Ш': 'Sh',
        'ш': 'sh',
        'Щ': 'Shch',
        'щ': 'shch',
        'Ю': 'Yu',
        'ю': 'іu',
        'Я': 'Ya',
        'я': 'ia'
    }
    let result = '';
    for (let elem of str.split('')) {
        for (let letter in letters) {
            if (elem == letter) {
                result += letters[letter];
            }
        }
    }
    return result;
}
//console.log(getTranslit('Юрів Антон Володимирович Українець'));
function getNumberInWords(num) {
    let arr = {
        3: {
            1: 'один',
            2: 'два',
            3: 'три',
            4: 'чотири',
            5: 'п\'ять',
            6: 'шість',
            7: 'сім',
            8: 'вісім',
            9: 'дев\'ять'
        },
        2: {
            1: 'десять',
            2: 'двадцять',
            3: 'тридцять',
            4: 'сорок',
            5: 'п\'ятдесять',
            6: 'шісдесять',
            7: 'сімдесять',
            8: 'вісімдесять',
            9: 'дев\'яносто'
        },
        1: {
            1: 'сто',
            2: 'двісті',
            3: 'триста',
            4: 'чотириста',
            5: 'п\'ятсот',
            6: 'шістсот',
            7: 'сімсот',
            8: 'вісімсот',
            9: 'дев\'ятсот'
        }
    };
    let result = '';
    let numToString = String(num);
    for (let i = 0; i < numToString.length; i++) {
        result += func11111(numToString[i], arr[i + 1]);
        if (i != numToString.length - 1) {
            result += ' ';
        }
    }

    return result;
}
function func11111(num, position) {
    for (let elem in position) {
        if (num == elem) {
            return position[elem];
        }
    }
}
//console.log(getNumberInWords(237));
//console.log(getTranslit(getNumberInWords(237)));