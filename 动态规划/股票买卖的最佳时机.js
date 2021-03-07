/**
 * 
 * @param {*} prices 
 * @returns 
 * 121. 买卖股票的最佳时机
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 

示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */
var maxProfit = function (prices) {
    // dp[i][1]表示i天买入持有，dp[j][0]表示第j天卖出的最大利润
    // base case 
    // dp[i][0] = Math.max(dp[i-1][1]+prices[i],dp[i-1][0])非持有
    // dp[i][1] = Math.max(dp[i-1][1],-price[i])
    let n = prices.length;
    if (n === 0) return 0;
    let dp = new Array(n).fill(0).map(x => new Array(2).fill(0));
    dp[0][1] = -prices[0];
    dp[0][0] = 0;
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[n - 1][0];
};

/**
 * 122. 买卖股票的最佳时机 II
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

示例 1:

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 
 */
var maxProfit = function(prices) {
    // k = infinty
    // 转移方程： dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+price[i])
    // dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-price[i])
    let n = prices.length;
    let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0));
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp[0][0] = 0;
            dp[i][1] = -prices[i];
            continue;
        }
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]);
    }
    return dp[n-1][0];
};

/**
 * 714. 买卖股票的最佳时机含手续费
给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

示例 1:

输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
输出: 8
解释: 能够达到的最大利润:  
在此处买入 prices[0] = 1
在此处卖出 prices[3] = 8
在此处买入 prices[4] = 4
在此处卖出 prices[5] = 9
总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    let dp = new Array(n).fill(0).map(x=>new Array(2).fill(0));
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp[0][0] = 0;
            dp[i][1] = -prices[i]-fee;
            continue;
        }
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]-fee);
    }
    return dp[n-1][0];
};

/**
 * 309. 最佳买卖股票时机含冷冻期
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
示例:

输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 */
 var maxProfit = function(prices) {
    let n = prices.length;
    let dp_i_0 = 0,
        dp_i_1 = -Number.MAX_SAFE_INTEGER,
        dp_i_pre = 0;
    for(let i=0;i<n;i++){
        if(i-1===-1){
            dp_i_0 = 0
            dp_i_1 = -prices[i]
            continue;
        }
        let tmp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0,dp_i_1+prices[i]);
        dp_i_1 = Math.max(dp_i_1,dp_i_pre-prices[i]);
        dp_i_pre = tmp;
    }
    return dp_i_0;
};

/**
 * 123. 买卖股票的最佳时机 III
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

示例 1:

输入：prices = [3,3,5,0,0,3,1,4]
输出：6
解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
示例 2：

输入：prices = [1,2,3,4,5]
输出：4
解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 */
 var maxProfit = function(prices) {
    // 转移方程： dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1]+price[i])
    // dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-price[i])
    let n = prices.length;
    let max_k = 2;
    let dp = new Array(n).fill(0).map(x=>new Array(max_k+1).fill(0).map(y=>new Array(2).fill(0)));
    for(let i=0;i<n;i++){
        for(let k=max_k;k>=1;k--){
            if(i-1===-1){
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i]; 
                continue;
            }
            dp[i][k][0] = Math.max(dp[i-1][k][0] , dp[i-1][k][1]+prices[i])
            dp[i][k][1] = Math.max(dp[i-1][k-1][0]-prices[i] , dp[i-1][k][1]) 
        }
    }
    return dp[n-1][max_k][0];
};

/**
 * 188. 买卖股票的最佳时机 IV
给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

示例 1：

输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
示例 2：

输入：k = 2, prices = [3,2,6,5,0,3]
输出：7
解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
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
var maxProfit = function(k, prices) {
    // 转移方程： dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1]+price[i])
    // dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-price[i])
    let n = prices.length;
    let max_k = k;
    if(max_k>(n/2)){
        return maxProfit_k_inf(prices);
    }
    let dp = new Array(n).fill(0).map(x=>new Array(max_k+1).fill(0).map(y=>new Array(2).fill(0)));
    for(let i=0;i<n;i++){
        for(let k=max_k;k>=1;k--){
            if(i-1===-1){
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i]; 
                continue;
            }
            dp[i][k][0] = Math.max(dp[i-1][k][0] , dp[i-1][k][1]+prices[i]);
            dp[i][k][1] = Math.max(dp[i-1][k-1][0]-prices[i] , dp[i-1][k][1]); 
        }
    }
    return dp[n-1][max_k][0];
};

var rob = function(root) {
    /**
     * 自顶向下
     * 不能同时取该节点和节点的子节点，兄弟节点是可以的
     * 状态和选择，金额，选择是取还是不取
     * dp(root)表示当前所在节点位置所能拿到的最大金额
     * base case， 当root到达叶子节点时，结束,
     * 显然有重叠子问题，可以用备忘录进行消除
     */
    if(root===null) return 0
    return robBinaryTree(root)
    
    function robBinaryTree(root){
        const memo = new Map()
        if(memo.has(root)) return memo.get(root)
        // 取当前的节点，那么下次再取的时候只能跳过下一个的节点
        let do_it = root.val 
         + (root.left===null?0:rob(root.left.left) + rob(root.left.right))
         + (root.right===null?0:rob(root.right.left) + rob(root.right.right))
        // 不取，直接取下一个节点
        let not_do = rob(root.left)+ rob(root.right)

        let res = Math.max(do_it,not_do)
        memo.set(root,res)
        return res
    }
    
};