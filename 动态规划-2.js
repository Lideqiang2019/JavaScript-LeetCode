// 最大连续子序列之和
var maxSubArray = function(nums) {
    // dp[i]为以nums[i]为结尾的子数组的最大和
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    // 找递推，如果i=5,什么情况下需要将nums[5]加入
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(nums[i],dp[i-1]+nums[i])
    }
    return Math.max(...dp)
};

// 优化，因为dp[i] 只和dp[i-1]有关，但与dp[i-2]等无关，所以可以将空间复杂度降低到O(1)
var maxSubArray = function(nums) {
    // dp[i]为以nums[i]为结尾的子数组的最大和
    let n = nums.length
    if(n===0){
        return 0;
    }
    let dp_0 = nums[0];
    let dp_1 = 0;
    let res = dp_0;
    // 找递推，如果i=5,什么情况下需要将nums[5]加入
    for(let i=1;i<nums.length;i++){
        dp_1 = Math.max(nums[i],dp_0+nums[i])
        dp_0 = dp_1
        res = Math.max(res,dp_1)
    }
    return res
};

var m = 3;
var n =4;
var dp = new Array(m+1).fill(0)
for(let i=0;i<=n;i++){
    dp[i] = new Array(n+1).fill(0)
}
// console.log(dp)

var text1 = "abcde"
var text2 = "ace"
var longestCommonSubsequence = function(text1, text2) {
    // 子序列问题很有可能要用动态规划解决
    // 应该是以个二维的dp table dp[i][j]表示取text1取i,text取j时，最长公共子序列的值
    // 构造base case
    let m = text1.length;
    let n = text2.length;
    let dp = new Array(m+1).fill(0)
    for(let i=0;i<=m+1;i++){
        dp[i] = new Array(n+1).fill(0)
    }
    console.log(dp)
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(text1[i-1]==text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
                console.log("1",dp[i][j])
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
                console.log("2",dp[i][j])
            }
        }
    }
    return dp[m][n];
};
console.log(longestCommonSubsequence(text1,text2))

/**
 * 编辑距离，比较难以理解
 */
var minDistance = function(word1, word2) {
    // dp[i][j]代表以word1[i]word2[j]为当前字符的最小编辑距离，能用动态规划是因为求极值问题
    var m = word1.length;
    var n = word2.length;
    var dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    for(let i=0;i<=m;i++){
        // word1转成word2,word1为空
        dp[i][0] = i;
    }
    for(let j=0;j<=n;j++){
        dp[0][j] = j;
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(word1[i-1]===word2[j-1]){
                // 相等就跳过不做操作
                dp[i][j] = dp[i-1][j-1]
            }else{
                dp[i][j] = min(
                    dp[i-1][j]+1,// 删除
                    dp[i-1][j-1]+1,// 替换
                    dp[i][j-1]+1 // 增添
                )
            }
        }
    }
    return dp[m][n]
    function min(a,b,c){
        return Math.min(a,Math.min(b,c))
    }
    
};