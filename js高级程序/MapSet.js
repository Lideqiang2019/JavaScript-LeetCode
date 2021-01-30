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

let arr1 = [{}];
let arr2 = [...arr1];
arr1[0].foo = 'bar';
console.log(arr2[0]); // { foo: 'bar' }

let arr3 = {num:1};
let arr4 = arr3;
arr3.num = 3;
console.log(arr4);// {num: 3}

let arr5 = {num:1, name:{
    city:'shanghai'
}};
let arr6 = {...arr5,num:2};
arr5.num = 3;
arr6.name.city = 'nanjing';
console.log(arr6);// { num: 1, name: { city: 'nanjing' } }

