/**
 * 四键键盘问题，说明状态和选择的不同，算法的复杂度所受影响极大，给出一个简单解法
 * 一、
 * 1. 定义dp(n,a_sum,copy)，为当前所剩的n次，a_sum为A的总数，copy为当前选择,max(dp(n-1,a_sum+1,copy),dp(n-1,a_sum+copy,copy),dp(n-2,a_sum,copy))
 * 2. 但是没有考虑更加复杂的情况，会导致有很多重复的选择，即便用了memo来优化，仍然会有一些没有必要的递归。
 * 二、
 * 定义dp[i]为按下i次，能够获得A的最大值
 */

function maxA(N){
    let dp = new Array(N+1).fill(0);
    for(let i=1;i<=N;i++){
        dp[i] = dp[i-1]+1 // =如果N较小的话，直接键入A即可
        for(let j=2;j<i;j++){
            dp[i] = Math.max(dp[i],dp[j-2]*(i-j+1))
        }
    }
    return dp[N]
}
console.log(maxA(7))
