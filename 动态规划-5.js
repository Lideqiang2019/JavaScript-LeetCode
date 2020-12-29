/**
 * 凑硬币问题
 */
// conins = [1,2,3]
// for(let coin of conins){
//     console.log(coin)
// }
var coinChange = function(coins, amount) {
    /**
     * 最少，有点点动态规划的意思，也符合子结构不相干的
     * 状态选择，状态只有一个就是总数amount，选当前的硬币或者不选
     * dp[i]表示以目标金额为i时，当前选择值的最少硬币数，求解的dp[amount]即为所求
     * base case： 当dp[0] = 0
     * 注意 let coin in coins 是coin的索引，coin of coins返回的值
     */
    let dp = new Array(amount+1).fill(amount+1)
    dp[0] = 0;
    for(let i=0;i<dp.length;i++){
        for(let coin of coins){
            if(i-coin<0){
                // 当前的目标金额，没有硬币可以匹配，跳过继续
                continue;
            }
            dp[i] = Math.min(dp[i],dp[i-coin]+1) // 选当前硬币或者不选
        }
    }
    return (dp[amount]===amount+1)?-1:dp[amount]
};

/**
 * 求能够组合数
 */
var change = function(amount, coins) {
    /**
     * 状态与转移：状态是amount和可选择的物品，选择是装不装包
     * dp[i][j]定义为使用前i装包，当背包容量为j时，方法数
     * base case，dp[0][...]=0, dp[..][0] = 1
     * 求解的结果就是dp[N][0]
     */
    let n = coins.length;
    let dp = new Array(n+1).fill(0).map(x=>new Array(amount+1).fill(0))
    for(let i=0;i<=n;i++){
        dp[i][0] = 1;
    }
    for(let i=1;i<=n;i++){
        for(let j=1;j<=amount;j++){
            if(j-coins[i-1]<0){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
            }
        }
    }
    return dp[n][amount]
};

let dp = new Array(3).fill(0)
dp[0] = 1

for(let i=0;i<3;i++){
    // console.log("1",i)
    console.log("m",dp[i])
    for(let j=1;j<3;j++){
        console.log("n",dp[i])
        dp[i] = dp[i]+dp[j]
        console.log(dp[i])
    }
}

/**
 * 经典打家劫舍问题
 * 状态是总钱数，选择是rob还是跳过
 * dp[i]表示打劫到第i家所取得的最大钱数
 * base case是0
 * return dp[n],n=nums.length
 */
var rob = function(nums) {
    /**
     * 
     */
    let n = nums.length;
    let dp = new Array(n+2).fill(0)
    for(let i=n-1;i>=0;i--){
        dp[i] = Math.max(dp[i+2]+nums[i],dp[i+1])
    }
    return dp[0]
};
var rob = function(nums) {
    /**
     * 自顶向下，用备忘录来优化时间和空间
     */
    let memo = new Array(nums.length+2).fill(-1)
    return dp(nums,0)
    function dp(nums,start){
        if(memo[start]!==-1){
            return memo[start]
        }
        if(start>=nums.length){
            return 0
        }
        let res = Math.max(dp(nums,start+1),dp(nums,start+2)+nums[start])
        memo[start] = res
        return res
    }
};