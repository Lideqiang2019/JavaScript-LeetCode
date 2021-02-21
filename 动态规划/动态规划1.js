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
// console.log(arr)

/**
 * 9. 回文数
 */
var isPalindrome = function(x) {
    // 是不是回文数，这个比较简单，直接反转后，观察是否相等即可，和回文子序列难度不能相比
    if(x<0)return false
    var cur = 0
    var num = x
    while(num){
        cur = cur*10 + num%10
        num = Math.floor(num/10)
    }
    return x===cur
};

/**
 * 回文串，可以换顺序，非子串
 */
var canPermutePalindrome = function(s) {
    // 判断是否有回文串，回文串的特点是，必须是成对出现，单个字符最多出现一个，那么转化成一个去重的问题
    let obj = {}
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(obj[char]){
            delete obj[char]
        }else{
            obj[char]=1
        }
    }
    return Object.keys(obj).length<=1
};
// let n = 3;

// let dp = new Array(n).fill(0).map(x=>new Array(n).fill(0));
// console.log(dp)
/**
 * 516 给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。
 */
var longestPalindromeSubseq = function(s) {
    /* 
    关键词: 最长、子序列。 
    标签： 动态规划
    1. dp[i][j] 代表s[i...j]的最长回文子序列
    2. 分析base case， 当i=j时，dp[i][i]必然为1，字符串长度为1，当i>j时，dp[i][j]必然为0，因为i应该<=j
    3. 递推，如果s[i]===s[j],dp[i][j]+1,否则取dp[i-1][j]和dp[i][j-1]中较大的值
    4. 分析遍历方向，因为归纳的条件相关，由已知退出未知，画图，此题适合i从下向上,j从左到右
    */ 
    let n = s.length;
    let dp = new Array(n).fill(0).map(x=>new Array(n).fill(0));
    for(let i=0;i<n;i++){
        dp[i][i] = 1
    }
    for(let i=n-2;i>=0;i--){
        for(let j=i+1;j<n;j++){
            if(s[i]===s[j]){
                dp[i][j] = dp[i+1][j-1]+2
            }else{
                dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1])
            }
        }
    }
    return dp[0][n-1]
     /**
     * 降维打击
     */
    /**
     * let n = s.length;
    var dp = new Array(n).fill(1);
    for(let i=n-2;i>=0;i--){
        let pre = 0;
        for(let j=i+1;j<n;j++){
            let temp = dp[j];
            if(s[i]===s[j]){
                dp[j] = pre+2;
            }else{
                dp[j] = Math.max(dp[j],dp[j-1])
            }
            pre = temp;
        }
    }
    return dp[n-1]
     */
};