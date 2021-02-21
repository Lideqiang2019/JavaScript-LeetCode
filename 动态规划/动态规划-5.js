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
var coinChange = function(coins, amount) {
    // dp(amout)表示能够凑够amount的最少硬币数，选择，base case
    let memo = {};
    return dp(amount);
    function dp(amount){
        if(amount in memo) return memo[amount];
        if(amount===0){
            return 0;
        }
        if(amount<0) return -1;
        let res = Number.MAX_SAFE_INTEGER;
       
        for(let coin of coins){
            let subproblem = dp(amount-coin);
            if(subproblem===-1){
                continue;
            }
            res = Math.min(res,subproblem + 1); // 如果选择当前的coin       
        }
        memo[amount] = res<Number.MAX_SAFE_INTEGER?res:-1;
        return memo[amount];
    }
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

// let dp = new Array(3).fill(0)
// dp[0] = 1

// for(let i=0;i<3;i++){
//     // console.log("1",i)
//     console.log("m",dp[i])
//     for(let j=1;j<3;j++){
//         console.log("n",dp[i])
//         dp[i] = dp[i]+dp[j]
//         console.log(dp[i])
//     }
// }

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
     * 自顶向下， 用备忘录来优化时间和空间
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

let dic = {}
dic[1] = 'a'
dic[2] = 'b'
console.log(dic)
if(1 in dic){
    console.log(dic[1])
}

/**
 * 
 */
let n =3
let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0).map(y=>new Array(2).fill(0)))
console.log(dp)
console.log(dp[1][1][1])

/**
 * 买卖股票
 */
var maxProfit = function(prices) {
    /**
     * 最大利润
     * dp[i][j]表示第i天和j持有或者非持有，买卖股票的最大值
     * dp[i][0] = Math.max(dp[i-1][0] , dp[i-1][1]+prices[i])
     * dp[i][1] = Math.max(dp[i-1][0] , dp[i-1][1]) 
     * base case 就一只股票， dp[0][0] = 0
     * dp[n-1][0]即为所求，
     * 优化内存
     */
    /**
     * let n = prices.length;
    if(n===0) return 0
    // let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0))
    let dp_0 = 0, dp_1 = 0, dp_i_0 = 0, dp_i_1 = 0;
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp[i][0] = 0
            dp[i][1] = -prices[i]
            continue;
        }
        dp[i][0] = Math.max(dp[i-1][0] , dp[i-1][1]+prices[i])
        dp[i][1] = Math.max(-prices[i] , dp[i-1][1]) 
    }
    return dp[n-1][0]
     */
    let n = prices.length;
    if(n===0) return 0
    // let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0))
    let dp_i_0 = 0, dp_i_1 = -11111;
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp_i_0 = 0
            dp_i_1 = -prices[i]
            continue;
        }
        dp_i_0 = Math.max(dp_i_0 , dp_i_1+prices[i])
        dp_i_1 = Math.max(-prices[i] , dp_i_1) 
    }
    return dp_i_0
    
};

var maxProfit = function(prices) {
    /**
     * k = infinit 此时k = k-1
    * dp[i][0] = Math.max(dp[i-1][0] , dp[i-1][1]+prices[i])
    * dp[i][1] = Math.max(dp[i-1][0] -prices[i] , dp[i-1][1]) 
    */
    let n = prices.length;
    if(n===0) return 0
    // let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0))
    let dp_i_0 = 0, dp_i_1 = -11111;
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp_i_0 = 0
            dp_i_1 = -prices[i]
            continue;
        }
        let tmp = dp_i_0;
        dp_i_0 = Math.max(tmp , dp_i_1+prices[i])
        dp_i_1 = Math.max(tmp-prices[i] , dp_i_1) 
    }
    return dp_i_0
};

var maxProfit = function(prices) {
    /**
    * 最大利润
    * dp[i][k][j]表示第i天和j持有或者非持有，买卖股票的最大值, k=2
    * dp[i][k][0] = Math.max(dp[i-1][k][0] , dp[i-1][k][1]+prices[i])
    * dp[i][k][1] = Math.max(dp[i-1][k-1][0]-prices[i] , dp[i-1][k][1]) 
    * base case 就一只股票， dp[0][0] = 0
    * dp[n-1][0]即为所求，
    * 优化内存,让买入为一次交易
    */
   let n = prices.length;
   let max_k = 2
   let dp = new Array(n).fill(0).map(x=>new Array(max_k+1).fill(0).map(y=>new Array(2).fill(0)))
   for(let i=0;i<n;i++){
       for(let k = max_k;k>0;k--){
           if(i-1===-1){
               dp[i][k][0] = 0
               dp[i][k][1] = -prices[i]
               continue;
           }
           dp[i][k][0] = Math.max(dp[i-1][k][0] , dp[i-1][k][1]+prices[i])
           dp[i][k][1] = Math.max(dp[i-1][k-1][0]-prices[i] , dp[i-1][k][1]) 
       }
   }
   return dp[n-1][max_k][0]
};

var maxProfit = function(k, prices) {
    /**
     * 最大利润
     * dp[i][k][j]表示第i天和j持有或者非持有，买卖股票的最大值
     * dp[i][k][0] = Math.max(dp[i-1][k][0] , dp[i-1][k][1]+prices[i])
     * dp[i][k][1] = Math.max(dp[i-1][k-1][0] -prices[i] , dp[i-1][k][1]) 
     * base case 就一只股票， dp[0][0] = 0
     * dp[n-1][0]即为所求，
     * 优化内存,让买入为一次交易
     */
    var maxProfit_k_inf = function(prices) {
    /**
     * k = infinit 此时k = k-1
    * dp[i][0] = Math.max(dp[i-1][0] , dp[i-1][1]+prices[i])
    * dp[i][1] = Math.max(dp[i-1][0] -prices[i] , dp[i-1][1]) 
    */
    let n = prices.length;
    if(n===0) return 0
    // let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0))
    let dp_i_0 = 0, dp_i_1 = -11111;
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp_i_0 = 0
            dp_i_1 = -prices[i]
            continue;
        }
        let tmp = dp_i_0;
        dp_i_0 = Math.max(tmp , dp_i_1+prices[i])
        dp_i_1 = Math.max(tmp-prices[i] , dp_i_1) 
    }
    return dp_i_0
    };
    let n = prices.length;
    let max_k = k
    let dp = new Array(n).fill(0).map(x=>new Array(max_k+1).fill(0).map(y=>new Array(2).fill(0)))
    if(k>n/2){
        return maxProfit_k_inf(prices)
    }
    for(let i=0;i<n;i++){
        for(let k = max_k;k>0;k--){
            if(i-1===-1){
                dp[i][k][0] = 0
                dp[i][k][1] = -prices[i]
                continue;
            }
            dp[i][k][0] = Math.max(dp[i-1][k][0] , dp[i-1][k][1]+prices[i])
            dp[i][k][1] = Math.max(dp[i-1][k-1][0]-prices[i] , dp[i-1][k][1]) 
        }
    }
    return dp[n-1][max_k][0]


};

var maxProfit = function(prices) {
    /**
     * 冷冻期，需要修改买入时的时刻
     * dp[i][0] = Math.max(dp[i-1][0] , dp[i-1][1]+prices[i])
     * dp[i][1] = Math.max(dp[i-2][0] -prices[i] , dp[i-1][1]) 
     */
    let n = prices.length;
    if(n===0) return 0
    // let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0))
    let dp_i_0 = 0, dp_i_1 = -11111;
    let dp_i_pre = 0;
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp_i_0 = 0
            dp_i_1 = -prices[i]
            continue;
        }
        let tmp = dp_i_0
        dp_i_0 = Math.max(dp_i_0 , dp_i_1+prices[i])
        dp_i_1 = Math.max(dp_i_pre-prices[i] , dp_i_1)
        dp_i_pre = tmp 
    }
    return dp_i_0
};

var maxProfit = function(prices, fee) {
    /**
    * 需要手续费，购买时候减去即可
    * dp[i][0] = Math.max(dp[i-1][0] , dp[i-1][1]+prices[i])
    * dp[i][1] = Math.max(dp[i-1][0] -prices[i] - fee , dp[i-1][1]) 
    */
   let n = prices.length;
   if(n===0) return 0
   let dp_i_0 = 0, dp_i_1 = -111111111;
   for(let i=0;i<n;i++){
       let tmp = dp_i_0
       dp_i_0 = Math.max(dp_i_0 , dp_i_1+prices[i])
       dp_i_1 = Math.max(tmp - prices[i] -fee , dp_i_1) 
   }
   return dp_i_0
};