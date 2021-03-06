var findLengthOfLCIS = function(nums){
    let res = 0;
    let ans = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]<=nums[i-1]){
            // 有下落
            ans = i;
        }
        res = Math.max(res,i-ans+1);
    }
    return res;
}

console.log(findLengthOfLCIS([12,3,1,2,3]));
/**
 * 
 * @param {*} nums 
 * 300. 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
 */
var lengthOfLIS = function( nums){
    // 动态规划，dp[i]表示nums[0...i]最长的递增子序列长度，base case dp[0] = 1 
    let n = nums.length;
    let dp = new Array(n).fill(1);
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
    }
    let res = 0;
    for(let i=0;i<n;i++){
        res = Math.max(res,dp[i]);
    }
    return res;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));