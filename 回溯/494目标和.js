/**
 * 494. 目标和
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

 

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。

 */
// 回溯法
var findTargetSumWays = function(nums, S) {
    if(!nums.length) return 0;
    let res = 0;
    
    backtrack(nums,0,S);
    return res;
    function backtrack(nums,i,rest){
        if(i===nums.length){
            // 结束条件
            if(rest===0){
                res++;
            }
            return; // 一定要手动return
        }
        // 做选择
        rest -= nums[i];
        backtrack(nums,i+1,rest);
        rest += nums[i];

        rest += nums[i];
        backtrack(nums,i+1,rest);
        rest -= nums[i];
    }
}

console.log(findTargetSumWays([1, 1, 1, 1, 1],3));
// 优化，有子问题重叠，可以用memo去除重复的路径
var findTargetSumWaysPro = function(nums,S){
    if(!nums.length) return 0;
    let memo = new Map();
    return dp(nums,0,S);
    function dp(nums,i,rest){ // 返回能够满足结果的个数
        if(i===nums.length){
            // 结束条件
            if(rest===0){
                return 1;
            }
            return 0; // 一定要手动return
        }
        let s = i.toString() + ',' + rest.toString();
        if(memo.has(s)){
            return memo.get(s);
        }
        let result = dp(nums,i+1,rest-nums[i]) + dp(nums,i+1,rest+nums[i]);
        memo.set(s,result);
        return result;
    }
}

console.log(findTargetSumWaysPro([1, 1, 1, 1, 1],3));

// 背包解法
/**
 * 转化成0-1背包问题sum(A) - Sum(B) = S
 * 2*sum(A) = sum(B) + sum(A) +S
 * 2* sum(A) = sum + S
 * sum(A = (sum+S)/2
 */
var findTargetSumWaysProMax = function(nums,S){
    let sum = 0;
    let n = nums.length;
    for(let num of nums){
        sum +=num;
    }
    if(sum<S) return 0;
    if((sum+S)%2!=0) return 0;
    let sum_A = (sum+S)/2;
    // dp定义dp[i][j]表示选择nums[0...i],当前还有j重量的空间下，有dp中方法可以装满包
    // base case dp[...][0] = 1; dp[0][...] = 0;
    let dp = new Array(n+1).fill(0).map(x=>new Array(sum_A+1).fill(0));
    for(let i=0;i<n;i++){
        dp[i][0] = 1;
    }
    for(let i=1;i<=n;i++){
        for(let j=n-1;j>=0;j--){
            if(nums[i-1]>j){
                dp[i][j] = dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]]
            }
        }
    }
    return dp[n][sum_A];
}

console.log(findTargetSumWaysProMax([1, 1, 1, 1, 1],3));