// 查找数组中的第二大的数，要求时间复杂度为O（n）
// k = 2
function findKNum(nums){
    let max = nums[0],
        second = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            second = max; // 这个很重要，要将大旗给第二个变量
            max = nums[i]; // 更新最大值
        }else{
            // 如果不大于max则判断是否大于第二大的值，如果大于则赋值，否则跳过
            if(nums[i]>second){
                second = nums[i];
            }
        }
    }
    return [max,second];
}

console.log(findKNum(Array.from(range(199))));

function* range(n){
    for(let i=0;i<n;i++){
        yield i;
    }
}

// console.log(Array.from(range(19)));

// function sum(...args){
//     let nums = [...args];
//     let sum = 0;
//     for(let i=0;i<nums.length;i++){
//         sum += nums[i];
//     }
//     return sum;
// }

// console.log(sum(1,2,2,3,2));
// var add = function (m) {
 
//     var temp = function (n) {
//         return add(m + n);
//     }
 
//     temp.toString = function () {
//         return m;
//     }
 
//     return temp;
// };
// console.log(add(1)(2)(3).toString());
 

// function add(...arg) {
//     var a = [...arg];
//     _add = function (...innerArg) {
//       if (innerArg.length === 0) {
//         return a.reduce(function (a, b) { return a + b })
//       } else {
//         [].push.apply(a, innerArg)
//         return _add;
//       }
//     }
//     return _add
//   }
// console.log(add(1)(2)(3)() )   // 6

// function plus(...args){
//     var a = [...args];
//     function _add(...innerArgs){// 返回结果和
//         // 递归
//         if(innerArgs.length===0){
//             // 最后一个调用
//             return a.reduce(function(a,b){return a + b});
//         }else{
//             // 否则,递归取形参
//             // [].push.apply(a, innerArgs);
//             a.push(...innerArgs);
//             return _add;
//         }
//     } 
//     return _add;
// }
// console.log(plus(1)(1)(3)());
function plus(...args){
    return function (a){
        return function(b){
            let innerArgs = [...args];
            innerArgs.push(a);
            innerArgs.push(b);
            return innerArgs.reduce(function(a,b){return a+b});
        }
    }
}

console.log(plus(1,3)(2)(1));