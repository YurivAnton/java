"use strict";
//138
/*
let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];
console.log(arr[3][2] + arr[1][1] + arr[2][0] + arr[0][0]);

let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for (let elem of arr) {
    for (let item of elem) {
        sum += item;
    }
}
console.log(sum);

let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];
let sum = 0;
for (let elem of arr) {
    for (let item of elem) {
        for (let num of item) {
            sum += num;
        }
    }
}
console.log(sum);

let arr = [
    [
        1,
        2,
        3,
        [
            4,
            5,
            [6, 7]
        ]
    ],
    [
        8,
        [9, 10]
    ]
];
let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
console.log(sum);
*/
//139
/*
let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sum = 0;
for (let subArr of arr) {
    for (let elem of subArr) {
        sum += elem;
    }
}
console.log(sum);

let arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let sum = 0;
for (let subArr of arr) {
    for (let elem of subArr) {
        for (let num of elem) {
            sum += num;
        }
    }
}
console.log(sum);

let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);

let arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);
 */
//140
/*
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}
console.log(arr);

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        arr[i].push('x');
    }
}
console.log(arr);

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < 5; k++) {
            arr[i][j].push(k + 1);
        }
    }
}
console.log(arr);
 */
//142
/*
let arr = [];
let k = 1;
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i].push(k++);
    }
}
console.log(arr);
 */
//143
/*
let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let sum = 0;
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        sum += subObj[subKey];
    }
}
console.log(sum);

let obj = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}
alert(obj[2][2]);
alert(obj[3][1]);

let obj = {
    key1: {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
        },
        f: 5,
    },
    key2: {
        g: 6,
        h: 7,
    },
}
let sum = obj['key1']['a'] + obj['key1']['b'] + obj['key1']['c']['d'] + obj['key1']['c']['e'] + obj['key1']['f'] +
    obj['key2']['g'] + obj['key2']['h'];
console.log(sum);
*/
//144
/*
let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}
let sum = 0;
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        sum += subObj[subKey];
    }
}
console.log(sum);

let obj = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}
let sum = 0;
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        let subObj1 = subObj[subKey];
        for (let subKey1 in subObj1) {
            sum += subObj1[subKey1];
        }
    }
}
console.log(sum);
 */
//145
/*
let students = {
    'group1': ['name11', 'name12', 'name13'],
    'group2': ['name21', 'name22', 'name23'],
    'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);
 */
//146
/*
let data = {
    1: [
        'data11',
        'data12',
        'data13',
    ],
    2: [
        'data21',
        'data22',
        'data23',
    ],
    3: [
        'data31',
        'data32',
        'data33',
    ],
    4: [
        'data41',
        'data42',
        'data43',
    ],
};
for (let key in data) {
    for (let str of data[key]) {
        document.write(str + '<br>');
    }
}

let data = [
    {
        1: [
            'data111',
            'data112',
            'data113',
        ],
        2: [
            'data121',
            'data122',
            'data123',
        ],
    },
    {
        1: [
            'data211',
            'data212',
            'data213',
        ],
        2: [
            'data221',
            'data222',
            'data223',
        ],
    },
    {
        1: [
            'data411',
            'data412',
            'data413',
        ],
        2: [
            'data421',
            'data422',
            'data423',
        ],
    },
];
for (let elem of data) {
    for (let key in elem) {
        for (let item of elem[key]) {
            document.write(item + '<br>');
        }
    }
}
 */
//147
/*
let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
for (let employee of employees) {
    console.log(employee.name + ' - ' + employee.salary);
}

let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
for (let employee of employees) {
    console.log(employee.salary);
}

let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];
let sum = 0;
for (let employee of employees) {
    if (employee.age >= 30) {
        sum += employee.salary;
    }
}
console.log(sum);
 */
//148
/*
let months = {
    'ru': [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};
let lang = 'ru';
let month = 5;
console.log(months[lang][month]);

let affairs = {
    '2018': {
        11: {
            29: ['дeлo111', 'дeлo112', 'дeлo113'],
            30: ['дeлo121', 'дeлo122', 'дeлo123'],
        },
        12: {
            30: ['дeлo211', 'дeлo212', 'дeлo213'],
            31: ['дeлo221', 'дeлo222', 'дeлo223'],
        },
    },
    '2019': {
        12: {
            29: ['дeлo311', 'дeлo312', 'дeлo313'],
            30: ['дeлo321', 'дeлo322', 'дeлo323'],
            31: ['дeлo331', 'дeлo332', 'дeлo333'],
        }
    },
};
let year = '2019';
let month = 12;
let day = 30;
console.log(affairs[year][month][day][0]);
*/
//149
/*
let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
];
employees.push({
    name: 'name4',
    salary: 600,
    age: 31,
});
console.log(employees);
 */
//150
/* 
let affairs = {
    '2019-12-28': ['data11', 'data12', 'data13'],
    '2019-12-29': ['data21', 'data22', 'data23'],
    '2019-12-30': ['data31', 'data32', 'data33'],
};
affairs["2019-12-29"].push('data24');
affairs["2019-12-31"] = [];
affairs["2019-12-31"].push('data41', 'data42');

console.log(affairs);

let students = {
    'group1': {
        'subgroup11': ['student111', 'student112', 'student113'],
        'subgroup12': ['student121', 'student122', 'student123'],
    },
    'group2': {
        'subgroup21': ['student211', 'student212', 'student213'],
        'subgroup22': ['student221', 'student222', 'student223'],
    },
    'group3': {
        'subgroup31': ['student311', 'student312', 'student313'],
        'subgroup32': ['student321', 'student322', 'student323'],
    },
};
students.group1.subgroup11.push('student114');
students['group1']['subgroup13'] = [];
students['group4'] = {};
students['group4']['subgroup41'] = [];
students.group4.subgroup41.push('student411');
students.group4.subgroup41.push('student412');

console.log(students);
 */
