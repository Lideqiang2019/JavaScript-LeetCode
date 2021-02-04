"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTotal(one, two) {
    return one + two;
}
let total = getTotal(1, 2);
function errorFunc() {
    throw new Error();
    console.log('hello');
}
function add({ one, two }) {
    return one + two;
}
