/**
 * 76. 最小覆盖子串
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：

输入：s = "a", t = "a"
输出："a"
 */
// 滑动窗口模板
/**
 * 
 * @param {*} s 
 * @param {*} t 
 * 滑动窗口的window比较适合处理可能非连续的字符串问题，如果连续的话，则简单得多，只要用一个结果集记录下最大的window即可，
 * 
 * 或者像连续增长的子数组，这个可以用滑动窗口解决
 * 但是如果不连续的最大增长的子串，可以用动态规划解决
 */
var minWindow = function(s,t){
    let need = {}, // t中字符,需要比对字符个数，所以要用字典
        window = {}, // 窗口
        left = 0,
        right = 0;
    let start = 0,  // 窗口的起点
        len = Number.MAX_SAFE_INTEGER;  // 窗口中字符串的长度
    
    let valid = 0; // 字符在need中的有效个数，因为有可能window中有重复的（需要缩小窗口）
    for(let c of t){
        need[c]?need[c]++:need[c]=1;
    }

    let needsLen = Object.keys(need).length; // 这个一般要比t.length要小,因为vaild只有字符在window和need个数相同才更新
    // 以下是滑动窗口模板
    while(right<s.length){
        let c = s[right];
        right++;// 扩大窗口
        if(need[c]){
            window[c]? window[c]++:window[c]=1;
            if(window[c]===need[c]){
                valid++;
            }
        }

        // 窗口需要shrink
        while(valid==needsLen){
            if(right-left<len){
                start = left;
                len = right - left;
            }
            let d = s[left];
            left++;
            // 更新窗口
            if(need[d]){
                if(window[d]===need[d]){
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return len===Number.MAX_SAFE_INTEGER?"":s.substr(start,len);
}

// console.log(minWindow("ADOBECODEBANC","ABCC"))
