/**
<<<<<<< HEAD
 * 正则表达式匹配检查
 */
let map = new Map();
key = "1"
map.set(key,1)
console.log(map.get(key))
console.log(map.has(key))

dic[1] = "ss"
dic[2] = "sss"
console.log(dic[1])
console.log(2 in dic)
var isMatch = function(s, p) {
    // 状态与选择
    // dp表示s[i..]与p[j..]能够匹配,做这题说明dp的形式可以多样的，其实也有点回溯算法的意思。
    // 2. 选择列
    return dp(s,0,p,0)
    function dp(s,i,p,j){
        let m=s.length, n=p.length;
        // 1. 结束条件
        if(j===n){
            return i===m;
        }
        if(i===m){
            if((n-j)%2===1){
                return false;
            }
            // 检查是否为x*y*z*形式
            for(;j+1<n;j+=2){
                if(p[j+1]!='*'){
                    return false;
                }
            }
            return true;
        }
        // 记录i,j消除重叠子wenti 
        let memo = {}
        let key = i.toString() + ',' + j.toString();
        if(key in memo){
            return memo[key];
        }
        var res = false;
        if(s[i]===p[j] || p[j]==='.'){
            if(j<n-1&&p[j+1]==='*'){
                // p有*，匹配0个或者多个
                res = dp(s,i,p,j+2) || dp(s,i+1,p,j)
            }else{
                res = dp(s,i+1,p,j+1)
            }
        }else{
            if(j<n-1&&p[j+1]==='*'){
                res = dp(s,i,p,j+2)
            }else{
                res = false;
            }
        }
        // 将当前结果记入备忘录
        memo[key] = res;
        return res;
    }
};
/* 
 * 四键键盘问题，说明状态和选择的不同，算法的复杂度所受影响极大，给出一个简单解法
 * 一、
 * 1. 定义dp(n,a_sum,copy)，为当前所剩的n次，a_sum为A的总数，copy为当前选择,max(dp(n-1,a_sum+1,copy),dp(n-1,a_sum+copy,copy),dp(n-2,a_sum,copy))
 * 2. 但是没有考虑更加复杂的情况，会导致有很多重复的选择，即便用了memo来优化，仍然会有一些没有必要的递归。
 * 二、
 * 定义dp[i]为按下i次，能够获得A的最大值
 */

function maxA(N) {
    let dp = new Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i - 1] + 1 // =如果N较小的话，直接键入A即可
        for (let j = 2; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[j - 2] * (i - j + 1))
        }
    }
    return dp[N]
}
// console.log(maxA(7))
// var memo = {}
// memo["1,2"] = 3
// console.log(memo)
/**
 * 高楼扔鸡蛋
 */
var superEggDrop = function (K, N) {
    /**
     * dp（k,n）k还有的鸡蛋个数,还剩的楼层数n
     */
    let memo = {}
    function dp(K, N) {
        if (K === 1) { return N }
        if (N === 0) { return 0 }
        let s = K.toString() + ',' + N.toString()
        if (s in memo) {
            return memo[s]
        }
        let res = 1000000;
        /*
       for(let i=1;i<=N;i++){
           res = Math.min(res,Math.max(
               dp(K,N-i),// 鸡蛋没有碎
               dp(K-1,i-1) // 鸡蛋碎掉了
           )+1)
       }
       */
        // 优化一个版本,使用二分查找，查找恰好能够摔乱鸡蛋的楼层数
        let lo = 1, hi = N;
        while (lo <= hi) {
            let mid = lo + Math.floor(((hi - lo) / 2))
            let broken = dp(K - 1, mid - 1)
            let not_broken = dp(K, N - mid)
            if (broken > not_broken) {
                hi = mid - 1
                res = Math.min(res, broken + 1)
            } else {
                lo = mid + 1
                res = Math.min(res, not_broken + 1)
            }
        }
        memo[s] = res
        return res
    }
    return dp(K, N)
};

/**
 * 礼物的最大价值
 */
var maxValue = function(grid) {
    /**
     * 步数是确定的，选择只有向右或者向下
     * dp[i][j]表示当前所在位置的最大值，0=<i<=m,0=<j<=n,
     * dp[i][j] = max(dp[i-1]][j],dp[i][j-1]),
     * 返回右下角元素
     * O(MN)
     */
    let m = grid.length, n = grid[0].length
    let dp = new Array(m).fill(0).map(x=>new Array(n).fill(0))
    dp[0][0] = grid[0][0]
    // 1. 只有一列
    for(let i=1;i<m;i++){
        dp[i][0] = dp[i-1][0] + grid[i][0]
    }
    for(let j=1;j<n;j++){
        dp[0][j] = dp[0][j-1] + grid[0][j]
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]) + grid[i][j]
        }
    }
    return dp[m-1][n-1]
};

/**
 * 戳气球问题
 */
var maxCoins = function(nums) {
    /**
     * dp[i][j] = x；表示i,j之间所有的气球被戳破能获得的最大分数
     * base case i=j dp[i][i] = 0
     * 有一个特殊的情况，需要添加points[0] = points[n+1] = 1, 这样就形成了开区间内(i,j)的最大分数，最终dp[0][n+1]即为所求
     */
    let n = nums.length;
    let points = new Array(n+2)
    points[0] = points[n+1] = 1
    for(let i=1;i<=n;i++){
        points[i] = nums[i-1]
    }
    let dp = new Array(n+2).fill(0).map(x=>new Array(n+2).fill(0))
    for(let i=n;i>=0;i--){
        for(let j=i+1;j<=n+1;j++){
            for(let k=i+1;k<j;k++){
                dp[i][j] = Math.max(dp[i][j],
                dp[i][k]+dp[k][j] + points[i]*points[j]*points[k]
                )
            }
        }
    }
    return dp[0][n+1]
};

