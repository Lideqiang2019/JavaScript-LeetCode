/**
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