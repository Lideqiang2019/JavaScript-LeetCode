/**
 * 72. 编辑距离
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
 */
var minDistance = function(word1, word2) {
    // dp(i,j)表示word1[...i],word2[...j]的最小编辑距离
    // base case dp(0,j),word1空，那么根据word2的长度来算需要插入的次数，dp(i,0)=0，不用计算
    // 转移方程 1. word1[i]==word2[j] 那么dp(i,j) = dp(i-1,j-1),斗则就从增删改三者中取编辑距离较小的+1即可
    function dp(i,j){
        if(i<0){
            return j+1;
        }
        if(j<0){
            return i+1;
        }
        let s = `${i},${j}`;
        let res = 0;
        if(s in memo){
            return memo[s];
        }
        if(word1[i]===word2[j]){
            res =  dp(i-1,j-1);
        }else{
            res = minD(dp(i-1,j),dp(i,j-1),dp(i-1,j-1))+1;
        }
        memo[s] = res;
        return res;
    }  
    function minD(a,b,c){
        return Math.min(a,Math.min(b,c));
    }
    let memo = {};
    return dp(word1.length-1,word2.length-1);
};

var minDistance = function(word1, word2) {
    // dp[i][j]表示word1[0...i]和word2[0...j]最小编辑距离
    let m = word1.length,
        n = word2.length;
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0));
    for(let i=0;i<=m;i++){
        dp[i][0] = i;
    }
    for(let j=0;j<=n;j++){
        dp[0][j] = j;
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(word1[i-1]===word2[j-1]){
                dp[i][j] = dp[i-1][j-1];// 直接跳过
            }else{
                dp[i][j] = minD(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;
            }
        }
    }
    return dp[m][n];
    function minD(a,b,c){
        return Math.min(a,Math.min(b,c));
    }
};