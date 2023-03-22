"use strict";
console.log("hello world!");
let n;
let n2 = 5;
let tf;
let tf2 = true;
let str;
let str2 = "asdf";
const printHello = () => {
    console.log("hello");
};
const printStr = (msg) => {
    console.log(msg);
};
const calc = (a1, a2, op) => {
    switch (op) {
        case "-":
            return a1 - a2;
        case "*":
            return a1 * a2;
        case "/":
            return a1 / a2;
        default:
        case "+":
            return a1 + a2;
    }
};
let unionType;
let v1;
let v2;
const user = { name: "kenny", age: 8 };
user.name = "Kenny";
const user2 = { name: "kenny" };
const user3 = { name: "john" };
const user4 = { name: "john" };
const printRect = (rect) => {
    console.log(rect);
};
var EOperations;
(function (EOperations) {
    EOperations[EOperations["ADD"] = 0] = "ADD";
    EOperations[EOperations["SUB"] = 1] = "SUB";
    EOperations[EOperations["MUL"] = 2] = "MUL";
    EOperations[EOperations["DIV"] = 3] = "DIV";
})(EOperations || (EOperations = {}));
const calc2 = (a, b, op) => {
    switch (op) {
        case EOperations.ADD:
            return a + b;
    }
    return NaN;
};
const arr1 = ["1", "2", "3"];
const arr2 = ["1", "2", true];
const usersArr = [{ name: "kenny" }];
const numArr = [3, 8, 1, 12, 75, 32, 467, 223, 2, 9, 23];
const sort = (arr) => {
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        for (let k = i + 1; k < sortedArr.length; k++) {
            if (sortedArr[k] < sortedArr[i]) {
                const temp = sortedArr[i];
                sortedArr[i] = sortedArr[k];
                sortedArr[k] = temp;
            }
        }
    }
    return sortedArr;
};
console.log(sort(numArr));
const sortGeneric = (arr, cmpFunction) => {
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        for (let k = i + 1; k < sortedArr.length; k++) {
            if (cmpFunction(sortedArr[k], sortedArr[i])) {
                const temp = sortedArr[i];
                sortedArr[i] = sortedArr[k];
                sortedArr[k] = temp;
            }
        }
    }
    return sortedArr;
};
console.log(sortGeneric(numArr, (a, b) => {
    return a > b;
}));
const clientArr = [
    {
        name: "kenny",
        age: 8,
    },
    {
        name: "john",
        age: 40,
    },
    {
        name: "jack",
        age: 30,
    },
];
console.log(sortGeneric(clientArr, (a, b) => {
    if (!a.age || !b.age)
        return false;
    return a.age < b.age;
}));
const tuple = ["asdfasd", 10];
