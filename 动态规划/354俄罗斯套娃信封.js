/**
 * 354. 俄罗斯套娃信封问题
给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

说明:
不允许旋转信封。

示例:

输入: envelopes = [[5,4],[6,4],[6,7],[2,3]]
输出: 3 
解释: 最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
 */
var maxEnvelopes = function(envelopes) {
    // 对信封进行排序，其实是对一个数组求最长子序列递增的问题
    envelopes.sort((a,b)=>{
        return (a[0]===b[0]?(a[1]-b[1]):(a[0]-b[0]));
    })
    let n = envelopes.length;
    let heights = new Array(n);
    for(let i=0;i<n;i++){
        heights[i] = envelopes[i][1];
    }
    return lengthOfLIS(heights);

    function lengthOfLIS(nums){
        let n = nums.length;
        let dp = new Array(n).fill(1);
        for(let i=0;i<n;i++){
            for(let j=0;j<i;j++){
                if(nums[i]>nums[j]){
                    dp[i] = Math.max(dp[i],dp[j]+1);
                }
            }
        }
        return Math.max(...dp);
    }
}

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));