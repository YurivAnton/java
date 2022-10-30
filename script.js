"use strict";
//47
/*
let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]);

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4]);

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.length);

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.length);
 */
//45
/*
let arr = ['a', 'b', 'c'];
let key = 2;
console.log(arr[key]);

let arrInt = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arrInt[key1] + arrInt[key2]);
 */
//44
/*
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

arr.push(4);
arr.push(5);
console.log(arr);
 */
//42
/*
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);

arr[3] = 4;
arr[4] = 5;
console.log(arr);
 */
//41
/*
let arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);

arr[0] += 3;
arr[1] += 3;
arr[2] += 3;
console.log(arr);

arr[0]++;
arr[1]++;
arr[2]++;
console.log(arr);
 */
//40
/*
let arr = [1, 2, 'a'];
alert(arr.length);
alert(arr[arr.length - 1]);
 */
//39
/*
let arr = [1, 2, 3];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);

let sumArr = arr[0] + arr[1] + arr[2];
alert(sumArr);

let arrStr = ['a', 'b', 'c', 'd'];
let result = String(arrStr[0] + '+' + arrStr[1] + '+' + arrStr[2] + '+' + arrStr[3]);
alert(result);
 */
//38
/*
let arr = [1, 2, 3, 4];
alert(arr);
console.log(arr);

let arrString = ['a', 'b', 'asd', 'qwerty'];
alert(arrString);
console.log(arrString);
 */
//37
/*
let r = 10;
let s = 2 * 3.14 * r;
alert(s);

let a = 2;
let s = a * a;
alert(s);

let a = 2;
let b = 3;
let s = a * b;
alert(s);

let a = 2;
let b = 3;
let p = 2 * a + 2 * b;
alert(p);

let tc = 10;
let tf = tc * 32;
alert(tf);
*/

//36
/*
alert(60 * 60 * 24);
alert(60 * 60 * 24 * 30);
alert(60 * 60 * 24 * 365);
alert(60 * 24);
alert(60 * 24 * 365);
 */
//35
/*
let num1 = 1;
let num2 = 2;
console.log('сумма: ' + (num1 + num2));

let a = 1;
let b = 2;
let c = 0;
console.log(a + b + c);

let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum);

let numb = 123;
numb = String(numb);
console.log(numb[0]);

let a1 = 0;
console.log(++a1);

let num11 = 123;
num11 = String(num11);
console.log(num11.length);

let aa = 24 * 60 * 60;
console.log(aa);

let num12 = 123;
let str = String(num12);
console.log(str.length);

let num22 = 123;
let str1 = String(num22);
console.log(str1[str1.length - 1]);

let num111 = 123;
let str11 = String(num111);
console.log(str11.length);

let a11 = '123';
let b1 = '456';
let s = Number(a11) + Number(b1);

console.log(s);

let aaa = 1;
let bbb = 2;
let ccc = 3;

console.log(aaa + bbb + ccc);
 */
//34
/*
document.write('asd');
document.write('<i>' + 'qwer' + '</i>');

let str = 'text';
document.write('<i>' + str + '</i>');

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');
 */
//33
/*
//prompt('Ваше имя?');
let age = prompt('What is your age?');
alert('Your age is: ' + age);

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

alert(Number(num1) + Number(num2));

let a = prompt('type square side');
alert(Number(a) * Number(a));

let side1 = prompt('type side a:');
let side2 = prompt('type side b:');
alert(Number(side1) * Number(side2));
 */
//32
/*
let a = 0.1 * 0.2;
alert(+a.toFixed(2));
alert(0.3 - 0.1);
*/
//29
/* let str = '12345';
let result = Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]);
alert(result);

let num = 123;
let strNum = String(num);
let res = Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2]);
alert(res);

let dobutok = Number(strNum[0]) * Number(strNum[1]) * Number(strNum[2]);
alert(dobutok);

let reverse = strNum[2] + strNum[1] + strNum[0];
alert(reverse);
 */
//27
/* let str = 'abcde';
alert(str[0] + str[2] + str[4]);

let str1 = str[4] + str[3] + str[2] + str[1] + str[0];
alert(str1);

let num = 3;
alert(str[num]);
 */
//24
/* let a = 1;
let b = 2;
alert(String(a) + String(b));

let aa = 1234567890;
alert(String(aa).length);

let num1 = 1111;
let num2 = 2222;
alert(String(num1).length + String(num2).length);
 */
//23
/* let a = '5px';
let b = '6px';
alert(parseInt(a) + parseInt(b));

let aa = '5.5px';
let bb = '6.25px';
alert(parseFloat(aa) + parseFloat(bb) + 'px');
 */
//22
/* let a = '10';
let b = '20';
alert(Number(a) + Number(b));
 */
//20
/* const PI = 3.14;
let r = 10;
alert(2 * PI * r);
 */
//19
/* let a = 'asd';
let b = 0.5;
let c = 134;
console.log(a, b, c);
alert(eeee);
 */
//18
/* let a;
alert(a);
let b = null;
alert(b);
let t = true;
alert(t);
let f = false;
alert(f);
let asd = 'asd';
let qwe = 'qwe';
alert(asd * qwe);
alert(10 / 0);
alert(-10 / 0);
 */
//17
/* let str1 = 'xxx';
let str2 = 'yyy';
let txt = `aaa ${str1} bbb ${str2} ccc`;
alert(txt);
let str = `a
b
c`;
alert(str);
 */
/* alert('script');
let num;
num = 123;
alert(num); */
//16
/* 
let str = 'javascript';
alert(str.length);
 */