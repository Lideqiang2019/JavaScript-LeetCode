/**
 * 3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */

var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let left = 0,
        right = 0;
    let window = {};
    while(right<s.length){
        let c = s[right++];
        window[c]?window[c]++:window[c]=1;

        while(window[c]>1){
            // 无重复，应该缩小
            let d = s[left++];
            window[d]--;
        }
        res = Math.max(res,right-left);
    }
    return res;
};


console.log(lengthOfLongestSubstring("abcabcbb"));