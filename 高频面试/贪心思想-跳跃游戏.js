/**
 * 55. 跳跃游戏
 */
var canJump = function(nums) {
    /**
     * 贪心算法：每一步求最优解，得到全局最优解.
     * 计算每一步能够调到哪一个位置，记录当前的和前一个的较大值，来表示能够跳的最远的位置
     */
    let n = nums.length;
    let farest = 0;
    for(let i=0;i<n-1;i++){
        farest = Math.max(farest, nums[i]+i);
        if(farest<=i){
            // 如果跳不过i，表示遇到0了，已经过不去了
            return false;
        }
    }
    return farest>=n-1;
};

/**
 * 45. 跳跃游戏 II
 */
var jump = function(nums) {
    /**
     * 贪心算法，记录一个区间内，能够调到下一个的最远位置，更新到最远位置
     */
    let n = nums.length;
    let farthest = 0;
    let end = 0;
    let jumpNum = 0;
    for(let i=0;i<n-1;i++){
        farthest = Math.max(farthest, nums[i]+i);
        if(i===end){
            // 此区间所有的值已经遍历，直接调到下一个最大的位置
            jumpNum++;
            end = farthest;
        }
    }
    return jumpNum;
};

// 动态规划版本，会超出时间限制。
var jump = function(nums) {
    /**
     * 动态规划版本，自顶向下，dp(nums, p)表示从p到数组末尾最小的跳跃步数，选择就是当前位置p能够跳的步数，base case是dp(nums,0).可以用memo进行优化计算
     */
    let n = nums.length;
    let memo = new Array(n).fill(n);
    return dp(nums,0);
    function dp(nums,p){
        if(p>=n-1){
            // 已经走到最后了
            return 0;
        }
        if(memo[p]!==n){
            return memo[p];
        }
        let steps = nums[p];
        for(let i=1;i<=steps;i++){
            // 计算当前的dp
            let subProblem = dp(nums, i+p);
            memo[p] = Math.min(subProblem + 1,memo[p]);
        }
        return memo[p];
    }

};