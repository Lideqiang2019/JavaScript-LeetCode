/**
 * 
 * @param {*} nums 
 * @param {*} S 
 * 494. 目标和
 */
var findTargetSumWays = function(nums, S) {
    /**
     * let res = 0;
    if(nums.length===0) return 0
    backTrace(nums, 0, S)
    return res
    // var memo = new Map();
    function backTrace(nums, i, reset){
        if(i === nums.length){
            if(reset === 0){
                res++;
            }
            return 
        }
        // 选择正
        let s = i.toString() + ',' + reset.toString()
        // if(memo.has(s)) return memo.get(s)
        reset -= nums[i]
        backTrace(nums,i+1,reset)
        reset +=nums[i]

        reset += nums[i]
        backTrace(nums,i+1,reset)
        reset -=nums[i]
        // memo.set(s,reset)
    }
     */
    /**
     * 转化成0-1背包问题sum(A) - Sum(B) = S
     * 2*sum(A) = sum(B) + sum(A) +S
     * 2* sum(A) = sum + S
     * sum(A = (sum+S)/2
     * dp[i][j]表示对于前i个数，装的重量为j，背包问题，选择或者不选
     */
    let sum = 0;
    let n = nums.length;
    for(num of nums){
        sum +=num
    }
    if(sum<S) return 0
    if((sum+S)%2!==0) return 0
    let sum_A = (sum + S) /2
    let dp = new Array(n+1).fill(0).map(x=>new Array(sum_A +1).fill(0))
    dp[0][0] = 1
    for(let i=1;i<=n;i++){
        for(let j=0;j<=sum_A;j++){
            if(j-nums[i-1]>=0){
                dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]]
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[n][sum_A]
};