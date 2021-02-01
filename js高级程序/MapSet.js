// map
let map  = new Map();
map.set(1,{a:'1'});
map.set(2,{b:'2'});
console.log(map.get(1));
console.log(map.entries());
console.log(map.keys());
console.log(map.size);
map.forEach((item,key)=>console.log(item,key));

// set
let set = new Set();
set.add(1);
set.add(3);
console.log(set);
set.add(1);
console.log(set);
console.log(set.size);

console.log(Math.floor(5/2))
console.log(Math.ceil(-5/2))
// console.log(0+'-2'+'3')

let stack = [];
stack.push('-2');
stack.push('3');
stack.push('4');
console.log(stack);
console.log(stack.reduce((pre,cur)=>pre+(cur|0),0));
console.log(('13'|0));
/*
let arr1 = [];
let arr2 = [...arr1];
arr1[0] = 'bar';
arr2[0] = 'foo';
console.log(arr1,arr2); // [ 'bar' ] [ 'foo' ]
*/

let arr1 = [{}];
let arr2 = [...arr1];
arr1[0].bar = 'bar';
arr2[0].foo = 'foo';
console.log(arr1,arr2); // []才是根属性，这里的浅拷贝是拷贝根属性的引用对象，就是皮肉，没有到骨髓[ { bar: 'bar', foo: 'foo' } ] [ { bar: 'bar', foo: 'foo' } ]

let arr3 = {num:1};
let arr4 = arr3;
arr3.num = 3;
console.log(arr4);// {num: 3}

let arr5 = {num:1, name:{
    city:'shanghai'
}};
let arr6 = {...arr5};
arr5.num = 3;
arr5.name.city = 'nanjing';
console.log(arr6);// { num: 2, name: { city: 'nanjing' } }
console.log(arr5);// { num: 3, name: { city: 'nanjing' } }

