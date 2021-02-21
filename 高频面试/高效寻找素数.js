var findPrims = function(n){
    let count = 0, res = [];
    for(let i=2;i<n;i++){
        if(isPrim(i)){
            count++;
            res.push(i);
        }
    }
    return [count,res];
    function isPrim(m){
        for(let i=2;i*i<=m;i++){
            if(m%i===0){
                return false;
            }
        }
        return true;
    }
}

console.log(findPrims(9));

function countPrims(n){
    let count = 0;
    let arr = new Array(n).fill(true);
    for(let i=2;i*i<n;i++){
        if(arr[i]){
            // 判断不是素数？
            for(let j=i*i;j<n;j+=i){
                arr[j] = false;
            }
        }
    }
    for(let i=2;i<n;i++){
        if(arr[i]){
            count++;
        }
    }
    return count;
}

console.log(countPrims(9));

let n = 20, i = 3;
for(let j=i*2;j<n;j+=i){
    console.log(j);
}

let nums = [10,9,2,5,3,7,101,18];
var lengthOfLIS = function(nums){
    let n = nums.length;
    let dp = new Array(n).fill(0);

    for(let i = 0;i<n;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = Math.max(dp[i-1],dp[i-1]+1);
            }
        }
    }
    return Math.max(...dp);
}
console.log(lengthOfLIS(nums));

console.log('............');
// 用动态规划解决斐波那契数列
// function fib(n){
//     if(n<2) return n;
//     return fib(n-1) + fib(n-2);
// }
// console.log(fib(5));

// 备忘录优化版本
// function fib(n){
//     let memo = {};
//     return hepler(n,memo);
//     function hepler(n,memo){
//         if(n<2) return n;
//         if(n in memo) return memo[n];
//         memo[n] = fib(n-1) + fib(n-2);
//         return memo[n];
//     }
// }
// console.log(fib(5));

// 迭代解法
function fib(n){
    // dp[i]表示斐波那契额数列的解
    // dp[i] = dp[i-1]+dp[i-2];
    // let dp = new Array(n+1).fill(0);
    // dp[0] = 0;
    // dp[1] = 1;
    // for(let i=2;i<=n;i++){
    //     dp[i] = dp[i-1]+dp[i-2];
    // }
    // return dp[n];
    // dp[i] 只和前面两个值相关，可以优化空间复杂度为O(1)
    let a = 1, b=1;
    let sum = 0;
    for(let i=3;i<=n;i++){
        sum = a + b;
        b = a;
        a = sum;
    }
    return a;
}
console.log(fib(5));