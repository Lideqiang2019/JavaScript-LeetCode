/**
 * 567. 字符串的排列
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

 

示例 1：

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
示例 2：

输入: s1= "ab" s2 = "eidboaoo"
输出: False
 */
var checkInclusion = function(s1, s2) {
    // 这题其实有点连续子串的意思, 窗口就不会那么麻烦了，注意s1和s2含义，别搞反了
    // s1是need, s2必须是连续的子串
    let left=0,
        right = 0;
    let need = {};
    let window = {};
    for(let c of s1){
        need[c]?need[c]++:need[c]=1;
    }
    let needsLen = Object.keys(need).length;
    let valid = 0;
    while(right<s2.length){
        let c = s2[right];
        right++;
        if(need[c]){
            // 这个字符在need里，需要更新一下窗口
            window[c]?window[c]++:window[c]=1;
            if(need[c] == window[c]){
                valid++;
            }
            
        }

        while(right-left>=s1.length){
            // 如果窗口中的字符比s1中字符还多，应该更新窗口大小
            if(valid == needsLen){
                return true;
            }
            let d = s2[left];
            left++;
            if(need[d]){
                if(need[d] == window[d]){
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return false;
};

console.log(checkInclusion("ab","eidboaooo"));