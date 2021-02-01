function test(a, b) {
    arguments[2] = 3;
    arguments[1] = 1;
    console.log(arguments.length); // -> 2
    console.log(arguments[2]); // -> 3
    // console.log(arguments);
}

test(1, 2);
console.log(test.length); // -> 2

// let a = {};
// a[0] = 'a';
// a[2] = 'b';
// console.log(a,a.length);

var a = {
    num: 1,
    valueOf() {
        return this.num++;
    }
}
// 题  走到 if 内部 打印出 you win
if (a == 1 && a == 2 && a == 3) {
    console.log('you win');
}
// 分析:
// 首先 a 肯定不能是一个基本类型值，不能同时等于多个值
// 然后想到对象 因为这里是判断是双等 所以我们可以利用隐式转换的规则 
// 我们直接在他自身定义toString 或 valueOf 方法 就可以实现

Array.prototype.myReduce = function (fn, initValue) {
    var arr = this,
        len = arr.length,
        args = arguments[2] || this.window, // 这里在原始的reduce方法上新增的一个参数作用是可以改变回调内部的this指向，不传的话默认指向window。                             
        item;
    console.log(arguments.length);
    console.log(arguments[2], this.window, args);
    for (var i = 0; i < len; i++) {
        item = arr[i];
        initValue = fn.apply(args, [initValue, item, i, arr]);
    }
    return initValue;
}

let arr = [0, 1, 2, 3];
let sum = arr.myReduce((pre, item, i, arr) => pre + item, 0);
console.log(sum);


var person = {
    name: 'jerome',
    age: 22,
    hobby: ['rap', 'game', 'travel'],
    preference: {
        accent: 'British accent'
    }
}

function deepClone(origin, target) {
    var tar = target || {},
        toStr = {}.toString,
        type = '[object Array]';

    for (var key in origin) {
        if (origin.hasOwnProperty(key)) {
            if (typeof origin[key] === 'object' && origin[key] !== 'null') { // 不在原型上
                tar[key] = toStr.call(origin[key]) === type ? [] : {};
                // console.log(tar[key]);
                deepClone(origin[key], tar[key]); // 递归向里赋值
            } else {
                // console.log(tar[key],origin[key]);
                tar[key] = origin[key];
            }
        }
    }

    return tar;
}

var person1 = deepClone(person);
person.preference.accent = 'American accent';
// var person1 = deepClone(person); 效果不一致
// console.log(person1, person);

(function () {
    var c = 1;
    function Test() {
        console.log(c);
    }
    Test.prototype.a = function () {
        Test.b();
    }
    Test.b = function () {
        console.log('I am a static function of Test constructor');
    }
    // this.window.Test = Test;
})();

const Test = (()=>{
    let c = 1;
    class Test{
        constructor(){
            this.c = 1;
            console.log(c);
        }
        a(){
            Test.b();
        }
        static b(){
            console.log('I am a static function of Test constructor');
        }
    }
})();


let s = new Set();  
  s.add([1]); 
  s.add([1]);
  s.add(1);
  s.add(1);
console.log(s.size,s); // -> 3
console.log(this.window);


