// 自顶向下
function longestCommonSequence(str1,str2){
    // 定义dp(i,j)为str1[0...i]和str2[0...j]有的common的字符的个数
    function dp(i,j){
        if(i===-1 || j===-1){
            return 0;
        }
        if(str1[i]===str2[j]){
            return dp(i-1,j-1) + 1;
        }else{
            return Math.max(dp(i-1,j),dp(i,j-1)); 
        }
    }
    return dp(str1.length-1,str2.length-1);
}

console.log(longestCommonSequence('abcde','bdn'));

// 自底向上
function longestCommonSequencePro(str1,str2){
    let m = str1.length,
        n = str2.length;
    // 定义dp[i][j]为s1[0..i-1] s2[0..j-1]
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0));
    // base case
    // dp[0][..]或者dp[..][0]
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(str1[i-1]===str2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j]);
            }
        }
    }
    return dp[m][n];
}
console.log(longestCommonSequencePro('abcde','ace'));