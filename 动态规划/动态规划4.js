/**
 * 0-1背包问题
 * 1. 状态，选择：状态为选的物品的数量和剩余的能够装的重量，选择是装或者不装
 * 2. dp[i][w]，对于前i个物品（有的装了，有的没有），剩余w重量的包，装的价值最大
 * 3. base case dp[0][,...] = dp[...][0] = 0 最终所求即为dp[N][W]
 * 4. 状态转移方程 dp[i][w] = max(dp[i-1][w],dp[i-1][w-wt[i-1]]+val[i-1])
 */
function knapsack(N,W,wt,val){
    let dp = new Array(N+1).fill(0).map(x=>new Array(W+1).fill(0))
    for(let i=1;i<=N;i++){
        for(let w=1;w<=W;w++){
            if(w-wt[i-1]<0){
                dp[i][w] = dp[i-1][w] // 不能装更重的物品了，没有“空间”了
            }else{
                dp[i][w] = Math.max(dp[i-1][w],dp[i-1][w-wt[i-1]]+val[i-1])
            }
        }
    }
    return dp[N][W]
}

let N=3,W=4;
let wt = [2,1,3]
let val = [4,2,3]

// console.log(knapsack(N,W,wt,val))

/**
 * 字集切割，问题描述：有一个数组，是否能够将这个数组分成两个子数组，字数组的和相等
 * sum/2 为w, N为选或者不选的背包数量，这样就可以转化成一个0-1背包问题
 */

function canPartition(nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    if(sum%2!==0){
        // 如果是奇数，那么不可能分成两个相等的数组
        return false
    }
    sum = sum/2;
    let n = nums.length;
    // dp[...][0] = true, dp[0][...] = false
    /**
     * let dp = new Array(n+1).fill(false).map(x=>new Array(sum+1).fill(false))
        for(let i=0;i<=n;i++){
            dp[i][0] = true
        }
        for(let i=1;i<=n;i++){
            for(let j=1;j<=sum;j++){
                if(j-nums[i-1]<0){
                    dp[i][j] = dp[i-1][j]
                }else{
                    dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
                }
            }
        }
     */
    // 状态压缩
    let dp = new Array(sum+1).fill(false)
    dp[0] = true
    for(let i=1;i<=n;i++){
        for(let j=sum;j>=0;j--){
            if(j-nums[i-1]>=0){     
                dp[j] = dp[j] || dp[j-nums[i-1]]
            }
        }
    }
    return dp[sum]
}

// console.log(canPartition([1,5,11,5]))