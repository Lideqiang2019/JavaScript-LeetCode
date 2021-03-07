/**
 * 1312. 让字符串成为回文串的最少插入次数
给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。

请你返回让 s 成为回文串的 最少操作次数 。

「回文串」是正读和反读都相同的字符串。

 

示例 1：

输入：s = "zzazz"
输出：0
解释：字符串 "zzazz" 已经是回文串了，所以不需要做任何插入操作。
示例 2：

输入：s = "mbadm"
输出：2
解释：字符串可变为 "mbdadbm" 或者 "mdbabdm" 。
示例 3：

输入：s = "leetcode"
输出：5
解释：插入 5 个字符后字符串变为 "leetcodocteel" 。
示例 4：

输入：s = "g"
输出：0
示例 5：

输入：s = "no"
输出：1
 */
var minInsertions = function(s) {
    // dp[i][j]表示s[i...j]为回文串最小的插入次数
    // base case dp[i][i]=0 无需插入，已经是长度为1的回文串了
    let n = s.length;
    let dp = new Array(n).fill(0).map(x=>new Array(n).fill(0));
    for(let i=n-2;i>=0;i--){
        for(let j=i+1;j<n;j++){
            if(s[i]===s[j]){
                // 无需插入
                dp[i][j] = dp[i+1][j-1];
            }else{
                dp[i][j] = Math.min(dp[i][j-1]+1,dp[i+1][j]+1);
            }
        }
    }
    return dp[0][n-1];
};