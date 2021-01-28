let s1 = Symbol('foo');
let s2 = Symbol('foo');
console.log(s1 == s2)

let s3 = Symbol.for('foo');
let s4 = Symbol.for('foo');
console.log(Symbol.keyFor(s3))
console.log(s1 == s2)

let s5 = Symbol('foo');
let s6 = Symbol('bar');
let s7 = Symbol('baz');
let s8 = Symbol('quz');

let o = {
    [s5]:'foo val'
}
Object.defineProperty(o,s6,{value:'bar val'})
console.log(o)

Object.defineProperties(o,{
    [s7]:{value:'baz val'},
    [s8]: {value: 'quz val'}
})

console.log(o)

console.log(Object.getOwnPropertySymbols(o))
console.log(Object.getOwnPropertyNames(o))
console.log(Object.getOwnPropertyDescriptors(o))
console.log(Reflect.ownKeys(o))

let arr = new Array(1,2,3);
let dic = {'foo':arr}
console.log(arr);
console.log(dic)
console.log(Object.getPrototypeOf(arr))
console.log(Object.valueOf(dic));
