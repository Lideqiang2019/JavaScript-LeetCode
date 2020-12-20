/**
 * 674 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
 * 滑动窗口，但是与下一题的动态规划类似
 */
var findLengthOfLCIS = function(nums) {
    let ans = 0;
    let res = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]>=nums[i]){
            // 此时需要更新窗口
            ans = i;
        }
        // 比较当前的res最长的长度，和新的窗口下连续递增序列的长度
        res = Math.max(res,i-ans+1)
    }
    return nums.length>0?res:0;
};

/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 动态规划
 */
var lengthOfLIS = function(nums) {
    // 明确dp含义，dp[i]表示以nums[i]结尾的最长递增子序列的长度
    let n = nums.length;
    let res = 0;
    let dp = new Array(n).fill(1)
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            //  归纳,如果i=5，那么nums[5]应该比之前的数都大，
            if(nums[i]>nums[j]){
                // 如果当前的数小于nums[5]，那就将dp改变
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
    }
    // 找出dp中的最大值
    for(let i=0;i<n;i++){
        res = Math.max(res,dp[i])
    }
    return res;
};

/**
 * 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 * @param {

 */
var maxEnvelopes = function(envelopes) {
    // 先对信封的0为进行升序排列，对于0为相同的数组对1维进行降序排列，然后将二维数组转化成了一维数组的LIS问题
    function LengthIS(heights){
        let n = heights.length;
        let dp = new Array(n).fill(1)
        for(let i=0;i<n;i++){
            for(let j=0;j<i;j++){
                if(heights[i]>heights[j]){
                    dp[i] = Math.max(dp[i],dp[j]+1)
                }
            }
        }
        // let res = 0;
        // for(let i=0;i<n;i++){
        //     res = Math.max(res,dp[i])
        // }
        // return res;
        return Math.max(...dp)
    }
    // 1. 排序
    envelopes.sort(function sortByRule(a,b){
    return (a[0]===b[0])? b[1]-a[1]:a[0]-b[0]; 
    })
    // 取出h
    var heights = [];
    for(let i=0;i<envelopes.length;i++){
        heights[i] = envelopes[i][1];
    }
    // 调用LIS方法
    return LengthIS(heights);
};

// 二维数据排序
arr = [[5,4],[6,4],[6,7],[2,3]]
arr.sort(function sortByRule(a,b){
    return (a[0]===b[0])? b[1]-a[1]:a[0]-b[0]; 
})
console.log(arr)