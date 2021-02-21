let arr = [
    [1,2,3],
    [4,[5,6,[7,8,9]]],
    10,
    [11,[12,13]]
];

// 1. toString方法
// console.log(arr.toString().split(',').map(x=>parseFloat(x)));

// 2. JSON.parse方法，配合正则
// console.log(JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(x=>parseFloat(x)))

// 3. isArray方法，配合array.some使用，循环验证, [].concat()默认是打平数组的
// while(arr.some(item=>Array.isArray(item))){ // 如果有，就应该迭代
//     arr = [].concat(...arr); // 将拍平的数组，给原数组，继续拍
// }

// console.log(arr);

// 4. 递归
// let res = [];
// function traverse(arr){
//     for(let i=0;i<arr.length;i++){
//         if(Number.isInteger(arr[i])){
//             // 如果是Array,继续递归，直到不是数
//             res.push(arr[i]);
//         }else{
//             traverse(arr[i]); // 进场递归一旦不是array
//         }
//     }
// }
// traverse(arr);
// console.log(res);

let arr1 = [1,[2,[3,4]]];
// 迭代方法,一直向内找到6,找到的同时
let right = arr1;
let res = [];
let tmp = null;
while(right.length){
    tmp = [right[0],tmp];
    right = right[1];
}
tmp = [right,tmp];
console.log(right);

console.log(tmp);