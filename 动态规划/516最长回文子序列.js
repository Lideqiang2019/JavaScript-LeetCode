/**
 * 516. 最长回文子序列
给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。

 

示例 1:
输入:

"bbbab"
输出:

4
 */
var longestPalindromeSubseq = function(s) {
    // dp[i][j]表示s[i...j]中回文子序列最长长度
    // base case dp[i][i] = 1, dp[i][j](i>j)=0
    // 转移方程 dp[i][j] (s[i]=s[j]) = dp[i+1][j-1]+1
    // dp[i][j] (s[i]!=s[j])= max(dp[i][j-1]+1,dp[i+1][j]+1) 
    let n = s.length;
    let dp = new Array(n).fill(0).map(x=>new Array(n).fill(0));
    for(let i=0;i<n;i++){
        dp[i][i] = 1;
    }
    for(let i=n-2;i>=0;i--){
        for(let j=i+1;j<n;j++){
            if(s[i]===s[j]){
                dp[i][j] = dp[i+1][j-1]+2;
            }else{
                dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]);
            }
        }
    }
    return dp[0][n-1];
};