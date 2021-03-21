/**
 * 28. 实现 strStr()
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
 */
var strStr = function(haystack, needle) {
    // 1. 暴力解法
    if(!needle) return 0;
    let n = haystack.length,
        m = needle.length;
    for(let i=0;i<=n-m;i++){
        let j;
        for(j=0;j<m;j++){
            if(haystack[i+j]!==needle[j]){
                break;
            }
        }
        if(j===m) return i;
    }
    return -1;
};

var strStr = function(haystack, needle) {
    // 1. 暴力解法
    if(!needle) return 0;
    return haystack.indexOf(needle);
};