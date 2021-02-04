"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Test() {
    let a = 'hello World';
    console.log(a);
}
let s = 'a';
let a = 1;
let b = true;
let n = null;
let u = undefined;
let sy = Symbol('1');
console.log(s, a, b, n, u, sy);
let arr = [1, 2, 3];
let arr1 = [1, 2, 3];
console.log(arr, arr1);
let x;
x = ['hello', 10];
console.log(x[0].substr(1));
const student = {
    name: 'xiaoming',
    age: 18
};
class Person {
}
const p = new Person();
const getName = () => { return 'xiaoming'; };
let count;
count = 2;
function getTotal(one, two) {
    return one + two;
}
function getAge() {
    console.log(18);
}
