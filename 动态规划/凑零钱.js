/**
 * 322. 零钱兑换
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
示例 4：

输入：coins = [1], amount = 1
输出：1
 */
// dp递归,自顶向下
// 明确dp含义dp(amount) 输入amount，能够拼凑出amount最少的硬币数
function coinChange(coins,amount){
    let count = 0;
    let  memo = {};
    return dp(amount);
    function printIndent(n){
        let s = '';
        for(let i=0;i<n;i++){
            s +='   ';
        }
        return s;
    }
    function dp(amount){
        // base case
        console.log(printIndent(count++)+`amount=${amount}`);
        if(amount in memo){
            return memo[amount];
        }
        if(amount===0){
            console.log(printIndent(--count)+`return 0`);
            return 0;
        }
        if(amount<0){
            console.log(printIndent(--count)+`return -1`);
            return -1;
        }
        let res = Number.MAX_SAFE_INTEGER;
        // 选择
        for(let coin of coins){
            let subProble = dp(amount-coin);
            if(subProble===-1) continue; // 跳过选择
            res = Math.min(subProble+1,res);
        }
        console.log(printIndent(--count)+`return ${res}`);
        memo[amount] = res;
        return res===Number.MAX_SAFE_INTEGER?-1:res;
    }
}
// console.log(coinChange([1, 2, 5],11));

// 自底向上
// dp[amount]表示还是amount，最少的拼凑数
function coinChangePro(coins,amount){
    let dp = new Array(amount+1).fill(amount+1);
    // base case
    dp[0] = 0;
    for(let i=1;i<=amount;i++){
        // 对于每个dp都有很多选择
        for(coin of coins){
            if((i-coin)<0){
                continue;
            }
            dp[i] = Math.min(dp[i],dp[i-coin]+1);
        }
    }
    return dp[amount]===amount+1?-1:dp[amount];
}
console.log(coinChangePro([2],11));