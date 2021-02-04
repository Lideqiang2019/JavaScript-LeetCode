function Test(){
    let a:string = 'hello World';
    console.log(a);
}
// Test();

// 基本的6中数据类型
let s:string = 'a';
let a:number = 1;
let b:boolean = true;
let n:null = null;
let u:undefined = undefined;
let sy = Symbol('1');
console.log(s,a,b,n,u,sy);

// 引用数据类型
let arr:number[] = [1,2,3];
let arr1:Array<number> = [1,2,3];
console.log(arr,arr1);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
const student :{
    name:string,
    age:number
}={
    name:'xiaoming',
    age:18
}

class Person{}
const p:Person = new Person();

const getName:()=>string = ()=>{return 'xiaoming'};

let count:number;
count = 2;

function getTotal(one:number,two:number){
    return one + two;
}

function getAge():void{
    console.log(18);
}

export {};